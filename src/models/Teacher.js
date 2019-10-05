const { Schema, model } = require('mongoose');

const TeacherSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = model('Teacher', TeacherSchema);