const express = require("express");
const router = express.Router();
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

router.post("/addTask", async (req: Request, res: Response) => {
  const { topic, status, comments, ownerId } = req.body;
  const task = await prisma.task.create({
    data: {
      topic: topic,
      status: status,
      comments: comments,
      owner: {
        connect: {
          id: ownerId,
        },
      },
    },
  });
  res.send("Added task successfully").status(200);
});

export default router;
