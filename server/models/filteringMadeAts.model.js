const db = require("../sequelize-models");
const madeAt = db.madeAt;
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;

const model = {
	// Find projects by madeAts
getProjectsByMadeAtId: async (madeAtsIds, response) => {
		try{
			const projects = await Sequelize.query(
				`SELECT p.id, p.title, p.customer, GROUP_CONCAT(pma.madeatId) as madeats
				FROM projects p
				LEFT JOIN project_madeats as pma ON p.id = pma.projectId LEFT JOIN madeats ma ON ma.id=pma.madeatId AND ma.id IN (${madeAtsIds})
				GROUP BY p.id,p.title
				HAVING COUNT(pma.madeatId) >= COUNT(ma.id) AND COUNT(ma.id) = ${madeAtsIds.length}`,
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
	//Get a list with all available madeAts
	getAllAvailableMadeAts: async (response) => {
		try{
			const madeAts = await madeAt.findAll()
			response(null, madeAts)
		}catch(err){
			response(err, null)
		}
	}
}
module.exports = model;