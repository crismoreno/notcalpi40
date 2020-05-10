const express = require("express");
const projectsController = require("../controllers/projects.controller.js");

const router = express.Router();

//Retreiving all projects
router.get("/", projectsController.findAll);
router.get("/featured", projectsController.findAllFeatured);
router.get("/project/:id", projectsController.findById);

module.exports = router;
