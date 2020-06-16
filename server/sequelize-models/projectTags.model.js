module.exports = (sequelize, Sequelize) => {
  const ProjectTags = sequelize.define(
    "project_tags",
    {
      projectId: {
        type: Sequelize.INTEGER,
        // primaryKey: true,
        references: {
          model: "projects",
          key: "id",
        },
      },
      tagId: {
        type: Sequelize.INTEGER,
        // primaryKey: true,
        references: {
          model: "tags",
          key: "id",
        },
      },
    },
    { timestamps: false }
  );
  return ProjectTags;
};
