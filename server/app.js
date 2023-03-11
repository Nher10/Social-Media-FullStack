const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const app = express();
const usersRoutes = require("./src/routes/user.routes");
const postsRoutes = require("./src/routes/post.routes");
const commentsRoutes = require("./src/routes/comment.routes"); 

app.use(bodyParser.json());
app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/comments", commentsRoutes);

app.listen(4000, async () => {
    console.log("Server is running on port 4000");
    await sequelize.authenticate()
});