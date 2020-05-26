const db = require("../models");
const Projects = db.projects;
const Tags = db.tags;
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;

// Find projects by tags
exports.getByTag = (req, res) => {
  let tagsToFetch;
  if (req.query.tags) {
    tagsToFetch = req.query.tags;
    tagsToFetch = tagsToFetch.split(",");
    const results = Sequelize.query(
      `SELECT p.id, p.title, p.customer, p.imgs, GROUP_CONCAT(pt.tagId) as tags
			FROM projects p
			LEFT JOIN project_tags as pt ON p.id = pt.projectId LEFT JOIN tags t ON t.id=pt.tagId AND t.id IN (${tagsToFetch})
			GROUP BY p.id,p.title
			HAVING COUNT(pt.tagId) >= COUNT(t.id) AND COUNT(t.id) = ${tagsToFetch.length}`,
      {
        type: QueryTypes.SELECT,
        raw: true,
        plain: false,
        logging: console.log,
        nest: true,
      }
    )
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while retrieving featured projects.",
        });
      });
  } else {
    Projects.findAll({
      where: { show: true },
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ["orderby", "ASC"],
      ],
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving projects.",
        });
      });
  }
};

//Get a list with all possible tags
exports.getTagsList = (req, res) => {
  Tags.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving projects.",
      });
    });
};
