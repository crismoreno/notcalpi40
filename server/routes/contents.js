const express = require('express');
const projectsController = require("../controllers/projects.controller.js");

const router = express.Router();

//Retreiving all projects
router.get("/", projectsController.findAll);

module.exports = router;