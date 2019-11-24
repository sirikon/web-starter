#!/usr/bin/env node
const fs = require('fs');
const pathUtils = require('path');

const packageJsonPath = pathUtils.join(__dirname, '..', '..', 'app', 'package.json');
const packageContent = fs.readFileSync(packageJsonPath, { encoding: 'utf8' });
const package = JSON.parse(packageContent);
console.log(package.name);
