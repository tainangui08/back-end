const express = require("express");

const app = express();

const PORT = 8080;

const db = require("./models");
db.sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/newPlay.routes")(app);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
