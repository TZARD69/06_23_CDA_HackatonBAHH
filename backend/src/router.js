const express = require("express");
const {
  verifyToken,
  verifyTokenById,
  verifyTokenByRoleHedhunter,
  verifyTokenByRoleAdmin,
  verifyTokenByRoleCandidate,
} = require("./middleware/securityMiddleware");

const router = express.Router();

const candidateControllers = require("./controllers/candidateControllers");

router.get("/candidate", candidateControllers.browse);
router.get("/candidate/:id", candidateControllers.read);
router.put(
  "/candidate/:id",
  verifyToken,
  verifyTokenByRoleCandidate,
  verifyTokenByRoleAdmin,
  candidateControllers.edit
);
router.post(
  "/candidate",
  verifyToken,
  verifyTokenByRoleCandidate,
  verifyTokenByRoleAdmin,
  candidateControllers.add
);
router.delete(
  "/candidate/:id",
  verifyToken,
  verifyTokenByRoleCandidate,
  verifyTokenByRoleAdmin,
  candidateControllers.destroy
);

const companyControllers = require("./controllers/companyControllers");

router.get("/company", companyControllers.browse);
router.get("/company/:id", companyControllers.read);
router.put(
  "/company/:id",
  verifyToken,
  verifyTokenByRoleHedhunter,
  verifyTokenByRoleAdmin,
  companyControllers.edit
);
router.post(
  "/company",
  verifyToken,
  verifyTokenByRoleHedhunter,
  verifyTokenByRoleAdmin,
  companyControllers.add
);
router.delete(
  "/company/:id",
  verifyToken,
  verifyTokenByRoleHedhunter,
  verifyTokenByRoleAdmin,
  companyControllers.destroy
);

const headhunterControllers = require("./controllers/headhunterControllers");

router.get("/headhunter", headhunterControllers.browse);
router.get("/headhunter/:id", headhunterControllers.read);
router.put(
  "/headhunter/:id",
  verifyToken,
  verifyTokenByRoleHedhunter,
  verifyTokenByRoleAdmin,
  headhunterControllers.edit
);
router.post(
  "/headhunter",
  verifyToken,
  verifyTokenByRoleHedhunter,
  verifyTokenByRoleAdmin,
  headhunterControllers.add
);
router.delete(
  "/headhunter/:id",
  verifyToken,
  verifyTokenByRoleHedhunter,
  verifyTokenByRoleAdmin,
  headhunterControllers.destroy
);

const jobApplicationsControllers = require("./controllers/jobApplicationsControllers");

router.get("/job_applications", jobApplicationsControllers.browse);
router.get("/job_applications/:id", jobApplicationsControllers.read);
router.put(
  "/job_applications/:id",
  verifyToken,
  verifyTokenByRoleCandidate,
  verifyTokenByRoleAdmin,
  jobApplicationsControllers.edit
);
router.post(
  "/job_applications",
  verifyToken,
  verifyTokenByRoleCandidate,
  verifyTokenByRoleAdmin,
  jobApplicationsControllers.add
);
router.delete("/job_applications/:id", jobApplicationsControllers.destroy);

const jobOffersControllers = require("./controllers/jobOffersControllers");

router.get("/job_offers", jobOffersControllers.browse);
router.get("/job_offers/:id", jobOffersControllers.read);
router.put(
  "/job_offers/:id",
  verifyToken,
  verifyTokenByRoleHedhunter,
  verifyTokenByRoleAdmin,
  jobOffersControllers.edit
);
router.post(
  "/job_offers",
  verifyToken,
  verifyTokenByRoleHedhunter,
  verifyTokenByRoleAdmin,
  jobOffersControllers.add
);
router.delete(
  "/job_offers/:id",
  verifyToken,
  verifyTokenByRoleHedhunter,
  verifyTokenByRoleAdmin,
  jobOffersControllers.destroy
);

const userControllers = require("./controllers/userControllers");

const loginController = require("./controllers/authControllers/LoginController");

router.post("/login", loginController);

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", verifyToken, verifyTokenById, userControllers.edit);
router.post("/user", userControllers.add);
router.delete(
  "/user/:id",
  verifyToken,
  verifyTokenById,
  userControllers.destroy
);

module.exports = router;
