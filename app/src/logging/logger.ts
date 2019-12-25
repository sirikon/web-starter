import winston from 'winston';

function createLogger(): winston.Logger {
	return winston.createLogger({
		level: 'info',
		transports: [
			new winston.transports.Console({
				format: winston.format.combine(
					winston.format.timestamp(),
					winston.format.simple()),
			}),
		],
	});
}

export default createLogger();
