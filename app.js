const express = require("express");
const app = express();

const { sequelize } = require("./models");

const userRoutes = require("./routes/userRoutes");

app.use(express.json());

app.use("/api", userRoutes);

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database Connected");

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });