const db = require("../models");
const Projects = db.projects;
const madeAt = db.madeAt;
const { QueryTypes } = require("sequelize");
const Sequelize = db.sequelize;

// Find projects by madeats
exports.getByMadeAts = (req, res) => {
  let madeAtsToFetch;
  if (req.query.madeat) {
    madeAtsToFetch = req.query.madeat;
    madeAtsToFetch = madeAtsToFetch.split(",");
    const results = Sequelize.query(
      `SELECT p.id, p.title, p.customer, p.imgs, GROUP_CONCAT(pma.madeatId) as madeats
			FROM projects p
			LEFT JOIN project_madeats as pma ON p.id = pma.projectId LEFT JOIN madeats ma ON ma.id=pma.madeatId AND ma.id IN (${madeAtsToFetch})
			GROUP BY p.id,p.title
			HAVING COUNT(pma.madeatId) >= COUNT(ma.id) AND COUNT(ma.id) = ${madeAtsToFetch.length}`,
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

//Get a list with all possible madeAts
exports.getmadeAtsList = (req, res) => {
  madeAt
    .findAll()
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
