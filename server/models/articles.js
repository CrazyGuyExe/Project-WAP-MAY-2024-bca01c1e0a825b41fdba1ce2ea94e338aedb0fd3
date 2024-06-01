const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  heading: { type: String, required: true },
  body: { type: String, required: true },
  heading2: { type: String, required: false },
  body2: { type: String, required: false },
  reference: { type: String, required: false },
  content: String,
  author: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

schema.set('toJSON', { getters: true });

schema.path('date').get(function (v) {
  return new Date(v).toLocaleDateString();
});

module.exports = mongoose.model("Article", schema);
