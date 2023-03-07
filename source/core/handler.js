#!/usr/bin/env node
import error from '../utils/error.js';
import help from './actions/help.js';
import welcome from './actions/welcome.js';
import commit from './main/commit.js';

export default (_arguments) => {
    if(_arguments.length == 2) {
        welcome();
    } else if(_arguments.length == 3) {
        if(_arguments[2] == '?')
            help();
        else if(_arguments[2] == '!') {
            commit(100);
        } else if(_arguments[2] <= 5000) {
            commit(_arguments[2]);
        } else if(_arguments[2] > 5000) {
            error('THE <number> ARGUMENT MUST BE SMALLER THAN LESS THAN OR EQUAL TO 5000');
        } else
            error('UNKNOWN COMMAND');
    } else {
        error('UNKNOWN COMMAND');
    };
};