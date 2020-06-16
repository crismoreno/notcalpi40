module.exports = (sequelize, Sequelize) => {
  const ProjectMadeAt = sequelize.define(
    "project_madeat",
    {
      projectId: {
        type: Sequelize.INTEGER,
        // primaryKey: true,
        references: {
          model: "projects",
          key: "id",
        },
      },
      madeatId: {
        type: Sequelize.INTEGER,
        // primaryKey: true,
        references: {
          model: "madeats",
          key: "id",
        },
      },
    },
    { timestamps: false }
  );
  return ProjectMadeAt;
};
