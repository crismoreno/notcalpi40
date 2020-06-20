const db = require("../sequelize-models");
const CodingLangs = db.codingLangs;
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;

const model = {
// Find projects by CodingLangs
	getProjectsByCodingLangsId: async (codingLangsIds, response) => {
		try{
			const projects = await Sequelize.query(
				`SELECT p.id, p.title, p.customer, GROUP_CONCAT(pcl.codinglangId) as codinglangs
				FROM projects p
				LEFT JOIN project_codingLangs as pcl ON p.id = pcl.projectId LEFT JOIN codinglangs cl ON cl.id=pcl.codinglangId AND cl.id IN (${codingLangsIds})
				GROUP BY p.id,p.title
				HAVING COUNT(pcl.codinglangId) >= COUNT(cl.id) AND COUNT(cl.id) = ${codingLangsIds.length}`,
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
	//Get a list with all available codingLangs
	getAllAvailableCodingLangs: async (response) => {
		try{
			const codingLnags = await CodingLangs.findAll({order: [['orderby', 'ASC']]})
			response(null, codingLnags)
		}catch(err){
			response(err, null)
		}
	}
}
module.exports = model;