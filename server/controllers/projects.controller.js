const db = require("../models");
const Projects = db.projects;
const Op = db.Sequelize.Op;

// Retrieve all Projects from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Projects.findAll({ where: condition })
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

// Find a single Project with an id
exports.findById = (req, res) => {
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

// Find all featured Projects
exports.findAllFeatured = (req, res) => {
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
