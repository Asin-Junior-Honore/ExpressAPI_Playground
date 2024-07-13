import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import User from './user';

class Greeting extends Model {}

Greeting.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  message: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'Greeting',
  timestamps: false,
});

Greeting.belongsTo(User, { foreignKey: 'user_id' });

export default Greeting;
