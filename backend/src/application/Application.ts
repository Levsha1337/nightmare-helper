import {Request, Response} from 'express';
import {IConfig} from '../config';

export class Application {
    config: IConfig;

    constructor(config: IConfig) {
        this.config = config;
    }

    public requestHandler(req: Request, res: Response) {
        res.send(req.ip);
    }
}
