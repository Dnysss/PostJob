const router = require("express").Router();

const JobController = require("./../controllers/JobController");

router.post('/create', JobController.create);
router.get('/all', JobController.getAllJobs);
router.get('/:id', JobController.getJobById);

module.exports = router;
