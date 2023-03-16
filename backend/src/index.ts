import express from 'express';
import {Application} from './application/Application';
import Config from './config';
import {Logger, SOURCE} from './tools/Logger';

const webServer = express();
const app = new Application(Config);

if (Config.doLogRequests) {
    webServer.use('*', (req, res, next) => {
        next();

        Logger.req(req, res);
    });
}

webServer.use('/api/*', app.requestHandler);
webServer.use(
    '/',
    express.static('../frontend/public', {
        index: 'index.html'
    })
);

webServer.listen(Config.port, () => {
    Logger.log(`WebServer is listening on ${Config.host}:${Config.port}!`, SOURCE.SERVER);
});

process.on('uncaughtException', function (error) {
    Logger.error('Uncaught exception: ' + error.message, SOURCE.PROCESS);
    process.exit(1);
});
