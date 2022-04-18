import express, { Request, Response } from "express";
import path from "path";
import cors from "cors";

import { router as CryptoInfoController } from "./controllers/CryptoInfoController";
import { router as UserController } from "./controllers/UserController";
import "./db/mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));
app.use(CryptoInfoController);
app.use(UserController);

const __parent = path.resolve(__dirname, "..");
// console.log("__parent", __parent);

const root = path.join(__parent, "client", "build");

console.log("root", root);

const root2 = "/client/build";

console.log("root2", root2);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(root2));
  app.get("*", (req, res) => res.sendFile("index.html", { root2 }));
} else {
  app.get("/", (req, res) => {
    res.send("API IS RUNNING......");
  });
}

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.resolve(__dirname, "../../client/build")));

//   app.get("*", (req: Request, res: Response) => {
//     res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
//   });
// }

export default app;
