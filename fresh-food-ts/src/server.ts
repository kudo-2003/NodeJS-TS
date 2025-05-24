//F:\File\NodeJS-TS\fresh-food-ts\src\server.ts
import express, { Application } from 'express';
import path from 'path';
import dotenv from 'dotenv';

import homeRoutes from './routes/homeRoutes';
import basketRoutes from './routes/basketRoutes';


dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// EJS view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', homeRoutes);

app.use('/basket', basketRoutes);



export default app;
