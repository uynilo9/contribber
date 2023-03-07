#!/usr/bin/env node
import error from './utils/error.js';
import handler from './core/handler.js';

export default function contribber(_arguments) {
    try {
        handler(_arguments);
    } catch(_error) {
        error('SOMETHING WENT WRONG', _error);
        process.exit(1);
    };
};