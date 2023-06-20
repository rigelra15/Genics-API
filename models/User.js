const {
  Schema,
  model
} = require("mongoose");

// Create schema
// - name: String
// - age: Number

const User = Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
  // email
  // password
});

module.exports = model('Users', User);