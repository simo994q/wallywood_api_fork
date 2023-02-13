import { sequelize } from '../Config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class ContactModel extends Model {}

ContactModel.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false
	},
	comment: {
		type: DataTypes.TEXT,
		allowNull: false
	}
},{
	sequelize,
	modelName: 'contact',
	freezeTableName: true,
	underscored: true
})

export default ContactModel