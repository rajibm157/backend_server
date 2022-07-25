import { Request, Response, NextFunction } from 'express';
import { BadRequest } from "_errors";

export const validate = (schema: any) => (
    async function (req: Request, _res: Response, next: NextFunction) {
        try {
            await schema.validate({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            next();
        } catch (error: any) {
            const message: string = error?.message?.split(".");
            throw new BadRequest(message[1]);
        }
    }

)
