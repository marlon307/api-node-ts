import express, { json, Express } from 'express';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(json());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log(`http://localhost:3000/`);
});

export default app;
