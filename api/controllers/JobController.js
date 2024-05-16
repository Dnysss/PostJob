const Job = require("./../models/Job");
const ObjectId = require("mongoose").Types.ObjectId;

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

  static async getJobById(req, res) {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      res.status(422).json({ message: "Id invalid." });
      return;
    }

    const job = await Job.findOne({ _id: id });

    if (!job) {
      res.status(404).json({ message: "Not Found!" });
      return;
    }

    res.status(200).json({
      job: job,
    });
  }

  static async getJobByName(req, res) {
    try {
      const searchTerm = req.query.search; // Obtém o termo de pesquisa da solicitação
      const regex = new RegExp(searchTerm, "i"); // Cria uma expressão regular para fazer a busca sem diferenciar maiúsculas e minúsculas

      // Consulta o banco de dados MongoDB para encontrar empregos com o título que corresponde ao termo de pesquisa
      const jobs = await Job.findOne({ title: regex });
      res.json(jobs); // Retorna os resultados como JSON
    } catch (err) {
      console.error("Error searching for jobs:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};
