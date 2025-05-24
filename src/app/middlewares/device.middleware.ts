import { Request, Response, NextFunction } from 'express';

export default function authenticateDevice(request: Request, response: Response, next: NextFunction) {
    const token = request.header('x-gaek-token');

    if (!token) {
        response.status(401).json({ message: 'Unauthorized' });
        return;
    }

    // TODO: Alterar isso aqui
    if (token !== 'segredo') {
        response.status(401).json({ message: 'Unauthorized' });
        return;
    }

    next();
}