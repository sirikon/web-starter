// tslint:disable: no-console

interface IConfiguration {
	web: {
		host: string;
		port: number;
	};
	postgres: {
		host: string;
		port: number;
		database: string;
		username: string;
		password: string;
	};
}

function getConfiguration(): IConfiguration {
	return {
		web: {
			host: paramString('WEB_HOST', '0.0.0.0'),
			port: paramInt('WEB_PORT', 3000),
		},
		postgres: {
			host: paramString('POSTGRES_HOST', '127.0.0.1'),
			port: paramInt('POSTGRES_PORT', 5432),
			database: paramString('POSTGRES_DATABASE', 'postgres'),
			username: paramString('POSTGRES_USERNAME', 'postgres'),
			password: paramString('POSTGRES_PASSWORD', '12345'),
		},
	};
}

function paramString(name: string, fallback: string): string {
	return process.env[name] || fallback;
}

function paramInt(name: string, fallback: number): number {
	const value = process.env[name];
	return value ? parseInt(value, 10) : fallback;
}

export default getConfiguration();
