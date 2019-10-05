const { Schema, model } = require('mongoose');

const QuestSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    actived: {
        type: Boolean,
        required: true,
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher ',
    },
}, {
    timestamps: true,
});

module.exports = model('Quest', QuestSchema);