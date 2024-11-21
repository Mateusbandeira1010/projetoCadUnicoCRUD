const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const verifyToken = require('../middleware/authMiddleware');
const itemController = require('../controllers/itemController');
const prevFunction = require('../controllers/prevController');
const discordDs = require('../controllers/discordController');


// Rotas de registro e login
router.get('/register', (req, res) => res.render('register'));
router.post('/register', authController.register);
router.get('/', (req, res) => res.render('login'));
router.post('/login', authController.login);


//// Rota de direcionamento para main após o login
router.get('/projectTodos', verifyToken, (req, res) => {
    res.render('projectTodos', {user: req.user}); 
});


/// Rota do crud
router.get('/crud', verifyToken, itemController.getAllItems);
router.post('/crud', verifyToken, itemController.createItem);


// Rota Previsão do tempo
router.get('/prev', verifyToken, prevFunction);


// Rota do Discord
router.get('/discord', verifyToken, discordDs);


// Rota do perfil, usando middleware de verificação
router.get('/profile', verifyToken, authController.profile);

// Rota de logout
router.post('/logout', authController.logout);

module.exports = router;
