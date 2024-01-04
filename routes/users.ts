import { Router, Request, Response, NextFunction } from "express";
import validUser from '../middleware/user';
const router = Router();

/* GET users listing. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  res.json({
    status: 200, users: [
      { id: 1, },
      { id: 2, }
    ]
  });
});

router.post('/', validUser, (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  return res.json(body);
})

export default router;
