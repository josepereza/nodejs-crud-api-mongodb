const Note = require('../models/note.model.js')

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const note = new Note({
        fieldID: req.body.fieldID || "Unknown field",
        title: req.body.title || "Untitled Note", 
        content: req.body.content,
        nitrogen: req.body.nitrogen
    });

    // Save Note in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
}

// Retrieve and return all notes from the database
exports.findAll = (req, res) => {
    Note.find().then(notes => {
        res.send(notes)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Unknown error occurred while retrieving notes."
        })
    })
}

// Retrieve and return all notes of that field
exports.findFields = (req, res) => {
    Note.find({"fieldID": req.params.fieldID}).then(notes => {
        if (notes.length === 0) {
            return res.status(404).send({
                message: "Note not found with fieldID " + req.params.fieldID
            })
        }
        res.send(notes)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Unknown error occurred finding with fieldID:" + req.params.fieldID
        })
    })
}

// Find a single note with a noteID
exports.findOne = (req, res) => {
    Note.findById(req.params.noteId).then(note => {
        if (!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            })
        }
        res.send(note)
    }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            })
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        })
    })
}

// Update a note identified by the noteID in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Content can not be empty"
        });
    }

    // Find note and update it with the request body
    Note.findByIdAndUpdate(req.params.noteId, {
        fieldID: req.body.fieldID || "Unknown field",
        title: req.body.title || "Untitled Note",
        content: req.body.content,
        nitrogen: req.body.nitrogen
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            })
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            })                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        })
    })
}

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Note.findByIdAndRemove(req.params.noteId).then(note => {
        if (!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            })
        }
        res.send({message: "Note deleted successfully"})
    }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: 'Note not found with id ' + req.params.noteId
            })
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        })
    })
}