require('dotenv').config();
const { MailtrapClient } = require("mailtrap");

const TOKEN = process.env.MAILTRAP_TOKEN
const ENDPOINT = process.env.MAILTRAP_ENDPOINT


exports.mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

exports.sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Utuedeye",
};