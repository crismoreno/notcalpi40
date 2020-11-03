const db = require("../sequelize-models");
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;
const ContactForms = db.contactForms;
const nodemailer = require("nodemailer");
const moment = require("moment");


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
			
			const admin_mail = {
				from: name,
				to: to_mail,
				subject: `You Received a new message at https://notcalpi40-deprecated.herokuapp.com! from ${sent_from}`,
				text: `MESSAGE SENT FROM DEPRECATED VERSION OF WEBSITE --> name: ${name},company: ${company},email: ${email},telephone: ${telephone},message: ${message},`,
			};

			const user_mail = {
				from: 'www.cristinamoreno.dev',
					to: email,
					subject: `Hey this is Cris, yes! I received your message`,
					text: `Hello ${name}, I've received your message and I'll reach out to you as soon as I can! Thank you for visiting my website, I hope you have a lovely ${moment().format('dddd')}! 😀`
			}
			
			transporter.sendMail(admin_mail, (error, info) => {
				if (error) {
					resolve(error, null)
				} else {
					// resolve(null, info)
					transporter.sendMail(user_mail, (err, data) => {
						if (err) {
							resolve(err, null);
						} else {
							resolve(null, data);
						}
					})
				}
			});
		}catch(err){
			resolve(err, null)
		}
	}
}
module.exports = model;