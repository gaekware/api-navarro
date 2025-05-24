import { Router } from 'express';
import IotController from '../controllers/IotController';
import authenticateDevice from '../middlewares/device.middleware';

const iotRoute = Router();

iotRoute.post('/register', authenticateDevice, IotController.register);

export default iotRoute;