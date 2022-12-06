import Sequelize from "sequelize";

export const bancoDeDados = new Sequelize(process.env.CONNECTION_BD);
