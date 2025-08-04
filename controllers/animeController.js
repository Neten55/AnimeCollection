const animeModel = require('../models/animeModel');

exports.listAnime = async (req, res) => {
  const userId = req.session.userId;
  const anime = await animeModel.getAllAnime(userId);
  res.render('anime/list', { anime });
};

exports.addAnime = async (req, res) => {
  const { title, status } = req.body;
  const userId = req.session.user.id;

  if (!title || !status) {
    const animeList = await getAnimeByUserId(userId);
    return res.render('main', { animeList, error: 'All fields are required.' });
  }

  await addAnime(title, status, userId);
  res.redirect('/anime');
};

exports.editAnime = async (req, res) => {
  const { title, status } = req.body;
  const id = req.params.id;
  await animeModel.updateAnime(id, title, status);
  res.redirect('/anime');
};

exports.deleteAnime = async (req, res) => {
  const id = req.params.id;
  await animeModel.deleteAnime(id);
  res.redirect('/anime');
};
exports.showAnime = async (req, res) => {
  const userId = req.session.user.id;
  const animeList = await getAnimeByUserId(userId);
  res.render('main', { animeList, error: null });
};
