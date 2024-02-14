export const env  = {
    database: 'charge_véhicule',
    username: 'postgres',
    password: '88CL41GSZafo',
    host: 'localhost',
    port:'5432',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
