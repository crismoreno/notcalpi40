module.exports = (sequelize, Sequelize) => {
	const Project = sequelize.define("project", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		title: {
			type: Sequelize.STRING,
			allowNull: false
		},
		customer: {
			type: Sequelize.STRING
		},
		completion_date: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		collaborators: {
			type: Sequelize.STRING
		},
		description: {
			type: Sequelize.STRING,
			allowNull: false
		},
		developed_at: {
			type: Sequelize.STRING
		},
		link_to_prod: {
			type: Sequelize.STRING
		},
		link_to_repo: {
			type: Sequelize.STRING
		},
		tags: {
			type: Sequelize.STRING
		},
		coding_lang: {
			type: Sequelize.STRING
		},
		is_featured: {
			type: Sequelize.BOOLEAN,
			allowNull: false
		},
		img: {
			type: Sequelize.STRING
		},
		video: {
			type: Sequelize.STRING
		},
		cover: {
			type: Sequelize.STRING
		}
	});
	return Project;
};