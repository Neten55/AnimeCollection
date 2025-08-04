const db = require('../config/db');
const Log = require('../models/logModel');

module.exports = {
  async dashboard(req, res) {
    const result = await db.query('SELECT id, username, role, suspended FROM users ORDER BY id');
    res.render('admin/users', { users: result.rows });
  },

  async suspendUser(req, res) {
    const { id } = req.params;
    await db.query('UPDATE users SET suspended = TRUE WHERE id = $1 AND role != $2', [id, 'admin']);
    await Log.createLog(req.session.user.id, `Suspended user with ID ${id}`);
    res.redirect('/admin');
  },

  async unsuspendUser(req, res) {
    const { id } = req.params;
    await db.query('UPDATE users SET suspended = FALSE WHERE id = $1 AND role != $2', [id, 'admin']);
    await Log.createLog(req.session.user.id, `Unsuspended user with ID ${id}`);
    res.redirect('/admin');
  },

  async viewLogs(req, res) {
    const logs = await Log.getAllLogs();
    res.render('admin/logs', { logs });
  }
};
