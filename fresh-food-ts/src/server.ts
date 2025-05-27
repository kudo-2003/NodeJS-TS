import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import dotenv from 'dotenv';

import { sequelize } from "./database/connection";

// Import routes
import homeRoutes from './routes/homeRoutes';
import basketRoutes from './routes/basketRoutes';
import aboutRoutes from './routes/aboutRoutes';
import freshRoutes from './routes/freshRoutes';
import adminRoutes from './routes/adminRoutes';


import errorHandler from './middlewares/errorHandler';

dotenv.config();

const app: Application = express();

// Interface lỗi tùy chỉnh
interface CustomError extends Error {
    statusCode?: number;
}

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
app.use('/about', aboutRoutes);
app.use('/admin', adminRoutes);
app.use('/fresh', freshRoutes);


// 🆕 Middleware xử lý lỗi 404
app.use((req: Request, res: Response, next: NextFunction) => {
    const error: CustomError = new Error("Không tìm thấy trang!") as CustomError;
    error.statusCode = 404;
    next(error);
});

// ✅ Middleware xử lý lỗi chung
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next);
});

sequelize
  .authenticate()
  .then(() => console.log("✅ Kết nối database thành công! mysql"))
  .catch((error) => console.error("❌ Lỗi kết nối database:", error));

export default app;
