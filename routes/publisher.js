import express from "express";
import Client from '@prisma/client';
const { PrismaClient} = Client; 
const prisma = new PrismaClient();
const router = express.Router();


router.get('/', async function (req, res)  {
    const allPublisher = await prisma.publisher.findMany()
  res.status(200).send( allPublisher);
});

router.post(`/`, async (req, res) => {
    const {  publisherName   } = req.body
    const result = await prisma.publisher.create({
      data: {
        publisherName
      },
    })
    res.status(200).json(result)
  })


export default router;
