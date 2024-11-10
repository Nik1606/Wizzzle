const userData = require('../dal/userData');

let currentId = 1;

exports.createUser = (name, email) => {
  const newUser = { id: currentId++, name, email };
  userData.addUser(newUser);
  return newUser;
};

exports.getAllUsers = () => {
  return userData.getUsers();
};

exports.getUserById = (userId) => {
  return userData.getUser(userId);
};

exports.updateUserById = (userId, name, email) => {
  return userData.updateUser(userId, { name, email });
};

exports.deleteUserById = (userId) => {
  return userData.removeUser(userId);
};
