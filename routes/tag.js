import express from "express";
import Client from '@prisma/client';
const { PrismaClient} = Client; 
const prisma = new PrismaClient();
const router = express.Router();


router.get('/', async function (req, res)  {
    const allTag = await prisma.tag.findMany({
      include:{
        books:true
      }
    })
  res.status(200).send(allTag);
});

router.post(`/`, async (req, res) => {
    const {   label, books    } = req.body
    const result = await prisma.tag.create({
      data: {
        label,
        books:{
          create:books
        }
      },
    })
    res.status(200).json(result)
  })

export default router;
