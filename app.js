import express from 'express';
import userRouter from './routes/user.js';
import profileRouter from './routes/profile.js';
import articleRouter from './routes/article.js';
import authorRouter from './routes/author.js';
import publisherRouter from './routes/publisher.js';
import bookRouter from './routes/book.js';
import tagRouter from './routes/tag.js';

const app = express();
app.use(express.json());


app.use('/users',userRouter);
app.use('/profiles',profileRouter);
app.use('/articles',articleRouter);

app.use('/athors', authorRouter);
app.use('/publishers', publisherRouter);
app.use('/books', bookRouter);
app.use('/tags', tagRouter);

app.use((req,res,next)=>{
    res.status(404).send('not found!')
  })
app.use((error,req,res,next)=>{
  console.log(error);
  res.status(500).send('sorry try later!')
});
const server = app.listen(8080, function () {
  const host = server.address().address;
  const port = server.address().port;
  
  console.log('Server is working : PORT - ',port);
});
