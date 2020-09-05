const db = require("../sequelize-models");
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;
const ContactForms = db.contactForms;
const nodemailer = require("nodemailer");


const model = {
	// Post Contact Form to DB and Send Email
	postContactForm: async (data, resolve) => {
		const {name, email, telephone, message, company} = data;
		const state = 0;
		try{
			await ContactForms.create({
				name,
				email,
				tel: telephone,
				company,
				message,
				state
			})
			const to_mail = process.env.MAIL;
			const to_pwd = process.env.MAILPWD;
			const sent_from = process.env.SENTFROM;


			const transporter = nodemailer.createTransport({
				service: 'gmail',
				// host: 'smtp.gmail.com',
				// port: 587,
				// secure: false,
				auth: {
					user: to_mail,
					pass: to_pwd,
				}
			});

			transporter.verify((error, success) => {
				if (error) {
					console.log(error);
				} else {
					console.log('Server is ready to take messages');
				}
			});
			
			const mailOptions = {
				from: to_mail,
				to: to_mail,
				subject: `You Received a new message at cristinamoreno.dev! from ${sent_from}`,
				text: `name: ${name},company: ${company},email: ${email},telephone: ${tel},message: ${message},`,
			};
			
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					resolve(error, null)
				} else {
					resolve(null, info)
				}
			});

			// const transport = {
			// 	service: "Gmail",
			// 	// host: "smtp.gmail.com",
			// 	// port: 587,
			// 	// secure: false,
			// 	auth: {
			// 		user: to_mail,
			// 		pass: to_pwd,
			// 	},
			// };

			// const transporter = nodemailer.createTransport(transport);
			// transporter.verify((error, success) => {
			// 	if (error) {
			// 		console.log(error);
			// 	} else {
			// 		console.log("Server is ready to take messages");
			// 	}
			// });

			// var mail_template = {
			// 	from: name,
			// 	to: to_mail,
			// 	subject: `You Received a new message at cristinamoreno.dev! from ${sent_from}`,
			// 	text: `
			// 		name: ${name},
			// 		company: ${company},
			// 		email: ${email},
			// 		telephone: ${tel},
			// 		message: ${message},`,
			// };

			// // var mailtoUser = {
			// // 	from: 'Cristina Moreno Medran',
			// // 	to: email,
			// // 	subject: `Yes! I received your contact form and I'll get back to you as soon as I see your message`,
			// // 	text: `Hello dear earthling, I've received your message and I'll reach out to you as soon as I can! Thanks for visiting my website!`
			// // };

			// transporter.sendMail(mail_template, (err, data) => {
			// 	if (err) {
			// 		response(err, null)
			// 	} else {
			// 		response(null, data)
			// 		// transporter.sendMail(mailtoUser, (err, data) => {
			// 		// 	if (err) {
			// 		// 		response(err, null);
			// 		// 	} else {
			// 		// 		response(null, data);
			// 		// 	}
			// 		// })
			// 	}
			// });
		}catch(err){
			resolve(err, null)
		}
	}
}
module.exports = model;