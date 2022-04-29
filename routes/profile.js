import express from "express";
import Client from '@prisma/client';
const { PrismaClient} = Client; 
const prisma = new PrismaClient();

const router = express.Router();

router.get('/', async function (req, res)  {
    const allProfile = await prisma.profile.findMany()
  res.send(allProfile);
});

  router.post(`/`, async (req, res) => {
    const {  userId, avataImg ,nickName    } = req.body

    const result = await prisma.profile.create({
      data: {
        userId,
        avataImg,
        nickName,
      },
    })
    res.json(result)
  })


export default router;
