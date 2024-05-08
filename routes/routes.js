const express = require("express");
const { sendMailContact } = require("../ctrl/controller");

const router = express.Router();

router.post("/sendMailContact", sendMailContact);
module.exports = { router };
