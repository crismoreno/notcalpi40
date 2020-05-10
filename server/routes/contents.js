const express = require("express");
const projectsController = require("../controllers/projects.controller.js");

const router = express.Router();

//Retreiving all projects
router.get("/", projectsController.getAll);
router.get("/featured", projectsController.getAllFeatured);
router.get("/project/:id", projectsController.getById);
//http://localhost:5000/api/tags?tags=code,html
router.get("/tags", projectsController.getByTag);
// router.get("/tags/list", projectsController.getAllTags);
//http://localhost:5000/api/filterplace?places=esdi
router.get("/filterplace", projectsController.getByFilterPlace);
// router.get("/filterplace/list", projectsController.getAllPlaces);
router.get("/codinglang", projectsController.getByCodingLang);
module.exports = router;
