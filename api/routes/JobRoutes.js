const router = require("express").Router();

const JobController = require("./../controllers/JobController");

router.post('/create', JobController.create);
router.get('/all', JobController.getAllJobs);

module.exports = router;
