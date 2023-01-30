import { sequelize } from '../Config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class GenreModel extends Model {}

GenreModel.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	slug: {
		type: DataTypes.STRING,
		allowNull: false
	}		
},{
	sequelize,
	modelName: 'genre',
	freezeTableName: true,
	underscored: true
})

export default GenreModel