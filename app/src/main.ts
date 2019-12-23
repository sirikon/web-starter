import app from 'app';
import { migrate } from 'migrator';

async function main() {
	await migrate();
	app();
}

main().then(() => { /**/ }, (err) => {
	// tslint:disable-next-line: no-console
	console.log(err);
	process.exit(1);
});

process.on('SIGTERM', () => {
	// tslint:disable-next-line: no-console
	console.log('SIGTERM detected. Shutting down.');
	process.exit();
});
