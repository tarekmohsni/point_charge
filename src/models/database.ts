import { Sequelize } from 'sequelize';
import {env} from '../config/env';
import initPoint_chargeModel from "./point_charge";
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: env.host,
    port: 5432,
    username: env.username,
    password: env.password,
    database: env.database,
});

const point_charge = initPoint_chargeModel(sequelize);
const models = {
    point_charge
};

const authenticateAndSync = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie.');
        await sequelize.sync({ alter: true });
        console.log('Modèles synchronisés avec la base de données.');
    } catch (error) {
        console.error('Erreur lors de la connexion ou de la synchronisation avec la base de données:', error);
    }
};

authenticateAndSync();

export { sequelize, models };
