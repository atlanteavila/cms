import { Router, Request, Response } from "express";
import Page from "../models/Page";

const router = Router();

// @route   GET /api/pages
// @desc    Get all pages for a specific client
// @access  Public
router.get("/", async (req: Request, res: Response) => {
  const { clientId } = req.query;

  try {
    const pages = await Page.find({ clientId });
    res.status(200).json({ success: true, data: pages });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// @route   POST /api/pages
// @desc    Create a new page
// @access  Public
router.post("/", async (req: Request, res: Response) => {
  const { clientId, title, content, featuredImage } = req.body;

  try {
    const page = new Page({
      clientId,
      title,
      content,
      featuredImage,
    });

    await page.save();

    res.status(201).json({ success: true, data: page });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// @route   GET /api/pages/:id
// @desc    Get a single page by ID
// @access  Public
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { clientId } = req.query;

  try {
    const page = await Page.findOne({ _id: id, clientId });

    if (!page) {
      return res
        .status(404)
        .json({ success: false, message: "Page not found" });
    }

    res.status(200).json({ success: true, data: page });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// @route   PUT /api/pages/:id
// @desc    Update a page by ID
// @access  Public
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { clientId, title, content, featuredImage } = req.body;

  try {
    const page = await Page.findOneAndUpdate(
      { _id: id, clientId },
      { title, content, featuredImage, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    if (!page) {
      return res
        .status(404)
        .json({ success: false, message: "Page not found" });
    }

    res.status(200).json({ success: true, data: page });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// @route   DELETE /api/pages/:id
// @desc    Delete a page by ID
// @access  Public
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { clientId } = req.body;

  try {
    const page = await Page.findOneAndDelete({ _id: id, clientId });

    if (!page) {
      return res
        .status(404)
        .json({ success: false, message: "Page not found" });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
});

export default router;
