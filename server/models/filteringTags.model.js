const db = require("../sequelize-models");
const Projects = db.projects;
const ProjectTags = db.projectTags;
const Tags = db.tags;
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;

const model = {
// Find projects by tags
	getProjectsByTagsId: async (tagIds, response) => {
		try{
			const projects = await Sequelize.query(
				`SELECT p.id, p.title, p.customer, GROUP_CONCAT(pt.tagId) as tags
				FROM projects p
				LEFT JOIN project_tags as pt ON p.id = pt.projectId LEFT JOIN tags t ON t.id=pt.tagId AND t.id IN (${tagIds})
				GROUP BY p.id,p.title
				HAVING COUNT(pt.tagId) >= COUNT(t.id) AND COUNT(t.id) = ${tagIds.length}`,
				{
					type: QueryTypes.SELECT,
					raw: true,
					plain: false,
					logging: console.log,
					nest: true,
				}
			)
			response(null, projects)
		}catch(err){
			response(err, null)
		}
	},
	//Get a list with all available tags
	getAllAvailableTags: async (response) => {
		try{
			const tags = await Tags.findAll()
			response(null, tags)
		}catch(err){
			response(err, null)
		}
	}
}
module.exports = model;