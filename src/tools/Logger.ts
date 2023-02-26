import chalk from 'chalk';
import {Request, Response} from 'express';

export enum SOURCE {
    SERVER = '[SERVER]  ',
    DB = '[DATABASE]',
    COMMON = '[COMMON]  ',
    PROCESS = '[PROCESS] '
}

export enum SEVERITY {
    INFO = '[INFO]   ',
    WARNING = '[WARN]   ',
    ERROR = '[ERROR]  ',
    REQUEST = '[REQUEST]'
}

export class Logger {
    public static req(req: Request, res: Response) {
        let logLine = '';

        logLine += chalk.grey(SEVERITY.REQUEST);
        logLine += ' ';
        logLine += Logger.timestamp();
        logLine += chalk.cyanBright(` [${res.statusCode}] `);
        logLine += `from ${req.ip} - ${req.baseUrl}`;

        console.log(logLine);
    }

    public static log(message: string, source: SOURCE = SOURCE.COMMON) {
        console.log(`${chalk.blueBright(SEVERITY.INFO)} ${source} ${message}`);
    }

    public static warn(message: string, source: SOURCE = SOURCE.COMMON) {
        console.log(chalk.yellowBright(`${SEVERITY.WARNING} ${source} ${message}`));
    }

    public static error(error: string, source: SOURCE = SOURCE.COMMON) {
        console.log(chalk.redBright(`${SEVERITY.ERROR} ${source} ${error}`));
    }

    public static timestamp() {
        const time = new Date();
        const hours = String(time.getHours());
        const minutes = String(time.getMinutes());
        const seconds = String(time.getSeconds());

        return `[${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}]`;
    }
}
