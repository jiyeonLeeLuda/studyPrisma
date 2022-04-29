import express from "express";
import Client from '@prisma/client';
const { PrismaClient} = Client; 
const prisma = new PrismaClient();
const router = express.Router();


router.get('/', async function (req, res)  {
    const allUser = await prisma.user.findMany()
  res.status(200).send(allUser);
});

router.post(`/`, async (req, res) => {
    const {  userName, email    } = req.body
    const result = await prisma.user.create({
      data: {
        userName, 
        email ,
      },
    })
    res.status(200).json(result)
  })

export default router;
