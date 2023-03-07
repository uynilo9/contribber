#!/usr/bin/env node
import fs from 'node:fs';
import url from 'node:url';
import path from 'node:path';
import git from 'simple-git';

import error from '../../utils/error.js'
import success from '../../utils/success.js';
import descriptions from './descriptions.js';

export default function commit(times) {
    try {
        success('START CREATING SOME COMMITS', '');
        const _commit = (_times) => {
            if(_times == 0) {
                git().push();
                success('SUCCESSFULLY CREATE SOME COMMITS');
                return;
            };
            let date = new Date;
            let start = new Date(date.getFullYear() - 1, date.getMonth(), date.getDate() - 1);
            let end = date;
            let time = (new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))).toUTCString();
            let description = descriptions[Math.floor(Math.random() * descriptions.length) - 1];
            fs.writeFile(path.join(path.dirname(url.fileURLToPath(import.meta.url)), 'commit.txt'), description + '', (_error) => {
                if(_error)
                    error('FAILED TO CREATE A COMMIT', _error);
                console.log(time +  ' - ' + description);
                git().add('.').commit(description, { '--date': time }, commit.bind(this, --_times));
            });
        };
        _commit(times);
    } catch(_error) {
        error('FAILED TO CREATE SOME COMMITS', _error);
        process.exit(1);
    };
};