var db = require("../models");
var nodemailer = require("nodemailer");

// Determine our connection
// =============================================================|
if (!process.env.PORT) {
    var authentication = require("../config/authentication.js");
} else {
    console.log("Heroku connection");
    var authentication = process.env
};

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        type: 'OAuth2',
        user: authentication.user,
        clientId: authentication.clientID,
        clientSecret: authentication.clientSecret,
        refreshToken: authentication.refreshToken,
    }
});

module.exports = function(app) {
    app.post("/badge/post",
        require('connect-ensure-login').ensureLoggedIn("/login"),
        function(req, res) {
            //TODO: implement an if/else check to make sure all data exists - including a read query to check for recipient name? unless its done beforehand.
            db.employee_badge.create({
                sender_name: req.user.name,
                recipient_name: req.body.recipient_name,
                badgeid: req.body.badgeid,
                badgeurl: req.body.badgeurl,
                comment: req.body.comment
            }).then(function() {
                res.redirect("/index");
            })
            db.employee_basic.findOne({
                where: {
                    name: req.body.recipient_name
                }
            }).then(function(data) {
                var mailOptions = {
                    to: data.email,
                    subject: "Congrats " + data.name + "! A Plaudit Badge Awaits",
                    text: "Hi " + data.name + "! You got a Plaudit Badge from" + req.user.name + "for your good work at the office.",
                    html: "<body style='background-color: #0b9fa5; text-align: center; padding-bottom: 15px; padding-top: 15px; font-family: Georgia; font-style: normal; font-size: 1.6rem;'><p style='color: #fff; font-style: italic; font-size: 2.6rem;'>Plaudit!</p><p style='color: #fff;'>Congrats, <b>" + data.name + "!</b></p><p style='color: #fff; font-size: 1.6rem;'>You received a Plaudit Badge from " + req.user.name + " for your awesome work. <p><a href='https://plauditlive.herokuapp.com/' target='blank' style='color: #ffda21; font-size: 1.3rem; font-style: italic;'>Log in to Plaudit to see details.</p></body>"
                };
                transporter.sendMail(mailOptions, function(error, response) {
                    if (error) {
                        console.log(error);
                        res.send("error");
                    } else {
                        console.log("Message sent to: " + data.email);
                        var sendObject = { status: "sent" };
                        console.log("sendObject: ", sendObject)
                        res.send(sendObject);
                    }
                })
                db.employee_basic.findOne({
                    where: {
                        manager_id: data.manager_id
                    }
                }).then(function(data) {
                    var mailOptions = {
                        to: data.email,
                        subject: "A Plaudit Badge For Your Employee!",
                        text: "Hi " + data.name + "! One of your employees got a Plaudit Badge for their good work at the office.",
                        html: "<body style='background-color: #0b9fa5; text-align: center; padding-bottom: 15px; padding-top: 15px; font-family: Georgia; font-style: normal; font-size: 1.6rem;'><p style='color: #fff; font-style: italic; font-size: 2.6rem;'>Plaudit!</p><p style='color: #fff;'>Hi, <b>" + data.name + "!</b></p><p style='color: #fffbe4; font-size: 1.6rem;'>One of your employees received a Plaudit Badge for their awesome work. We thought you might like to know!</p><p><a href='https://plauditlive.herokuapp.com/' target='blank' style='color: #ffda21; font-size: 1.3rem; font-style: italic;'>Log in to Plaudit to see details.</p></body>"
                    };
                    smtpTransport.sendMail(mailOptions, function(error, response) {
                        if (error) {
                            console.log(error);
                            res.send("error");
                        } else {
                            console.log("Message sent to: " + data.email);
                            var sendObject = { status: "sent" };
                            console.log("sendObject: ", sendObject)
                            res.send(sendObject);
                        }
                    })

                })
            })
        });

    app.get("/givebadge",
        require('connect-ensure-login').ensureLoggedIn("/login"),
        function(req, res) {
            var hbsObject = {
                user: req.user
            }
            res.render("givebadge", hbsObject);
        })
};
