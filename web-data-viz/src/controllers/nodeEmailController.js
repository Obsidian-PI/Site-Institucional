const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function enviarEmail(req) {
    const { variableValue, userEmail } = req.body;

    const msg = {
        to: userEmail,
        from: 'obsidian.sptech@gmail.com',
        subject: 'Sua solicitação foi aprovada!',
        // text: `Sua senha provisória é: ${variableValue}`,
        html: `<p>Sua senha provisória é: <strong>${variableValue}</strong></p>`,
    };

    sgMail.send(msg)
}

module.exports = {
    enviarEmail
}
