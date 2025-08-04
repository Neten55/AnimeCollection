const db = require('../config/db');

module.exports = {
  async createLog(userId, action) {
    await db.query(
      'INSERT INTO logs (user_id, action) VALUES ($1, $2)',
      [userId, action]
    );
  },

  async getAllLogs() {
    const result = await db.query(
      'SELECT logs.*, users.username FROM logs JOIN users ON logs.user_id = users.id ORDER BY created_at DESC'
    );
    return result.rows;
  }
};
