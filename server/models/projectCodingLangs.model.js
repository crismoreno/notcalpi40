module.exports = (sequelize, Sequelize) => {
  const ProjectCodingLangs = sequelize.define(
    "project_codingLangs",
    {
      projectId: {
        type: Sequelize.INTEGER,
        // primaryKey: true,
        references: {
          model: "projects",
          key: "id",
        },
      },
      codinglangId: {
        type: Sequelize.INTEGER,
        // primaryKey: true,
        references: {
          model: "codinglangs",
          key: "id",
        },
      },
    },
    { timestamps: false }
  );
  return ProjectCodingLangs;
};
