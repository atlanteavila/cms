import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";
import User from "../models/User";

const router = Router();

// Register User
router.post("/register", async (req: Request, res: Response) => {
  const { username, email, password, orgId, role } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({ username, email, password, orgId, role });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = { userId: user.id, orgId: user.orgId, role: user.role };

    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    res.status(201).json({ token });
  } catch (err: any) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login User
router.post("/login", (req: Request, res: Response, next) => {
  passport.authenticate(
    "local",
    { session: false },
    (err: any, user: any, info: any) => {
      if (err || !user) {
        return res.status(400).json({
          message: info ? info.message : "Login failed",
          user,
        });
      }

      req.login(user, { session: false }, (err) => {
        if (err) {
          res.send(err);
        }

        const payload = { userId: user.id, orgId: user.orgId, role: user.role };
        const token = jwt.sign(payload, process.env.JWT_SECRET!, {
          expiresIn: "1h",
        });

        return res.json({ token, ...payload });
      });
    }
  )(req, res, next);
});

export default router;
