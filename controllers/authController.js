const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    // Aqui, você verifica as credenciais do usuário (normalmente contra um banco de dados)
    const username = req.body.username;
    const user = { name: username };

    // Gerar um token
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};