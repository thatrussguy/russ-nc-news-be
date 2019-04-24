const connection = require("../db/connection");

const selectUserById = username => {
  return connection("users")
    .select()
    .where({ username })
    .first()
    .then(user => ({ user }));
};

module.exports = { selectUserById };