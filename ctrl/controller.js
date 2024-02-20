const nodemailer= require("nodemailer");
var validator = require("node-email-validation");
const { response } = require("express");

const sendMailContact = (req, res) => {
    const { username, lastname, email, message } = req.body;
    console.log('happy');
    if(validator.is_email_valid(email)){
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "ahmedkhan.cse010@gmail.com",
          pass: "dpyq uhvd jlgj tarb",
        },
      });
      const mailOptions = {
        from: { email },
        to: "info@codelinear.com",
        subject: "New message from your website",
        text: `FirstName: ${username}\nLastName: ${lastname}\nEmail: ${email}\nMessage: ${message}`,
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
    }
    else{
      res.status(500).send("Error sending email");
    }
  };
  module.exports =  {sendMailContact}
