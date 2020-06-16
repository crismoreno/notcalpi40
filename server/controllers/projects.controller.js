// const db = require("../sequelize-models");
// const Projects = db.projects;
// const ProjectTags = db.projectTags;
// const ProjectCodingLangs = db.projectCodingLangs;
// const ProjectMadeAt = db.projectMadeAt;
// const Tags = db.tags;
// const CodingLangs = db.codingLangs;
// const madeAt = db.madeAt;
// const Op = db.Sequelize.Op;
// const Sequelize = db.sequelize;
// const { QueryTypes } = require("sequelize");

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