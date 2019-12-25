import logger from './logger';

async function measure<T>(name: string, cb: () => Promise<T>): Promise<T> {
	const hrstart = process.hrtime();
	const result = await cb();
	const hrend = process.hrtime(hrstart);
	const seconds = hrend[0];
	const millis = hrend[1] / 1000000;
	logger.info(`Block '${name}' took ${seconds}s ${millis}ms`, { seconds, millis });
	return result;
}

export default measure;
