const express = require("express");
const projectsController = require("../controllers/projects.controller.js");
const projectController = require("../controllers/project.controller.js");

const filteringTags = require("../controllers/filteringTags.controller.js");
const filteringMadeAts = require("../controllers/filteringMadeAts.controller.js");
const filteringCodingLang = require("../controllers/filteringCodingLang.controller.js");

const contactFormController = require("../controllers/contactForm.controller.js");

const router = express.Router();

//Retreiving all showable projects
router.get("/", projectsController.getAllShowableProjects);
// Find all featured projects
router.get("/featured", projectsController.getAllFeaturedProjects);
// Find a single project by ID
router.get("/project/:id", projectController.getProjectById);
// Get all tags related to single Project
router.get("/projecttags/:id", projectController.getTagsByProjectId);
router.get("/projectcodinglangs/:id", projectController.getCodingLangsByProjectId);
router.get("/projectmadeat/:id", projectController.getMadeAtByProjectId);

// Find projects by tags
//http://localhost:5000/api/tags?tags=1,2
router.get("/tags", filteringTags.getProjectsByTagsId);
//Get a list with all available tags
router.get("/tagslist", filteringTags.getAllAvailableTags);

// Find projects by codingLangs
//http://localhost:5000/api/codinglangs?codinglangs=1,2
router.get("/codinglangs", filteringCodingLang.getProjectsByCodingLangsId);
//Get a list with all available codingLangs
router.get("/codinglangslist", filteringCodingLang.getAllAvailableCodingLangs);

// Find projects by madeAts
//http://localhost:5000/api/madeat?madeat=1,2
router.get("/madeat", filteringMadeAts.getProjectsByMadeAtId);
//Get a list with all available madeAts
router.get("/madeatslist", filteringMadeAts.getAllAvailableMadeAts);

router.post("/postForm", contactFormController.postContactForm);

module.exports = router;
