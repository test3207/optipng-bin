'use strict';
const path = require('path');
const log = require('logalot');
const bin = require('.');
const os = require('os');

(async () => {
	try {
		await bin.run(['--version']);
		log.success('optipng pre-build test passed successfully');
	} catch (error) {
		log.warn(error.message);
		
		const platforms = ['freebsd', 'linux', 'sunos'];
		let dest = path.resolve(__dirname, '../vendor', os.platform());
		if (platforms.includes(os.platform)) {
			dest = path.join(os.arch());
		}

		bin.dest(dest);
	}
})();
