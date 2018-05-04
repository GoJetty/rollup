import minimist from 'minimist';
import help from 'help.md';
import { version } from 'package.json';
import run from './run/index';
import { commandAliases } from '../../src/utils/mergeOptions';

const command = minimist(process.argv.slice(2), {
	alias: commandAliases
});

if (command.help || process.argv.length <= 2) {
	console.log(`\n${help.replace('__VERSION__', version)}\n`); // eslint-disable-line no-console
} else if (command.version) {
	console.log(`rollup version ${version}`); // eslint-disable-line no-console
} else {
	try {
		require('source-map-support').install();
	} catch (err) {
		// do nothing
	}

	run(command);
}
