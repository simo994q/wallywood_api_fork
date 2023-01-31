import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

// Konfigurerer Node's process.env med vars fra .env fil - bruges til adgang til db
dotenv.config()

// Kalder sequelize objekt og logger på databasen med oplysninger
const sequelize = new Sequelize(
	// Sætter database navn
	process.env.DBNAME,
	// Sætter database bruger
	process.env.DBUSER,
	// Sætter database bruger password
	process.env.DBPASSWD,
	{
		// Sætter host navn
		host: process.env.DBHOST,
		// Sætter database type
		dialect: 'mysql'
	}
)

export { sequelize }