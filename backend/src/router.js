const express = require("express");

const router = express.Router();

// Controllers

const userControllers = require("./controllers/UserControllers");
const smartphoneControllers = require("./controllers/SmartphoneController");

// POST Routes

router.post("/users", userControllers.add);
router.post("/smartphones", smartphoneControllers.add);

// GET Routes

router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.get("/smartphones", smartphoneControllers.browse);
router.get("/smartphones/:id", smartphoneControllers.read);

// PUT Routes

router.put("/users/:id", userControllers.edit);
router.put("/smartphones/:id", userControllers.edit);

// DELETE Routes

router.delete("/users/:id", userControllers.destroy);
router.delete("/smartphones/:id", userControllers.destroy);

module.exports = router;
