'use strict';

var notes = [];
const Note = require('./Note');

/* create/update new note */
exports.update = exports.create = function(key, title, body) {
    return new Promise((resolve, reject) => {
        notes[key] = new Note(key, title, body);
        resolve(notes[key]);
    });
};

/* read the notes */
exports.read = function(key) {
    return new Promise((resolve, reject) => {
        if (notes[key]) resolve(notes[key]);
        else reject(`Note ${key} does not exist`);
    });
};

/* delete a notes */
exports.destroy = function(key) {
    return new Promise((resolve, reject) => {
        if (notes[key]) {
            delete notes[key];
            resolve();
        } else {
            reject(`Note ${key} does not exist`);
        }
    });
};

/* get list of keys */
exports.keylist = function () {
    return new Promise((resolve, reject) => {
        resolve(Object.keys(notes));
    });
};

/* get the count of notes */
exports.count = function () {
    return new Promise((resolve, reject) => {
        resolve(notes.length);
    });
};