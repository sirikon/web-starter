import { JobContext } from 'application/models';
import { injectable } from 'tsyringe';
import winston from 'winston';

@injectable()
export default class Logger {

	private readonly winstonLogger: winston.Logger;

	constructor(jobCtx: JobContext) {
		this.winstonLogger = createLogger(jobCtx);
	}

	public info(message: string, meta?: any) {
		this.winstonLogger.info(message, meta);
	}

	public warn(message: string, meta?: any) {
		this.winstonLogger.warn(message, meta);
	}

	public error(message: string, meta?: any) {
		this.winstonLogger.error(message, meta);
	}

}

function createLogger(jobCtx: JobContext): winston.Logger {
	return winston.createLogger({
		level: 'info',
		defaultMeta: { jobId: jobCtx.id },
		transports: [
			new winston.transports.Console({
				format: winston.format.combine(
					winston.format.timestamp(),
					winston.format.simple()),
			}),
		],
	});
}
