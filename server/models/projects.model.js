module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define("project", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderby: {
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    developed_at: {
      type: Sequelize.STRING,
    },
    customer: {
      type: Sequelize.STRING,
    },
    collaborators: {
      type: Sequelize.STRING,
    },
    completion_date: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    link_to_prod: {
      type: Sequelize.STRING,
    },
    link_to_repo: {
      type: Sequelize.STRING,
    },
    link_to_download: {
      type: Sequelize.STRING,
    },
    video: {
      type: Sequelize.STRING,
    },
    // tags: {
    //   type: Sequelize.STRING,
    // },
    // coding_lang: {
    //   type: Sequelize.STRING,
    // },
    is_featured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    show: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    imgs: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  return Project;
};
