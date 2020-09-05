const contactFormModel = require("../models/contactForm.model");

const controller = {
	postContactForm: (req, res) => {
		// const name = req.body.name;
		// const email = req.body.email;
		// const tel = req.body.telephone;
		// const message = req.body.message;
		// const company = req.body.company;
		contactFormModel.postContactForm(req.body,(err, resolve) =>{
			if(err){
				res.send(err)
			}else{
				res.send(resolve)
			}
		})
	}
}
module.exports = controller;