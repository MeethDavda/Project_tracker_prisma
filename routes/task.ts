const express = require("express");
const router = express.Router();
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

router.post("/addTask", async (req: Request, res: Response) => {
  const { topic, status, comments, name } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      name: name,
    },
  });

  const task = await prisma.task.create({
    data: {
      topic: topic,
      status: status,
      comments: comments,
      name: name,
      owner: {
        connect: {
          id: user?.id,
        },
      },
    },
  });
  res.send("Added task successfully").status(200);
});

router.get("/allTasks", async (req: Request, res: Response) => {
  try {
    const allTasks = await prisma.task.findMany({});
    res.send(allTasks).status(200);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:userId", async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const allTasks = await prisma.task.findMany({
      where: {
        ownerId: Number(userId),
      },
    });
    res.send(allTasks).status(200);
  } catch (error) {
    res.send(error);
  }
});

export default router;
