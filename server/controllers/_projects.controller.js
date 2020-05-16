const db = require("../models");
const Projects = db.projects;
const Op = db.Sequelize.Op;
const Sequelize = db.sequelize;
const { QueryTypes } = require("sequelize");

// Retrieve all Projects from the database.
exports.getAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

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

// Find a single Project with an id
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

// Find all featured Projects
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

// Find all projects by tags
exports.getByTag = (req, res) => {
  let tagsToFetch = req.query.tags;
  tagsToFetch = tagsToFetch.split(",");

  // Sequelize.query(`SELECT * FROM projects WHERE tags IN('%${tagsToFetch}%')`, {
  //   type: QueryTypes.SELECT,
  // })
  //   .then((data) => {
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     res.status(500).send({
  //       message:
  //         err.message ||
  //         "Some error occurred while retrieving featured projects.",
  //     });
  //   });

  Projects.findAll({})
    .then((data) => {
      const elementsToReturn = [];
      let checker = (arr, target) => target.every((v) => arr.includes(v));

      data.forEach((project) => {
        const check = checker(project.tags, tagsToFetch);
        if (check) {
          elementsToReturn.push(project);
        }
      });

      res.send(elementsToReturn);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving featured projects.",
      });
    });
};

// Find all projects by filterplace
exports.getByFilterPlace = (req, res) => {
  let placeToFetch = req.query.places;

  Projects.findAll({ where: { placefilter: placeToFetch } })
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

// exports.getAllPlaces = async (req, res) => {
//   const places = await Sequelize.query(
//     "SELECT DISTINCT `placefilter` FROM `projects`",
//     { type: QueryTypes.SELECT }
//   );
//   const array = places.map((place) => {
//     return place.placefilter;
//   });
//   res.send(array);
// };

// exports.getAllTags = async (req, res) => {
//   Sequelize.query("SELECT DISTINCT `tags` FROM `projects`", {
//     type: QueryTypes.SELECT,
//   })
//     .then((data) => {
//       let array = data.map((tag) => {
//         return tag.tags;
//       });
//       array.filter((item, index) => {
//         return array.indexOf(item) === index;
//       });
//       res.send(array);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message ||
//           "Some error occurred while retrieving featured projects.",
//       });
//     });
// };

// Find all projects by codingLang
exports.getByCodingLang = (req, res) => {
  let tagsToFetch = req.query.code;
  tagsToFetch = tagsToFetch.split(",");

  Projects.findAll({})
    .then((data) => {
      const elementsToReturn = [];
      let checker = (arr, target) => target.every((v) => arr.includes(v));

      data.forEach((project) => {
        const check = checker(project.coding_lang, tagsToFetch);
        if (check) {
          elementsToReturn.push(project);
        }
      });

      res.send(elementsToReturn);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving featured projects.",
      });
    });
};
