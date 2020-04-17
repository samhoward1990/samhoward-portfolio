const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
require("dotenv").config();
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
        user: process.env.EMAILUSER,
        clientId: process.env.EMAILCLIENTID,
        refreshToken: process.env.EMAILREFRESHTOKEN,
        accessToken: process.env.EMAILACCESSTOKEN,
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
        to: process.env.EMAILUSER,
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