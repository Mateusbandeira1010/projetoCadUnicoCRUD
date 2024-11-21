const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const conexao = require('../config/db');

exports.register = async (req, res) => {
    const { lastname, email, password } = req.body;

    // Verifica se o usuário já existe
    // Se não existir, faça o cadastro
    const hashedPassword = await bcrypt.hash(password, 10);

    conexao.query('INSERT INTO users (lastname, email, password) VALUES (?, ?, ?)', [lastname, email, hashedPassword], (error) => {
        if (error) {
            req.flash('error_msg', 'Erro ao cadastrar. Tente novamente.');
            return res.redirect('/register');
        }
        req.flash('success_msg', 'Cadastro concluído com sucesso!'); 
        res.redirect('/');
    });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    conexao.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
        if (error) {
            req.flash('error_msg', 'Erro ao fazer login. Tente novamente.');
            return res.redirect('/');
        }

        if (results.length > 0) {
            const user = results[0];
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                const token = jwt.sign({ id: user.id, lastname: user.lastname, email: user.email }, 'secreta', { expiresIn: '30m' });
                res.cookie('token', token, { httpOnly: true });
                return res.redirect('/profile');
            } else {
                req.flash('error_msg', 'Senha incorreta');
                return res.redirect('/');
            }
        } else {
            req.flash('error_msg', 'Usuário não encontrado');
            return res.redirect('/');
        }
    });
};

exports.logout = (req, res) => {
    res.clearCookie("token"); // Limpa o cookie do token
    res.redirect("/"); // Redireciona para a página de login
};

exports.profile = (req, res) => {
    res.set('Cache-Control', 'no-store'); // Adiciona cabeçalhos para não armazenar em cache
    res.render('profile', { user: req.user }); // Renderiza a página do perfil
};
