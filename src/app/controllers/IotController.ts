import { Request, Response } from 'express';
import aulaAlunoRegistroModel from '../models/aulaAlunoRegistro.model';

class IotController {
    async register(req: Request, res: Response): Promise<any> {
        const { devices, deviceId } = req.body;

        if (!devices || !deviceId) {
            return res.status(400).json({ error: 'Bad request' });
        }

        try {
            for (const device of devices) {
                if (!device.mac || device.mac === '' || !device.tipo_registro) {
                    return res.status(400).json({ error: 'Bad request, device must have mac and tipo_registro' });
                }

                if (device.tipo_registro !== 'entrada' && device.tipo_registro !== 'saida') {
                    return res.status(400).json({ error: 'Bad request, tipo_registro must be entrada or saida' });
                }

                await aulaAlunoRegistroModel.criarRegistro({
                    tipo_registro: device.tipo_registro,
                    dthr_registro: new Date(),
                    mac: device.mac,
                });
            }

            console.log('Received MACs:', devices, 'for device ID:', deviceId);
            return res.status(201).json({ message: 'Created' });
        } catch (error) {
            console.error('Error in register:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export default new IotController();