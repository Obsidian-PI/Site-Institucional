const sendgrid = require('@sendgrid/mail');
require('dotenv').config();

sendgrid.setApiKey(process.env.SENDGRID_API_KEY); 

const enviarEmailResetSenha = async (emailFuncServer, nomeFuncServer, token, port) => {
  if (!emailFuncServer || !nomeFuncServer) {
    throw new Error("Dados insuficientes.");
  }

  const resetToken = Math.random().toString(36).substr(2); 

  const resetLink = `http://localhost:${port}/email/new-password/${token}`;

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Redefinir Senha</title>
      <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; }
        .email-container { max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); }
        .btn { background-color: #CD5C08; padding: 15px 25px; color: #fff; text-decoration: none; font-size: 16px; border-radius: 5px; }
        .btn:hover { background-color: #573114; }
      </style>
    </head>
    <body>
      <div class="email-container">
        <h1>Redefinição de Senha</h1>
        <p>Olá ${nomeFuncServer},</p>
        <p>Recebemos uma solicitação para redefinir sua senha. Para prosseguir, clique no botão abaixo:</p>
        <a href="${resetLink}" class="btn">Redefinir Senha</a>
        <p>Se você não fez essa solicitação, ignore este e-mail.</p>
        <footer>&copy; 2024 Sua Empresa</footer>
      </div>
    </body>
    </html>
  `;

  const msg = {
    to: emailFuncServer,
    from: 'obsidian.sptech@gmail.com',
    subject: 'Redefinição de Senha',
    html: htmlContent,
  };

  try {
    await sendgrid.send(msg);
    return { message: "E-mail de redefinição de senha enviado com sucesso!" };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    throw new Error("Erro ao enviar o e-mail.");
  }
};

module.exports = { 
    enviarEmailResetSenha
};
