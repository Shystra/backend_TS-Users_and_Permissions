import { Request, Response } from 'express';
import { HttpRequest, HttpResponse } from '../../infra/http/httpAdapter';
import { errorMiddleware } from '../../infra/middlewares/error.middleware';


export const adapterRoutes = (controller: any, method: any) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = {
            body: req.body,
            params: req.params,
            query: req.query,
            headers: req.headers
        }
        const httpResponse = await controller[method](httpRequest)

        if(httpResponse.status >= 200 && httpResponse.status < 299){
            res.status(httpResponse.status).json(httpResponse);

        } else {
            errorMiddleware(httpResponse, req, res);
        }
    };
};