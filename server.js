require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const nodemailer = require("nodemailer");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "client", "build")));

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL_USER,
        clientId: process.env.EMAIL_CLIENT_ID,
        clientSecret: process.env.EMAIL_CLIENT_SECRET,
        refreshToken: process.env.EMAIL_REFRESH_TOKEN,
    }
});

transporter.set('oauth2_provision_cb', (user, renew, callback) => {
    let accessToken = userTokens[user];
    if (!accessToken) {
        return callback(new Error('Unknown user'));
    } else {
        return callback(null, accessToken);
    }
});
app.post('/send', (req, res) => {
    let name = req.body.firstName + " " + req.body.lastName;
    let company = req.body.company;
    let email = req.body.email;
    let phoneNumber = req.body.phoneNumber;
    let message = req.body.message;

    let mailOptions = {
        from: name,
        to: process.env.EMAIL_USER,
        subject: "Portfolio contact form",
        text: `Name: ${name} \n Company: ${company} \n Email: ${email} \n Phone Number: ${phoneNumber} \n message: ${message}`
    }

    transporter.sendMail(mailOptions);
});


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});