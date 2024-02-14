import { Router } from 'express';
import pointChargeController from '../controller/pointChargeController';


let router = Router();

let apiRouters = function () {
    router.post('/api/pointCharge', pointChargeController.createPointCharge);

    return router;
};

export = apiRouters;