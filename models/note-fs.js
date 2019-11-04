'use strict';

const fs = require('fs-extra');
const path = require('path');
const util = require('util');

const log = require('debug')('notes:fs-model');
const error = require('debug')('notes:error');

const Note = require('./Note');

function noteDir(){
    const dir = process.env.NOTES_FS_DIR || "notes-fs-data";
    return new Promise((resolve, reject) => {
        fs.ensureDir(dir, err => {
            if(err) reject(err);
            else resolve(dir);
        });
    });
}

function filePath(notedir, key){
    return path.join(notedir, key + ".json");
}

function readJSON(notedir, key){
    const readFrom = filePath(notedir, key);
    return new Promise((resolve,reject) => {
        fs.readFile(readFrom, 'utf8', (err, data) => {
            if(err) return reject(err);
            log('readJSON',+ data);
            resolve(Note.fromJSON(data));
        });
    });
}