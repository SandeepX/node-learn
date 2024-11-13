const imageService = require('../services/imageService');

exports.getHomePage = (req, res) => {
    const imageUrl = imageService.getHomeImage();
    res.render('home', { imageUrl });
};

exports.getAboutPage = (req, res) => {
    res.render('about');
};

exports.getContactPage = (req, res) => {
    res.render('contact');
};
