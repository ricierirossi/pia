const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("pia", "root", "tanjiro", {
    host: "localhost",
    dialect: "mysql",
});

sequelize
    .authenticate()
    .then(() => {
        console.log("#####   Servidor conectado");
    })
    .catch(() => {
        console.log("#####    Erro ao conectar ao servidor");
    });

module.exports = sequelize;
