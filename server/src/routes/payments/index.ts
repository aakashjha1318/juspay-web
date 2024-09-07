import { Router } from 'express';

import SessionRoute from './session';
import OrdersRoute from './orders';
import RefundRoute from './refund';

const router = Router();

router.use('/session', SessionRoute);
router.use('/orders', OrdersRoute);
router.use('/refund', RefundRoute);

export default router;
