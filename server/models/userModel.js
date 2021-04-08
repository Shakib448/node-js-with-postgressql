import Sequelize from "sequelize";
import { db } from "../config/db.js";

const User = db.define("users", {
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

export default User;
