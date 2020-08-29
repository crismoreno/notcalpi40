const db = require("../sequelize-models");
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;
const ContactForms = db.contactForms;
var nodemailer = require("nodemailer");


const model = {
	// Post Contact Form to DB and Send Email
	postContactForm: async (name, email, tel, message, company, response) => {
		const state = 0;
		// console.log(name, email, tel, message, company, state, 'hardcoded string')
		try{
			await ContactForms.create({
				name,
				email,
				tel,
				company,
				message,
				state,
			})
			const to_mail = process.env.MAIL;
			const to_pwd = process.env.MAILPWD;
			const sent_from = process.env.SENTFROM;

			var transport = {
				service: "Gmail",
				// host: "smtp.gmail.com",
				// port: 587,
				// secure: false,
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

			var mailToMe = {
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

			var mailtoUser = {
				from: 'Cristina Moreno Medran',
				to: email,
				subject: `Yes! I received your contact form and I'll get back to you as soon as I see your message`,
				text: `Hello dear earthling, I've received your message and I'll give you an answer as soon as I see it! Thanks for visiting my website!`
			};

			transporter.sendMail(mailToMe, (err, data) => {
				if (err) {
					response(err, null)
				} else {
					transporter.sendMail(mailtoUser, (err, data) => {
						if (err) {
							response(err, null);
						} else {
							response(null, res);
						}
					})
				}
			});

		}catch(err){
			response(err, null)
		}
	}
}
module.exports = model;