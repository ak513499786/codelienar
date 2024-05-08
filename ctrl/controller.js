const nodemailer = require("nodemailer");
var validator = require("node-email-validation");

const sendMailContact = (req, res) => {
  const { username, lastname, email, message } = req.body;
  if (validator.is_email_valid(email)) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "developer@codelinear.com",
        pass: "umlw qvhn nslr udrt",
      },
    });
    const mailOptions = {
      from: "Codelinear <developer@codelinear.com>",
      to: "ahmed@codelinear.com",
      subject: "New message from your website",
      text: `Name: ${username} ${lastname}\nEmail: ${email}\n\nMessage: ${message}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error sending email");
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
      }
    });
  } else {
    res.status(500).send("Error sending email");
  }
};
module.exports = {
  sendMailContact,
};
