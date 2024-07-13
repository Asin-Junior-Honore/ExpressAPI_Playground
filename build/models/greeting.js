"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const user_1 = __importDefault(require("./user"));
class Greeting extends sequelize_1.Model {
}
Greeting.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    message: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: user_1.default,
            key: 'id',
        },
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: database_1.sequelize,
    modelName: 'Greeting',
    timestamps: false,
});
Greeting.belongsTo(user_1.default, { foreignKey: 'user_id' });
exports.default = Greeting;
