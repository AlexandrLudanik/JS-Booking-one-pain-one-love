const fsextra = require('fs-extra');
const path = require('path');

const logLocation = path.resolve('./logs.log');

fsextra.removeSync(logLocation);