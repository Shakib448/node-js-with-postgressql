import sequelize from "sequelize";
import { db } from "../config/db.js";

const Curd = db.define("demo", {
  title: {
    type: sequelize.STRING,
  },
  description: {
    type: sequelize.STRING,
  },
  email: {
    type: sequelize.STRING,
  },
});

const CurdModel = Curd === sequelize.models.Curd;

export default CurdModel;
