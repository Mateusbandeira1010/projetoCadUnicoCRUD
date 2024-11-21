const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

// Configuração do middleware para cookies
app.use(cookieParser());

// Configuração do middleware de sessão e flash
app.use(session({
    secret: 'teus123', // Altere para um segredo forte
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 } // 1 minuto
}));

app.use(flash());

// Middleware para expor mensagens de flash para as views
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

// Middleware para servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para analisar dados do corpo das requisições
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuração do Handlebars como mecanismo de visualização
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Definição das rotas de autenticação
app.use('/', authRoutes);



// Iniciando o servidor na porta especificada
const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
