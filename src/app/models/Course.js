const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Course = new Schema({
    id: ObjectId,
    name: { type: String, default: '', require: true },
    price: { type: String, default: '' },
    video: { type: String, default: '', require: true },
    img: { type: String, default: '' },
    slug: { type: String, maxLength: 255, slug: 'name', unique: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);