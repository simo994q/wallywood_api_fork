import { sequelize } from '../Config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class CartModel extends Model {}

CartModel.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	user_id: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	poster_id: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	quantity: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
},{
	sequelize,
	modelName: 'cart',
	freezeTableName: true,
	underscored: true
})

export default CartModel