import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
    statusCode?: number;
}

// Middleware xử lý lỗi
const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Đã xảy ra lỗi";

    if (statusCode === 404) {
        return res.status(404).send(`<h1>404 - Không tìm thấy trang</h1><p>${message}</p>`);
    }

    console.error(`Lỗi ${statusCode}: ${message}`);

    res.status(statusCode).json({
        success: false,
        message: message,
        error: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
};

export default errorHandler;
