const Job = require("./../models/Job");

module.exports = class JobController {
  static async create(req, res) {
    const { title, description, company, email, salary } = req.body;
    const job = new Job({
      title,
      description,
      company,
      email,
      salary,
    });

    try {
      const newJob = await job.save();
      res.status(201).json({ message: "Success!", newJob });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }

  static async getAllJobs(req, res) {
    try {
      const jobs = await Job.find().sort("-createdAt");
      res.status(200).json({ jobs });
    } catch (err) {
      res.status(500).json({ message: err });
    }
  }
};


