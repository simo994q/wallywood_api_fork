import UserModel from '../Models/user.model.js'
import OrgModel from '../Models/Org.model.js'

OrgModel.hasMany(UserModel)
UserModel.belongsTo(OrgModel)

/**
 * Controller for User Actions
 */
class UserController {

	/**
	 * Method List
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	list = async (req, res) => {
		// Indhenter parametre fra request objekt
		const qp = QueryParamsHandle(req, 'id, firstname, lastname')

		// Eksekverer sequelize metode med management values
		const result = await UserModel.findAll({
			attributes: qp.attributes,
			order: [qp.sort_key],
			limit: qp.limit,
			include: {
				model: OrgModel,
				attributes: ['id', 'title']
			}
		})
		// Udskriver resultat i json format
		res.json(result)
	}

	/**
	 * Method Details
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	details = async (req, res) => {
		// Destructure assignment af id. 
		const { id } = req.params || 0
		// Eksekverer sequelize metode med attributter og where clause
		const result = await UserModel.findOne({
			attributes: ['id', 'firstname', 'lastname', 'email', 'is_active', 'createdAt', 'updatedAt'],
			where: { id: id }
		})
		// Udskriver resultat i json format
		res.json(result)
	}

	/**
	 * Method Details
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	create = async (req, res) => {
		// Destructure assignment af form data fra request body
		const { firstname, lastname, email, password, org_id } = req.body;
		// Tjekker felt data
		if(firstname && lastname && email && password && org_id) {
			// Opretter record
			const model = await UserModel.create(req.body)
			// Sender nyt id som json object
			res.json({ newId: model.id })
		} else {
			res.sendStatus(418)
		}
	}

	update = async (req, res) => {
		// Destructure assignment af id. 
		const { id } = req.params || 0
		// Destructure assignment af form data fra request body
		const { firstname, lastname, email, password, org_id } = req.body;
		// Tjekker felt data
		if(id && firstname && lastname && email && password && org_id) {
			// Opretter record
			const model = await UserModel.update(req.body, {
				where: { id: id },
				individualHooks: true
			})
			// Sender nyt id som json object
			res.json({ 
				msg: 'Record update' 
			})
		} else {
			res.sendStatus(418)
		}	
	}
}

export default UserController