exports.profile = (req, res) => {
    res.render('profile', { user: req.user });
};
