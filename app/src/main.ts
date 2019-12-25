import app from 'app';
import { migrate } from 'migrator';

import logger from 'logging/logger';

async function main() {
	await migrate();
	app();
}

main().then(() => { /**/ }, (error) => {
	logger.error('Unexpected error', { error });
	process.exit(1);
});

process.on('SIGTERM', () => {
	logger.warn('SIGTERM detected. Shutting down.');
	process.exit(0);
});
