import CartModel from '../Models/cart.model.js'
import PosterModel from '../Models/Poster.model.js'
import decodeToken from '../Middleware/decodeToken.js'

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
		// Henter user id fra token
		const user_id = decodeToken(req)
		// Henter all records i kurv ud fra user id
		const result = await CartModel.findAll(
			{ where: { user_id: user_id },
			include: {
				model: PosterModel,
				as: 'poster',
				attributes: ['id', 'name', 'image', 'price']
			}

		
			},
			
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
		// Henter user id fra token
		const user_id = decodeToken(req, res)

		console.log(req.body);
		// Destructure assignment af form data fra request body
		const { poster_id, quantity } = req.body;
		const data = {
			user_id: user_id,
			poster_id: poster_id,
			quantity: quantity
		}
		// Tjekker felt data
		if(poster_id && quantity) {
			// Opretter record
			const model = await CartModel.create(data)
			// Sender nyt id som json object
			res.json({ newId: model.id })
		} else {
			res.sendStatus(418)
		}
	}

	update = async (req, res) => {	
		// Henter user id fra token
		const user_id = decodeToken(req)		
		// Destructure assignment af form data fra request body
		const { poster_id, quantity } = req.body;
		// Tjekker felt data
		if(user_id && poster_id && quantity) {
			// Opretter record
			const model = await CartModel.update(req.body, {
				where: { 
					poster_id: poster_id,
					user_id: user_id 
				},
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
		// Henter user id fra token
		const user_id = decodeToken(req)		

		try {
			await CartModel.destroy({ 
				where: { 
					id: req.params.id,
					user_id: user_id
				}
			})
			res.sendStatus(200)
		}
		catch(err) {
			res.send(err)
		}
	}	
}	

export default CartController