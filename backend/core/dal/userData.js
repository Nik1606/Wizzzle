let users = [{ id: 0, name: 'John Doe', email: 'john@example.com' }];

exports.addUser = (user) => {
  users.push(user);
};

exports.getUsers = () => {
  return users;
};

exports.getUser = (id) => {
  return users.find(u => u.id === id);
};

exports.updateUser = (id, updatedInfo) => {
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex !== -1) {
    users[userIndex] = { id, ...updatedInfo };
    return users[userIndex];
  }
  return null;
};

exports.removeUser = (id) => {
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex !== -1) {
    return users.splice(userIndex, 1)[0];
  }
  return null;
};
