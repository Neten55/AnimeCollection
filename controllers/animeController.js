const Anime = require('../models/animeModel');

module.exports = {
    showAnimeList: async (req, res) => {
        if (!req.session.user) return res.redirect('/login');
        const animeList = await Anime.getAllAnimeByUser(req.session.user.id);
        res.render('anime', { user: req.session.user, animeList, error: null });
    },

    createAnime: async (req, res) => {
        if (!req.session.user) return res.redirect('/login');
        const { title, status } = req.body;
        if (!title || !status) {
            const animeList = await Anime.getAllAnimeByUser(req.session.user.id);
            return res.render('anime', { user: req.session.user, animeList, error: 'All fields required' });
        }
        await Anime.createAnime({ title, status, user_id: req.session.user.id });
        res.redirect('/anime');
    },

    updateAnime: async (req, res) => {
        if (!req.session.user) return res.redirect('/login');
        const { id } = req.params;
        const { title, status } = req.body;
        await Anime.updateAnime(id, req.session.user.id, { title, status });
        res.redirect('/anime');
    },

    deleteAnime: async (req, res) => {
        if (!req.session.user) return res.redirect('/login');
        const { id } = req.params;
        await Anime.deleteAnime(id, req.session.user.id);
        res.redirect('/anime');
    }
};