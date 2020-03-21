import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

export default class Account extends Model {
  public id!: number;
  public name!: string;
  public amount!: number;
  public currency!: string;
}

Account.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(128),
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'USD',
  },
}, {
  sequelize,
  tableName: 'accounts',
});