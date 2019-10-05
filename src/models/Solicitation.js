const { Schema, model } = require('mongoose');

const SolicitationSchema = new Schema({
    number: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = model('Solicitation', SolicitationSchema);