# API Express para Gerenciamento de IoT

Esta é uma API Express desenvolvida para gerenciar dispositivos IoT, sensores, atuadores e suas leituras. A API também inclui funcionalidades de autenticação utilizando JWT.

## Pré-requisitos

- Node.js v14 ou superior
- MongoDB

## Instalação

1. Clone este repositório para a sua máquina local:

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd seu-repositorio
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto com a seguinte configuração:

    ```plaintext
    JWT_SECRET=sua_chave_secreta
    ```

2. Abra o arquivo `app.js` e atualize a configuração de conexão com o MongoDB. Substitua `seu-usuario` e `sua-senha` pelas credenciais do seu MongoDB:

    ```javascript
    // app.js

    // Configuração do banco de dados
    mongoose
      .connect("mongodb+srv://seu-usuario:sua-senha@cluster0.rjj365z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {})
      .then(() => {
        console.log("MongoDB conectado!");
      })
      .catch((err) => {
        console.log("MongoDB não conectado: ");
        console.log(err);
      });
    ```

## Executando a Aplicação

1. Inicie o servidor:

    ```bash
    npm start
    ```

2. A API estará disponível em `http://localhost:3000`.

## Endpoints da API

### Autenticação

- **Login**

    ```http
    POST /api/auth/login
    Content-Type: application/json

    {
      "email": "user@example.com",
      "senha": "password123"
    }
    ```

### Pessoas

- **Criar Pessoa**

    ```http
    POST /api/pessoas
    Content-Type: application/json

    {
      "nome": "João Silva",
      "email": "joao.silva@example.com",
      "senha": "senha123"
    }
    ```

- **Obter Todas as Pessoas**

    ```http
    GET /api/pessoas
    ```

- **Obter Pessoa por ID**

    ```http
    GET /api/pessoas/{id}
    ```

- **Atualizar Pessoa por ID**

    ```http
    PUT /api/pessoas/{id}
    Content-Type: application/json

    {
      "nome": "João Silva Atualizado",
      "email": "joao.silva@newemail.com",
      "senha": "novasenha123"
    }
    ```

- **Deletar Pessoa por ID**

    ```http
    DELETE /api/pessoas/{id}
    ```

## Testes

Os arquivos de teste HTTP estão localizados na pasta `test`. Use a extensão **REST Client** do Visual Studio Code para executar esses testes.

- **Auth Tests**: `test/auth-tests.http`
- **Pessoa Tests**: `test/pessoa-tests.http`

