const { users } = require("../../models/");

class usersService {
  // createUser
  static async createUser({
    username,
    email,
    password,
    name,
    coverPic,
    profilePic,
    city,
    website,
  }) {
    try {
      const userCreated = await users.create({
        username,
        email,
        password,
        name,
        coverPic,
        profilePic,
        city,
        website,
      });
      return userCreated;
    } catch (err) {
      console.log(err);
    }
  }
  // get all users
  static async getAllUsers() {
    try {
      return users.findAll({
        include: ["posts", "comments"],
      });
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }
  // get user by id
  static async getUserById(id) {
    try {
      return users.findOne({
        where: { id },
        include: ["posts", "comments"],
      });
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }
  // update user by id
  static async updateUserById(
    id,
    { username, email, password, name, coverPic, profilePic, city, website }
  ) {
    try {
      const user = await users.findOne({ where: { id } });
      if (user) {
        user.username = username;
        user.email = email;
        user.password = password;
        user.name = name;
        user.name = coverPic;
        user.profilePic = profilePic;
        user.city = city;
        user.website = website;
        await user.save();
        return user;
      }
      return null;
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }
  // delete user by id
  static async deleteUSerById(id) {
    try {
      const user = await users.findOne({ where: { id } });
      if (user) {
        await user.destroy();
        return true;
      }
      return false;
    } catch (err) {
      console.log(err);
      throw new Error();
    }
  }
}

module.exports = { usersService };
