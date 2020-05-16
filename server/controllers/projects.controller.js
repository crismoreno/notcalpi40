const db = require("../models");
const Projects = db.projects;
// const ProjectTags = db.projectTags;
// const Tags = db.tags;
// const CodingLangs = db.codingLangs;
// const madeAt = db.madeAt;
// const Op = db.Sequelize.Op;
// const Sequelize = db.sequelize;
const { QueryTypes } = require("sequelize");

// Retrieve all showable projects
exports.getAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Projects.findAll({ where: { show: true } })
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

// Find a single projectby ID
exports.getById = (req, res) => {
  const idToFetch = req.params.id;
  Projects.findAll({ where: { id: idToFetch } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Project with id=" + id,
      });
    });
};

// Find all featured projects
exports.getAllFeatured = (req, res) => {
  Projects.findAll({ where: { is_featured: true } })
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
};
