const express = require("express");
const app = express();
const path = require("path");
const nodeoutlook = require('nodejs-nodemailer-outlook')
require('dotenv').config()

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json({ limit: "1mb" }));

app.listen(8000, () => console.log("Port is running on 8000"))


app.post('/', function (req, res) {
    console.log(req.body)
    nodeoutlook.sendEmail({
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        },
        from: process.env.USER,
        to: process.env.FORWARD,
        subject: req.body.subject,
        text: `email: ${req.body.email},
        message: ${req.body.message}`,
        onError: (e) => res.status(500).json({ status: "error" }),
        onSuccess: (i) => res.status(200).json({ status: "ok" })
    });
})

