const express = require('express');


const router = express.Router();

//Saying hi from server!
router.get('/projects', (req, res) => {
	res.json(

		[
			{
				"title": 'Project1',
				"content": 'This are the contents in project 1'
			},
			{
				"title": 'Project2',
				"content": 'This are the contents in project 2'
			}
		]
	)
});

module.exports = router;