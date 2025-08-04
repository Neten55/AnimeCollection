const db = require('../config/db');
const bcrypt = require('bcryptjs');

module.exports = {
  async createUser(username, password) {
    const hashed = await bcrypt.hash(password, 10);
    const result = await db.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [username, hashed]
    );
    return result.rows[0];
  },

  async findUserByUsername(username) {
    const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows[0];
  },

  async validatePassword(user, password) {
    return await bcrypt.compare(password, user.password);
  }
};
