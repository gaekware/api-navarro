import { Router } from 'express';
import iotRoute from './iot.route';

const router = Router();

router.use('/iot', iotRoute);

export default router;
