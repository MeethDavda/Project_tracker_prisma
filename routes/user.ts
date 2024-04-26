const express = require("express");
const router = express.Router();
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

router.post("/addUser", async (req: Request, res: Response) => {
  const { email, name } = req.body;
  const user = await prisma.user.create({
    data: {
      email: email,
      name: name,
    },
  });
  res.send(user).status(200);
});

export default router;
