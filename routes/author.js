import express from "express";
import Client from '@prisma/client';
const { PrismaClient} = Client; 
const prisma = new PrismaClient();
const router = express.Router();


router.get('/', async function (req, res)  {
    const allAuthor = await prisma.author.findMany()
  res.status(200).send( allAuthor);
});

router.post(`/`, async (req, res) => {
    const {  authorName   } = req.body
    const result = await prisma.author.create({
      data: {
        authorName
      },
    })
    res.status(200).json(result)
  })

  //author추가하면서 book등록하는 엔드포인트 만들어보기

export default router;
