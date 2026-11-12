const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 255,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id}, config.get('jwtPrivateKey'));
  return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(user){
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email:Joi.string().min(5).max(255).required().email(),
    password: passwordComplexity().required()
  });
  return schema.validate(user);
}
exports.User = User; 
exports.validate = validateUser;