# Node.js Express CMS with TypeScript and Passport.js Authentication

This project is a multi-tenant CMS using Node.js, Express, TypeScript, and Passport.js for authentication. It supports JWT-based authentication and is configured for deployment on DigitalOcean App Platform.

## Prerequisites

- Node.js (>=14)
- npm (>=6)
- Git
- MongoDB URI
- DigitalOcean account

## Project Setup

### 1. Initialize Project

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo.git
   cd your-repo
   ```

### Install Dependencies

```
npm install
```

### Configure Environment Variable

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Project Structure

```
.
 ├── src
 │   ├── config
 │   │   └── passport.ts
 │   │   └── dbConnect.ts
 │   ├── middleware
 │   │   └── auth.ts
 │   ├── models
 │   │   └── Page.ts
 │   │   └── User.ts
 │   ├── routes
 │   │   └── pages.ts
 │   │   └── auth.ts
 │   └── server.ts
 ├── .env
 ├── .gitignore
 ├── nodemon.json
 ├── package.json
 ├── tsconfig.json
 └── .do
     └── deploy.template.yaml
```

### Development
```
npm run dev
```

### Production

## To start the server in production:

## Build the project:

```
bash
Copy code
npm run build
Start the server:

bash
Copy code
npm start
```