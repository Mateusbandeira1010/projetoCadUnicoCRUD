const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.cookies.token; 

    if (!token) {
        return res.redirect('/');
    }

    jwt.verify(token, process.env.JWT_SECRET || 'secreta', (err, user) => {
        if (err) {
            const errorMessage = err.name === 'TokenExpiredError' ? 'Token expirado' : 'Token inválido';
            return res.status(401).send(errorMessage);
        }
        req.user = user;
        next();
    });
    
};

module.exports = verifyToken;



