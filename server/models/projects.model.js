const db = require("../sequelize-models");
const Projects = db.projects;
const model = {
	// Retrieve all showable projects
	getAllShowableProjects: async (response) =>{
		try{
			const projects = await Projects.findAll({
				where: { show: true },
				order: [['orderby', 'ASC']]
			})
			response(null, projects)
		}catch(err){
			response(err, null)
		}
	},
	// Retrieve all featured projects
	getAllFeaturedProjects: async (response) => {
		try{
			const projects = await Projects.findAll({
				where: { is_featured: true },
				order: [['orderby', 'ASC']]
			})
			response(null, projects)
		}catch(err){
			response(err, null)
		}
	}
}
module.exports = model;