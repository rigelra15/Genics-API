const User = require('../models/User');

const getUsers = async (req, res) => {
  // mongoose
  // res (dikirim ke Client)
  try{
    const users = await User.find();
    res.status(200).json({
      // data: users
      success: true,
      message: "Get users success",
      data: users
    })
  }
  catch(error){ // Exception
    res.status(500).json({
      message: "Get users failed",
      data: error
    })
  }
};

const saveUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(201).json({
      message: "Save user success",
      data: savedUser
    })
  } catch (error) {
    res.status(500).json({
      messgae: "Save user failed",
      data: error
    })
  }
};

module.exports = {
  getUsers,
  saveUser
}