const express = require("express");
const projectsController = require("../controllers/projects.controller.js");

const filteringTags = require("../controllers/filteringTags.controller.js");
const filteringMadeAts = require("../controllers/filteringMadeAts.controller.js");
const filteringCodingLang = require("../controllers/filteringCodingLang.controller.js");

const contactFormController = require("../controllers/contactForm.controller.js");

const router = express.Router();

//Retreiving all showable projects
router.get("/", projectsController.getAll);

// Find all featured projects
router.get("/featured", projectsController.getAllFeatured);

// Find a single projectby ID
router.get("/project/:id", projectsController.getById);
// Get all tags related to single Project
router.get("/projecttags/:id", projectsController.getTagsById);
router.get("/projectcodinglangs/:id", projectsController.getCodingLangsById);
router.get("/projectmadeat/:id", projectsController.getMadeAtById);

// Find projects by tags
//http://localhost:5000/api/tags?tags=1,2
router.get("/tags", filteringTags.getByTag);
//Get a list with all possible tags
router.get("/tagslist", filteringTags.getTagsList);

// Find projects by codingLangs
//http://localhost:5000/api/codinglangs?codinglangs=1,2
router.get("/codinglangs", filteringCodingLang.getByCodingLang);
//Get a list with all possible codingLangs
router.get("/codinglangslist", filteringCodingLang.getCodingLangsList);

//Get a list with all possible madeats
//http://localhost:5000/api/madeat?madeat=1,2
router.get("/madeat", filteringMadeAts.getByMadeAts);
//Get a list with all possible madeAts
router.get("/madeatslist", filteringMadeAts.getmadeAtsList);

router.post("/postForm", contactFormController.postContactForm);

module.exports = router;
