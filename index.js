import express from 'express';
import dotenv from 'dotenv';
import UserRouter from './Routes/user.router.js';
import OrgRouter from './Routes/org.router.js';
import AuthRouter from './Routes/authenticate.router.js';
import InitRouter from './Routes/init.router.js';
import PosterRouter from './Routes/poster.router.js';
import GenreRouter from './Routes/genre.router.js';
import CartRouter from './Routes/cart.router.js';

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

// App settings som sikrer at vi kan tilgå form data via request body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// App Settings som sikrer CORS adgang via browser
app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', ['*']);
	res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.append('Access-Control-Allow-Credentials', true);
	res.append('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

// App settings to provide access to request body data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use(InitRouter);
app.use(AuthRouter);
app.use(UserRouter);
app.use(OrgRouter);
app.use(PosterRouter);
app.use(GenreRouter);
app.use(CartRouter);

// Server
app.listen(port, () => {
	console.log(`Server kører på port http://localhost:${port}`);
})