import { Request, Response } from "express";
import { HttpError } from "../../app/errors/httpError";


export function errorMiddleware(error:HttpError, req: Request, res: Response){
    const status = error.status || 500;
    const message = error.message || "Internal server error";

    res.status(status).json({
        status,
        message
    });
}