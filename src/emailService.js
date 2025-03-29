require('dotenv').config();  // Load environment variables from .env file

const nodemailer = require('nodemailer');

// Use environment variables for sensitive info
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,   // Get from .env file
    pass: process.env.GMAIL_PASS,   // Get from .env file
  },
});

// Send email function
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,  // Sender's email
    to,                           // Recipient's email
    subject,                      // Subject
    text,                         // Body of the email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email: ', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = { sendEmail };