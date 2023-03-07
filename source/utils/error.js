#!/usr/bin/env node
export default function error(message, details) {
    process.stdout.write('\x1b[41;97m ERROR \x1b[0m ' + message + '\n\x1b[30;107m DETAILS \x1b[0m ' + (details ? '\n' + details : 'NO DETAILS') + '\n');
};