import CartModel from '../Models/cart.model.js'
import PosterModel from '../Models/Poster.model.js'

PosterModel.hasMany(CartModel)
CartModel.belongsTo(PosterModel)

/**
 * Controller for Cart Actions
 */
class CartController {

	/**
	 * Method List
	 * @param {Object} req Express Request Object
	 * @param {Object} res Express Response Object
	 */
	list = async (req, res) => {
		const { user_id } = req.query

		const result = await CartModel.findAll(
			{ where: { user_id: user_id }}
		)
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
		const { user_id, poster_id, quantity } = req.body;
		// Tjekker felt data
		if(user_id && poster_id && quantity) {
			// Opretter record
			const model = await CartModel.create(req.body)
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
		const { title, address, zipcode, city, country } = req.body;
		// Tjekker felt data
		if(id && title && address && zipcode && city) {
			// Opretter record
			const model = await CartModel.update(req.body, {
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

	/**
	 * Delete Metode - sletter record
	 * @param {object} req Request Object
	 * @param {object} res Response Object
	 * @return {boolean} Returnerer true/false
	 */	
	remove = async (req, res) => {
		try {
			await CartModel.destroy({ 
				where: { id: req.params.id }
			})
			res.sendStatus(200)
		}
		catch(err) {
			res.send(err)
		}
	}	
}	

export default CartController