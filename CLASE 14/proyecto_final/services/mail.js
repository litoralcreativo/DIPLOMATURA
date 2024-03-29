const nodemailer = require("nodemailer");
// envio de mail tiene asociada una demora entonces es async await

const send = async ({ mail, asunto = "Gracias por registrarte", cuerpo }) => {
  try {
    const transporter = nodemailer.createTransport({
      /* host: "smtp.gmail.com",
      port: 587,
      secure: false, */
      service: process.env.MAIL_SERVICE || "gmail",
      auth: {
        user: process.env.MAIL_USER || "mail",
        pass: process.env.MAIL_PASS || "pass",
      },
    });

    const info = {
      from: "<no-reply></no-reply>",
      to: mail,
      subject: asunto,
      html: cuerpo,
    };
    const { messageId } = await transporter.sendMail(info);
    return messageId;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { send };
