const contactFormModel = require("../models/contactForm.model");

const controller = {
	postContactForm: (req, res) => {
		const name = req.body.name;
		const email = req.body.email;
		const tel = req.body.telephone;
		const message = req.body.message;
		const company = req.body.company;
		const state = 0
		contactFormModel.postContactForm(name, email, tel, message, company, state, (err, response) =>{
			if(err){
				res.send(err)
			}else{
				res.send(response)
			}
		})
	}
}
module.exports = controller;