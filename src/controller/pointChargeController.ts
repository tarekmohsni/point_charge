import { Request, Response } from 'express';
import PointChargeBo from '../objet_métier/point_chargeBo';

const pointChargeBo = new PointChargeBo();

export = {
    createPointCharge: (req: Request, res: Response) => {
        pointChargeBo.createPointCharge(req, res);
    }
};
