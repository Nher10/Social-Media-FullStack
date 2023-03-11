const express = require("express");
const { usersController } = require("../controllers/users.controller");
const router = express.Router();

router.post("/", usersController.createUser);
router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.put("/:id", usersController.updateUserById);
router.delete("/:id", usersController.deleteUserById);

module.exports = router;
