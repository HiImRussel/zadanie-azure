/** Sequelize */
import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    DataTypes,
} from "sequelize";

/** Config */
import sequelize from "../configs/db.config";

class Quote extends Model<
    InferAttributes<Quote>,
    InferCreationAttributes<Quote>
> {
    declare id: CreationOptional<number>;
    declare quote: string;
}

Quote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        quote: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "quotes",
        timestamps: false,
    }
);

export default Quote;
