import express from "express";
import Client from '@prisma/client';
const { PrismaClient} = Client; 
const prisma = new PrismaClient();

const router = express.Router();

router.get('/', async function (req, res)  {
    const { userId } = req.query;
    
    const allArticles = await prisma.article.findMany({
        where: userId?{ userId: Number(userId) }:{},
    })
  res.send(allArticles);
});

  router.post(`/`, async (req, res) => {
    const {  userId, title, content } = req.body;

    const result = await prisma.article.create({
      data: {
        userId,
        title,
        content,
      },
    })
    res.json(result);
  })

  router.put('//:id', async (req, res) => {
    const { id } = req.params
    const {title, content} = req.body;
    const article = await prisma.article.update({
      where: { articleId: Number(id) },
      data: { title, content,},
    })
    res.json(article);
  })

  router.patch('//:id', async (req, res) => {
    const { id } = req.params
    const {title, content} = req.body;
    const article = await prisma.article.update({
      where: { articleId: Number(id) },
      data: { title, content,},
    })
    res.json(article);
  })

  router.delete(`//:id`, async (req, res) => {
    const { id } = req.params
    const article = await prisma.article.delete({
      where: {
        articleId: Number(id),
      },
    })
    res.json(article)
  })


export default router;
