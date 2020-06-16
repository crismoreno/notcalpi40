const db = require("../sequelize-models");
const Projects = db.projects;
const ProjectTags = db.projectTags;
const ProjectCodingLangs = db.projectCodingLangs;
const ProjectMadeAt = db.projectMadeAt;
const Tags = db.tags;
const CodingLangs = db.codingLangs;
const madeAt = db.madeAt;
const model = {
	// Find a single project by ID
	getProjectById: async (idToFetch, response) => {
		try{
			const project = await Projects.findAll({ where: { id: idToFetch } });
			response(null, project)
		}catch(err){
			response(err, null)
		}
	},
	// Get all tags related to single Project
	getTagsByProjectId: async (idToFetch, response) => {
		try{
			const tags = await ProjectTags.findAll({
				where: { projectId: idToFetch },
				include: [{ model: Tags }],
			})
			response(null, tags)
		}catch(err){
			response(err, null)
		}
	},
	// Get all codinglangs related to single Project
	getCodingLangsByProjectId: async (idToFetch, response) => {
		try{
			const codingLangs = await ProjectCodingLangs.findAll({
				where: { projectId: idToFetch },
				include: [{ model: CodingLangs }],
			})
			response(null, codingLangs)
		}catch(err){
			response(err, null)
		}
	},
	// Get all madeats related to single Project
	getMadeAtByProjectId: async (idToFetch, response) => {
		try{
			const madeAts = await ProjectMadeAt.findAll({
				where: { projectId: idToFetch },
				include: [{ model: madeAt }],
			})
			response(null, madeAts)
		}catch(err){
			response(err, null)
		}
	}
}
module.exports = model;