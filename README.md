# Projeto de Cadastro e CRUD de Filmes

Este é um projeto simples de CRUD (Create, Read, Delete) de filmes, desenvolvido com Node.js, Express, MySQL e JWT (JSON Web Tokens) para autenticação. O projeto permite que você cadastre filmes, veja a lista de filmes cadastrados e delete filmes, tudo com uma interface simples de usuário.

## Funcionalidades

- **Cadastro de Filmes:** Permite ao usuário adicionar um novo filme com nome, descrição e gênero.
- **Listagem de Filmes:** Exibe todos os filmes cadastrados em uma lista.
- **Autenticação JWT:** O sistema utiliza JSON Web Tokens para autenticar usuários.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MySQL**
- **JWT (JSON Web Tokens)**
- **Handlebars**
- **CSS** (para estilização)
- **Nodemon** (para monitoramento de mudanças)

## Como Rodar o Projeto

1. Clone este repositório:
    ```bash
    git clone https://github.com/Mateusbandeira1010/projetoCadUnicoCRUD.git
    ```

2. Navegue até a pasta do projeto:
    bash
    cd Test01
    

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias:
    text
    JWT_SECRET=sua-chave-secreta
    DB_HOST=localhost
    DB_USER=seu-usuario
    DB_PASSWORD=sua-senha
    DB_NAME=seu-banco-de-dados
    

5. Inicie o servidor:
    ```bash
    npm start
    ```

6. O projeto estará disponível em `http://localhost:3002`.

## Estrutura do Projeto

- `config/db.js`: Configuração do banco de dados MySQL.
- `controllers/`: Contém os controladores para as rotas.
- `middleware/`: Middleware para autenticação JWT.
- `views/`: Contém os arquivos de visualização (templates Handlebars).
- `public/`: Arquivos estáticos, como CSS e JS.
- `routes/`: Define as rotas da aplicação.
- `app.js`: Arquivo principal que inicializa o servidor.

## Contribuindo

Fique a vontade para contribuir para este projeto, criando problemas ou enviando pull requests.
