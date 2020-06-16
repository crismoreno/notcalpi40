const db = require("../sequelize-models");
const Projects = db.projects;
const Tags = db.tags;
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;
const projectsModel = require("../models/projects.model")

const filteringTagsModel = require("../models/filteringTags.model");


const controller = {
	// Find projects by tags
	getProjectsByTagsId : (req, res) => {
		let tagIds;
		if (req.query.tags) {
			tagIds = req.query.tags;
    	tagIds = tagIds.split(",");
			filteringTagsModel.getProjectsByTagsId(tagIds, (err, projects) =>{
				if(err){
					res.send(err)
				}else{
					res.send(projects)
				}
			})
		}else{
			projectsModel.getAllShowableProjects((err, projects) =>{
				if(err){
					res.send(err)
				}else{
					res.send(projects)
				}
			})
		}
	},
	//Get a list with all available tags
	getAllAvailableTags: (req, res) => {
		filteringTagsModel.getAllAvailableTags((err, tags) =>{
			if(err){
				res.send(err)
			}else{
				res.send(tags)
			}
		})
	}
}
module.exports = controller;
