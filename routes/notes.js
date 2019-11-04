'use strict';

var util = require('util');
var express = require('express');
var router = express.Router();
var notes = require('../models/notes-memory');

// add note
router.get('/add', (req, res, next) => {
    res.render('noteedit', {
        title: "Add a Note",
        docreate: true,
        notekey: "",
        note: undefined
    });
});

// save note 
router.post('/save', (req, res, next) => {
    var p;
    if (req.body.docreate === 'create') {
        p = notes.create(req.body.notekey, 
                    req.body.title, req.body.body);
    } else {
        p = notes.update(req.body.notekey,
                    req.body.title, req.body.body);
    }
    p.then(note => {
        res.redirect('/notes/view?key=' +req.body.notekey);
    })
    .catch(err => next(err));
})

// view note
router.get('/view', (req, res, next) => {
    notes.read(req.query.key)
    .then(note => {
        res.render('noteview', {
            title: note ? note.title : '',
            notekey: req.query.key,
            note: note
        })
    })
    .catch(err => {next(err)});
})

// edit note
router.get('/edit', (req, res, next) => {
    notes.read(req.query.key)
    .then(note => {
        res.render('noteedit', {
            title: note ? ("Edit " + note.title): "Add a Note",
            docreate: false,
            notekey: req.query.key,
            note: note
        })
    })
    .catch(err => {next(err)})
})

// delete note
router.get('/destroy', (req, res, next) => {
    notes.read(req.query.key)
    .then(note => {
        res.render('notedestroy', {
            title: note ? note.title: "",
            notekey: req.query.key,
            note: note
        })
    })
    .catch(err => {next(err)})
})

// delete note post confirmation
router.post('/destroy/confirm', (req, res, next) => {
    notes.destroy(req.body.notekey)
    .then(() => { res.redirect('/')})
    .catch(err => {next(err)})
})

module.exports = router;