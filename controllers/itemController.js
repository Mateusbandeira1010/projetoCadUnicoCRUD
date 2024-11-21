const conexao = require('../config/db'); 

exports.createItem = (req, res) => {
    const { nome, descriçao, genero } = req.body; 

    if (!nome || !descriçao || !genero) {
        console.log('dados recebidos', req.body);
        console.log('Erro de validação', req.body);


        req.flash('error', 'Todos os campos são obrigatórios.');
        return res.redirect('/crud');
    }

    // Inserindo o filme no banco de dados
    conexao.query(
        'INSERT INTO filmes (nome, descriçao, genero) VALUES (?, ?, ?)',
        [nome, descriçao, genero],
        (error, results) => {
            if (error) {
                console.error('Erro ao cadastrar o filme:', error);

                req.flash('error', 'Erro ao cadastrar o filme');
                return res.redirect('/crud');
            }

        
            req.flash('success', 'Filme cadastrado com sucesso!');
            return res.redirect('/crud');
        }
    );
};

exports.getAllItems = (req, res) => {
    conexao.query('SELECT * FROM filmes', (error, results) => {
        if (error) {
            console.error('Erro ao buscar os filmes:', error);

            req.flash('error', 'Erro ao buscar os filmes');
            return res.redirect('/crud');
        }

        // Renderiza a página e passa as mensagens de sucesso/erro junto com os filmes
        res.render('crud', {
            filmes: results,
            successMessage: req.flash('success'),
            errorMessage: req.flash('error')
        });
    });
};



