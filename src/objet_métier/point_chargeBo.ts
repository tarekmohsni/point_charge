import { Request, Response } from 'express';
import { models } from '../models/database';
import {generateIdPointCharge} from "../helpers/helpers";

class PointChargeBo {

    //creér point charge
    async createPointCharge (req:Request, res:Response){
        try {

            const {nom,type_emplacement}= req.body

            if (!nom || typeof nom !== 'string' || nom.trim() === '') {
                return res.status(400).json({
                    success: false,
                    message: "Le nom du point de charge est requis et ne peut pas être vide." });
            }

            if (!type_emplacement || (type_emplacement !== 'domicile' && type_emplacement !== 'bureaux')) {
                return res.status(400).json({
                    success: false,
                    message: "Le type d'emplacement doit être 'domicile' ou 'bureaux'." });
            }

            const point_charge_id = await this.generateUniquePointChargeId();

            const newChargingPoint = await models.point_charge.create({ point_charge_id, nom, type_emplacement });

            res.status(200).json({
                success: true,
                data: newChargingPoint,
            });

        }catch (error){
            res.status(500).json({ message: 'Erreur lors de la création du point de charge.' });
        }
    }

    async generateUniquePointChargeId(): Promise<string> {
        try {
            let init_point_charge_id: string | null = null;
            while (!init_point_charge_id) {
                const currentId: string = generateIdPointCharge();
                const existingPoint = await models.point_charge.findOne({ where: { point_charge_id: currentId } });
                if (!existingPoint) {
                    init_point_charge_id = currentId;
                }
            }
            return init_point_charge_id;
        } catch (error) {
            throw new Error('Une erreur est survenue lors de la génération de l identifiant unique du point de charge.');
        }
    }


}

export = PointChargeBo