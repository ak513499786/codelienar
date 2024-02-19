const express= require("express");
const { sendMailContact } = require("../ctrl/controller");

const router = express.Router();
router.post("/send_mail", sendMailContact);
module.exports = {router}
