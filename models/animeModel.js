const { Pool } = require('pg');
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

class Anime {
    static async createAnime({ title, status, user_id }) {
        const result = await pool.query(
            'INSERT INTO anime (title, status, user_id) VALUES ($1, $2, $3) RETURNING *',
            [title, status, user_id]
        );
        return result.rows[0];
    }

    static async getAllAnimeByUser(user_id) {
        const result = await pool.query(
            'SELECT * FROM anime WHERE user_id = $1',
            [user_id]
        );
        return result.rows;
    }

    static async getAnimeById(id, user_id) {
        const result = await pool.query(
            'SELECT * FROM anime WHERE id = $1 AND user_id = $2',
            [id, user_id]
        );
        return result.rows[0];
    }

    static async updateAnime(id, user_id, { title, status }) {
        const result = await pool.query(
            'UPDATE anime SET title = $1, status = $2 WHERE id = $3 AND user_id = $4 RETURNING *',
            [title, status, id, user_id]
        );
        return result.rows[0];
    }

    static async deleteAnime(id, user_id) {
        const result = await pool.query(
            'DELETE FROM anime WHERE id = $1 AND user_id = $2 RETURNING *',
            [id, user_id]
        );
        return result.rows[0];
    }
}

module.exports = Anime;