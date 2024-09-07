import { NextFunction, Request, Response, Router } from 'express';
import createSession from '../../../controllers/payments/session/create';

const router = Router();

router.post('/create', async (req: Request, res: Response, next: NextFunction) => {
  const result = await createSession(req.body);
  if (result instanceof Error) return next(result);
  return res.status(200).json(result);
});

export default router;
