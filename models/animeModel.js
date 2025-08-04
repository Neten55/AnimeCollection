const db = require('../config/db');

module.exports = {
  async getAllByUser(userId) {
    const result = await db.query(
      'SELECT * FROM anime WHERE user_id = $1 ORDER BY id DESC',
      [userId]
    );
    return result.rows;
  },

  async getById(id, userId) {
    const result = await db.query(
      'SELECT * FROM anime WHERE id = $1 AND user_id = $2',
      [id, userId]
    );
    return result.rows[0];
  },

  async createAnime(data, userId) {
    const { title, genre, status } = data;
    const result = await db.query(
      'INSERT INTO anime (title, genre, status, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, genre, status, userId]
    );
    return result.rows[0];
  },

  async updateAnime(id, data, userId) {
    const { title, genre, status } = data;
    await db.query(
      'UPDATE anime SET title = $1, genre = $2, status = $3 WHERE id = $4 AND user_id = $5',
      [title, genre, status, id, userId]
    );
  },

  async deleteAnime(id, userId) {
    await db.query('DELETE FROM anime WHERE id = $1 AND user_id = $2', [id, userId]);
  }
};
