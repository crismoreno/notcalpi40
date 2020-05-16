const db = require("../models");
const Projects = db.projects;
// const ProjectTags = db.projectTags;
const Tags = db.tags;
// const Op = db.Sequelize.Op;
const Sequelize = db.sequelize;
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

// Find projects by tags
exports.getByTag = (req, res) => {
  let tagsToFetch;
  if (req.query.tags) {
    tagsToFetch = req.query.tags;
    tagsToFetch = tagsToFetch.split(",");
    const results = Sequelize.query(
      `SELECT p.id, p.title, p.customer, GROUP_CONCAT(pt.tagId) as tags
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

// Find projects by codingLangs
exports.getByCodingLang = (req, res) => {
  let codingLangsToFetch;
  if (req.query.codinglangs) {
    codingLangsToFetch = req.query.codinglangs;
    codingLangsToFetch = codingLangsToFetch.split(",");
    const results = Sequelize.query(
      `SELECT p.id, p.title, p.customer, GROUP_CONCAT(pcl.codinglangId) as codinglangs
			FROM projects p
			LEFT JOIN project_codingLangs as pcl ON p.id = pcl.projectId LEFT JOIN codinglangs cl ON cl.id=pcl.codinglangId AND cl.id IN (${codingLangsToFetch})
			GROUP BY p.id,p.title
			HAVING COUNT(pcl.codinglangId) >= COUNT(cl.id) AND COUNT(cl.id) = ${codingLangsToFetch.length}`,
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
  }
};
