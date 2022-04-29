import express from "express";
import Client from '@prisma/client';
const { PrismaClient} = Client; 
const prisma = new PrismaClient();
const router = express.Router();


router.get('/', async function (req, res)  {
    const allBook = await prisma.book.findMany({
      include:{
        tags:true
      }
    })
  res.status(200).send(allBook);
});

router.post(`/`, async (req, res) => {
    const {  title, authorId,publisherId, tags    } = req.body
    const result = await prisma.book.create({
      data: {
        title,
        authorId,
        publisherId,
        tags:{
          create:tags
        }
      },
    })
    res.status(200).json(result)
  })

export default router;
