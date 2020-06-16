const projectsModel = require("../models/projects.model")

const controller = {
		// Retrieve all showable projects
	getAllShowableProjects: (req, res) => {
		projectsModel.getAllShowableProjects((err, projects) =>{
			if(err){
				res.send(err)
			}else{
				res.send(projects)
			}
		})
	},
		// Retrieve all featured projects
	getAllFeaturedProjects : (req, res) => {
		projectsModel.getAllFeaturedProjects((err, projects) =>{
			if(err){
				res.send(err)
			}else{
				res.send(projects)
			}
		})
	},
}

module.exports = controller;