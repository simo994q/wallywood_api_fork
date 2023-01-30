import express from 'express';
import UserRouter from './Routes/user.router.js';
import AuthRouter from './Routes/authenticate.router.js';
import InitRouter from './Routes/init.router.js';
import PosterRouter from './Routes/poster.router.js';
import GenreRouter from './Routes/genre.router.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();
// App Settings to ensure CORS Access from browser
app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', ['*']);
	res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.append('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

// App settings to provide access to request body data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(InitRouter);
app.use(AuthRouter);
app.use(UserRouter);
app.use(PosterRouter);
app.use(GenreRouter);

app.listen(port, () => {
	console.log(`Server kører på port http://localhost:${port}`);
})