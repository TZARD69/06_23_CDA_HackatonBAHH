const express = require("express");

const router = express.Router();

const candidateControllers = require("./controllers/candidateControllers");

router.get("/candidate", candidateControllers.browse);
router.get("/candidate/:id", candidateControllers.read);
router.put("/candidate/:id", candidateControllers.edit);
router.post("/candidate", candidateControllers.add);
router.delete("/candidate/:id", candidateControllers.destroy);

const companyControllers = require("./controllers/companyControllers");

router.get("/company", companyControllers.browse);
router.get("/company/:id", companyControllers.read);
router.put("/company/:id", companyControllers.edit);
router.post("/company", companyControllers.add);
router.delete("/company/:id", companyControllers.destroy);

const headhunterControllers = require("./controllers/headhunterControllers");

router.get("/headhunter", headhunterControllers.browse);
router.get("/headhunter/:id", headhunterControllers.read);
router.put("/headhunter/:id", headhunterControllers.edit);
router.post("/headhunter", headhunterControllers.add);
router.delete("/headhunter/:id", headhunterControllers.destroy);

const jobApplicationsControllers = require("./controllers/jobApplicationsControllers");

router.get("/job_applications", jobApplicationsControllers.browse);
router.get("/job_applications/:id", jobApplicationsControllers.read);
router.put("/job_applications/:id", jobApplicationsControllers.edit);
router.post("/job_applications", jobApplicationsControllers.add);
router.delete("/job_applications/:id", jobApplicationsControllers.destroy);

const jobOffersControllers = require("./controllers/jobOffersControllers");

router.get("/job_offers", jobOffersControllers.browse);
router.get("/job_offers/:id", jobOffersControllers.read);
router.put("/job_offers/:id", jobOffersControllers.edit);
router.post("/job_offers", jobOffersControllers.add);
router.delete("/job_offers/:id", jobOffersControllers.destroy);

const userControllers = require("./controllers/userControllers");

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.edit);
router.post("/user", userControllers.add);
router.delete("/user/:id", userControllers.destroy);

module.exports = router;
