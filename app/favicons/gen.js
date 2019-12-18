const fs = require('fs');
const pathUtils = require('path');

const favicons = require('favicons');

const packageJsonPath = pathUtils.join(__dirname, '..', 'package.json');
const packageContent = fs.readFileSync(packageJsonPath, { encoding: 'utf8' });
const package = JSON.parse(packageContent);

const faviconsBaseFolder = pathUtils.join(__dirname, '../resources/web/generated/favicons/');

const source = pathUtils.join(__dirname, 'icon.png');
const config = {
	path: '/',
	appName: package.displayName,
	appDescription: package.description,
	developerName: package.author.name,
	developerURL: package.author.url,
	dir: 'auto',
	lang: 'en-US',
	background: '#FFFFFF',
	theme_color: '#FF4500',
	display: 'standalone',
	orientation: 'any',
	scope: '/',
	start_url: '/',
	version: '1.0',
	logging: false,
	icons: {
		android: true,
		appleIcon: true,
		appleStartup: true,
		coast: true,
		favicons: true,
		firefox: true,
		windows: true,
		yandex: true,
	},
};
const callback = function (error, response) {
	if (error) {
		// tslint:disable-next-line: no-console
		console.log(error.message); // Error description e.g. "An unknown error has occurred"
		return;
	}

	// tslint:disable-next-line: no-console
	console.log('Saving images...');
	response.images.forEach(image => {
		fs.writeFileSync(pathUtils.join(faviconsBaseFolder, 'files', image.name), image.contents);
	});

	// tslint:disable-next-line: no-console
	console.log('Saving files...');
	response.files.forEach(image => {
		fs.writeFileSync(pathUtils.join(faviconsBaseFolder, 'files', image.name), image.contents);
	});

	// tslint:disable-next-line: no-console
	console.log('Saving headers...');
	fs.writeFileSync(pathUtils.join(faviconsBaseFolder, 'headers.html'), response.html.join('\n'));
};

// tslint:disable-next-line: no-console
console.log('Generating assets...');

favicons(source, config, callback);
