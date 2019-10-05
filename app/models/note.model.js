const mongoose = require('mongoose')

const NoteSchema = mongoose.Schema({
    fieldID: Number,
    title: String,
    content: String,
    nitrogen: Number
}, {
    timestamps: true
})

// const LandSchema = mongoose.Schema({
//     Nitrogen: Number,
// }, {
//     timestamps: true
// })

module.exports = mongoose.model('Note', NoteSchema)