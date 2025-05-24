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
                if (!device.mac) {
                    return res.status(400).json({ error: 'Bad request, device must have mac' });
                }

                await aulaAlunoRegistroModel.criarRegistro({
                    tipo_registro: 'entrada',
                    dthr_registro: new Date(),
                    id_aula_aluno: 1
                });
            }

            console.log('Received MACs:', devices, 'for device ID:', deviceId);
            return res.status(201).json({ message: 'Created' });
        } catch (error) {
            console.error('Error in register:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async test(req: Request, res: Response): Promise<any> {
        try {
            return res.status(200).json({ message: 'testado' });
        } catch (error) {
            return res.status(400).json({ error: 'Error on test route' + error });
        }
    }
}

export default new IotController();