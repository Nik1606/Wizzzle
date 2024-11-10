const userService = require('../core/bll/userService')

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const newUser = userService.createUser(name, email);
  res.status(201).json(newUser);
};

exports.getAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
};

exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = userService.getUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

exports.updateUserById = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const { name, email } = req.body;
  const updatedUser = userService.updateUserById(userId, name, email);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

exports.deleteUserById = (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const deletedUser = userService.deleteUserById(userId);
  if (deletedUser) {
    res.json(deletedUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
