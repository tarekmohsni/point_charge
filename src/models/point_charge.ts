import { Model, DataTypes, Sequelize } from 'sequelize';

interface Point_chargeAttributes {
    point_charge_id: string;
    nom: string;
    type_emplacement: string;
    createdAt: Date,
    updatedAt: Date

}

class PointCharge extends Model<Point_chargeAttributes> implements Point_chargeAttributes {
    public point_charge_id!: string;
    public nom!: string;
    public type_emplacement!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

const initPoint_chargeModel = (sequelize: Sequelize) => {
    PointCharge.init(
        {
            point_charge_id: {
                type: DataTypes.STRING,
                primaryKey: true,
            },
            nom: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            type_emplacement: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'PointCharge',
            tableName: 'point_Charges'
        }
    );

    return PointCharge;
};

export default initPoint_chargeModel;