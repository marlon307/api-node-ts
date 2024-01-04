import { Router, Request, Response, RouterOptions } from 'express';
const router = Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next) => {
  return res.json({ title: 'Express' });
});

export default router;
