const express = require("express");
const projectsController = require("../controllers/projects.controller.js");

const router = express.Router();

//Retreiving all showable projects
router.get("/", projectsController.getAll);

// Find all featured projects
router.get("/featured", projectsController.getAllFeatured);

// Find a single projectby ID
router.get("/project/:id", projectsController.getById);

// Find projects by tags
//http://localhost:5000/api/tags?tags=1,2
router.get("/tags", projectsController.getByTag);

//Get a list with all possible tags
router.get("/tagslist", projectsController.getTagsList);

// Find projects by codingLangs
//http://localhost:5000/api/codinglangs?codinglangs=1,2
router.get("/codinglangs", projectsController.getByCodingLang);

//Get a list with all possible codinglangs
// router.get("/codinglanglist", projectsController.getTagsList);

module.exports = router;
