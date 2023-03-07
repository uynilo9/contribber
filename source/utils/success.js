#!/usr/bin/env node
export default function success(message, details) {
    process.stdout.write('\x1b[42;97m SUCCESS \x1b[0m ' + message + '\n\x1b[30;107m DETAILS \x1b[0m ' + (details ? '\n' + details : 'NO DETAILS') + '\n');
};