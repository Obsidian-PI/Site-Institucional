const express = require('express');
const { enviarEmailResetSenha } = require('../controllers/emailController');
require('dotenv').config();

const router = express.Router();


router.post('/enviar-email', async (req, res) => {
  const { emailFuncServer, nomeFuncServer, token} = req.body;

  try {
    const response = await enviarEmailResetSenha(emailFuncServer, nomeFuncServer, token, process.env.APP_PORT || 3000);
    res.status(200).send(response.message);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/new-password/:token", async (req, res) => {
    const { token } = req.params;

    try {
        const resposta = await fetch("http://localhost:8080/usuarios/validar-token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: token,
            }),
        });

        if (resposta.ok) {
            const respostaJson = await resposta.json();

            res.send(`
                <!DOCTYPE html>
                <html lang="pt-br">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Redefinir Senha</title>
                  <style>
                    body {
                      font-family: Arial, sans-serif;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      height: 100vh;
                      background-color: #f4f4f4;
                      margin: 0;
                    }
                    .container {
                      background-color: #fff;
                      padding: 20px;
                      border-radius: 8px;
                      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                      width: 100%;
                      max-width: 400px;
                    }
                    h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                    .input-field {
                      width: 100%;
                      padding: 10px;
                      margin-bottom: 15px;
                      border: 1px solid #ddd;
                      border-radius: 4px;
                    }
                    .btn {
                      width: 100%;
                      padding: 10px;
                      background-color: #CD5C08;
                      color: white;
                      border: none;
                      border-radius: 4px;
                      font-size: 16px;
                      cursor: pointer;
                    }
                    .btn:hover {
                      background-color: #218838;
                    }
                  </style>
                </head>
                <body>
                  <div class="container">
                    <h2>Redefinir Senha</h2>
                    <h2>${respostaJson.id}</h2>
                    <form action="/new-password/${token}" method="POST">
                      <input type="password" name="newPassword" class="input-field" placeholder="Nova Senha" required>
                      <input type="password" name="confirmPassword" class="input-field" placeholder="Confirmar Nova Senha" required>
                      <button type="submit" class="btn">Redefinir Senha</button>
                    </form>
                  </div>
                </body>
                </html>
            `);
        } else {
            res.status(400).send("Token inválido ou expirado.");
        }
    } catch (erro) {
        console.error("Erro ao validar o token:", erro);
        res.status(500).send("Erro no servidor.");
    }
});

module.exports = router;

