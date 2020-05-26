const db = require("../models");
const Projects = db.projects;
const CodingLangs = db.codingLangs;
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;

// Find projects by codingLangs
exports.getByCodingLang = (req, res) => {
  let codingLangsToFetch;
  if (req.query.codinglangs) {
    codingLangsToFetch = req.query.codinglangs;
    codingLangsToFetch = codingLangsToFetch.split(",");
    const results = Sequelize.query(
      `SELECT p.id, p.title, p.customer, p.imgs, GROUP_CONCAT(pcl.codinglangId) as codinglangs
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

//Get a list with all possible codinglangs
exports.getCodingLangsList = (req, res) => {
  CodingLangs.findAll()
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
