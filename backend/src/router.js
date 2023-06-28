const express = require("express");

const router = express.Router();

// Controllers

const userControllers = require("./controllers/UserControllers");
const smartphoneControllers = require("./controllers/SmartphoneController");
const loginController = require("./controllers/authController");

// Validators

const { validateUser, validateSmartphone } = require("./services/validators");

// Hashing

const { hashPassword } = require("./services/passwordHelper");

// POST Routes

router.post("/login", loginController.login);
router.post("/users", validateUser, hashPassword, userControllers.add);
router.post("/smartphones", validateSmartphone, smartphoneControllers.add);

// GET Routes

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.get("/smartphones", smartphoneControllers.browse);
router.get("/smartphones/:id", smartphoneControllers.read);

// PUT Routes

router.put("/users/:id", validateUser, userControllers.edit);
router.put("/smartphones/:id", validateSmartphone, smartphoneControllers.edit);

// DELETE Routes

router.delete("/users/:id", userControllers.destroy);
router.delete("/smartphones/:id", smartphoneControllers.destroy);

module.exports = router;
