const express = require('express');
const projectsController = require("../controllers/projects.controller.js");

const router = express.Router();

//Saying hi from server!
// router.get('/projects', (req, res) => {
// 	res.json(

// 		[
// 			{
// 				"title": 'Project1',
// 				"content": 'This are the contents in project 1'
// 			},
// 			{
// 				"title": 'Project2',
// 				"content": 'This are the contents in project 2'
// 			}
// 		]
// 	)

// });


//Retreiving all projects
router.get("/", projectsController.findAll);

module.exports = router;