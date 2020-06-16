const db = require("../sequelize-models");
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;
const ContactForms = db.contactForms;
var nodemailer = require("nodemailer");


const model = {
	// Post COntact Form to DB and Send Email
	postContactForm: async (name, email, tel, message, company, response) => {
		console.log(name, email, tel, message, company, 'hardcoded string')
		try{
			await ContactForms.create({
				name,
				email,
				tel,
				company,
				message,
			})
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
					response(err, null)
				} else {
					response(null, data)
				}
			});

		}catch(err){
			response(err, null)
		}
	}
}
module.exports = model;