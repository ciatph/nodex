/**
 * Demo on sending email from nodejs
 */
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'YOUR_EMAIL_HERE@gmail.com',
        pass: '<YOUR_EMAIL_PASSWORD_HERE>'
    }
});

const mailOptions = {
    from: 'YOUR_EMAIL_HERE@gmail.com',
    to: '<EMAIL_RECIPIENT_EMAIL_HERE>',
    subject: 'Test Sending Email from Node',
    text: 'Hello! Test sending email.'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent ' + info.response);
    }
});