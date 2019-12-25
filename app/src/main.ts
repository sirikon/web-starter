import 'reflect-metadata';
import { container } from 'tsyringe';

import app from 'app';
import { migrate } from 'migrator';

import { JobContext } from 'application/models';
import Logger from 'logging/logger';

async function main() {
	await migrate();
	app();
}

main().then(() => { /**/ }, (error) => {
	getLogger().error('Unexpected error', { error });
	process.exit(1);
});

process.on('SIGTERM', () => {
	getLogger().warn('SIGTERM detected. Shutting down.');
	process.exit(0);
});

function getLogger(): Logger {
	const childContainer = container.createChildContainer();
	childContainer.register(JobContext, { useValue: new JobContext('start') });
	return childContainer.resolve(Logger);
}
