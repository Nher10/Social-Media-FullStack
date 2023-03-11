const { usersService } = require("../services/users.service");

class usersController {
  // create user
  static async createUser(req, res) {
    try {
      const {
        username,
        email,
        password,
        name,
        coverPic,
        profilePic,
        city,
        website,
      } = req.body;
      const user = await usersService.createUser({
        username,
        email,
        password,
        name,
        coverPic,
        profilePic,
        city,
        website,
      });
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  }
  // get all user
  static async getAllUsers(_req, res) {
    try {
      const users = await usersService.getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(404).json({ message: "Users not found" });
    }
  }
  // get user by id
  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await usersService.getUserById(id);
      res.json(user);
    } catch (err) {
      res.status(404).json({ message: "User not found" });
    }
  }
  // update user by id
  static async updateUserById(req, res) {
    try {
      const { id } = req.params;
      const {
        username,
        email,
        password,
        name,
        coverPic,
        profilePic,
        city,
        website,
      } = req.body;
      const users = await usersService.updateUserById(id, {
        username,
        email,
        password,
        name,
        coverPic,
        profilePic,
        city,
        website,
      });
      res.json(users);
    } catch (err) {
      res.status(404).json({ message: "User not found" });
    }
  }
  // delete user by id
  static async deleteUserById(req, res) {
    try {
      const { id } = req.params;
      const users = await usersService.deleteUSerById(id);
      res.json(users);
    } catch (err) {
      res.status(404).json({ message: "User not found" });
    }
  }
}

module.exports = { usersController };
