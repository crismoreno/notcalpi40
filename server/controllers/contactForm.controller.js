const db = require("../sequelize-models");
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;
const ContactForms = db.contactForms;
var nodemailer = require("nodemailer");

// const contactFormModel = require("../models/contactForm.model");

// const controller = {
// 	postContactForm: (req, res) => {
// 		contactFormModel.postContactForm()
// 	}
// }
exports.postContactForm = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const tel = req.body.telephone;
  const message = req.body.message;
  const company = req.body.company;

  ContactForms.create({
    name: name,
    email: email,
    tel: tel,
    company: company,
    message: message,
  })
    .then((data) => {
      const to_mail = process.env.MAIL;
      const to_pwd = process.env.MAILPWD;
      const sent_from = process.env.SENTFROM;

      var transport = {
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: to_mail,
          pass: to_pwd,
        },
      };
      var transporter = nodemailer.createTransport(transport);
      transporter.verify((error, success) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take messages");
        }
      });

      var mail_template = {
        from: name,
        to: to_mail,
        subject: `You Received a new message at notcalpi.me! from ${sent_from}`,
        text: `
					name: ${name},
          company: ${company},
          email: ${email},
          telephone: ${tel},
          message: ${message},`,
      };

      transporter.sendMail(mail_template, (err, data) => {
        if (err) {
          res.send(err);
        } else {
          // res.status(status).send(body);
          res.send(data);
        }
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving projects.",
      });
    });
};
// module.exports = controller;