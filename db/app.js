const express = require("express");
const User = require("./User");

const port = 3001;
const app = express();

app.use(express.json());

app.listen(port, console.log(`#####   Servidor rodando na porta ${port}`));
