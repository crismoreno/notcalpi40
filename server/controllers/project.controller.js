const db = require("../sequelize-models");
const projectModel = require("../models/project.model")
const ProjectMadeAt = db.projectMadeAt;
const controller = {
		// Find a single project by ID
	getProjectById : (req, res) => {
		const idToFetch = req.params.id;
		projectModel.getProjectById(idToFetch, (err, project) =>{
			if(err){
				res.send(err)
			}else{
				res.send(project)
			}
		})
	},
	// Get all tags related to single Project
	getTagsByProjectId: (req, res) => {
		const idToFetch = req.params.id;
		projectModel.getTagsByProjectId(idToFetch, (err, tags) =>{
			if(err){
				res.send(err)
			}else{
				res.send(tags)
			}
		})
	},
	// Get all codinglangs related to single Project
	getCodingLangsByProjectId: (req, res) => {
		const idToFetch = req.params.id;
		projectModel.getCodingLangsByProjectId(idToFetch, (err, codingLangs) =>{
			if(err){
				res.send(err)
			}else{
				res.send(codingLangs)
			}
		})
	},
	// Get all madeats related to single Project
	getMadeAtByProjectId: (req, res) => {
		const idToFetch = req.params.id;
		projectModel.getMadeAtByProjectId(idToFetch, (err, madeAts) =>{
			if(err){
				res.send(err)
			}else{
				res.send(madeAts)
			}
		})
	}
}
module.exports = controller;