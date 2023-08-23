const db = require("../models");

const NewPlay = db.newplay;

const Op = db.Sequelize.Op;

// CRIANDO UMA PARTIDA
exports.create = (req, res) => {
  if (
    !req.body.title ||
    !req.body.description ||
    !req.body.numberOfPlayers ||
    !req.body.ageGroup
  ) {
    res.status(400).send({
      message: "Forneça todos os campos de dados obrigatórios.",
    });
    return;
  }

  const play = {
    title: req.body.title,
    description: req.body.description,
    numberOfPlayers: req.body.numberOfPlayers,
    ageGroup: req.body.ageGroup,
  };

  NewPlay.create(play)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Ocorreu um erro ao criar o jogo.",
      });
    });
};

// BUSCANDO TODAS AS PARTIDAS CRIADAS

exports.findAll = async (req, res) => {
  try {
    const data = await NewPlay.findAll();
    res.status(200).send({
      countPlay: data.length,
      data: data,
    });
  } catch (error) {
    res.status(500).send({
      message:
        error.message ||
        "Desculpe, ocorreu algum erro enquanto buscávamos todas as partidas.",
    });
  }
};

// BUSCANDO UMA PARTIDA ESPECIFICA
exports.findOne = (req, res) => {
  const id = req.params.id;

  NewPlay.findByPk(id)
    .then((data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send({
          message: "Partida com ID " + id + " não encontrada.",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao buscar a partida com ID: " + id,
      });
    });
};

// ATUALIZANDO OS DADOS DA PARTIDA
exports.update = (req, res) => {
  const id = req.params.id;
  let body = req.body;

  NewPlay.update(body, {
    where: { id: id },
  }).then((occ) => {
    if (occ == 1) {
      res.send({
        message: "A partida foi atualizada com sucesso.",
      });
      return;
    }

    res.send({
      message: `Não foi possível atualizar a partida. O id ${id} não foi encontrado. `,
    });
  });
};

// EXCLUINDO UMA PARTIDA
exports.delete = (req, res) => {
  const id = req.params.id;

  NewPlay.destroy({
    where: { id: id },
  }).then((occ) => {
    if (occ == 1) {
      res.send({
        message: "A partida foi excluida com sucesso.",
      });
      return;
    }

    res.send({
      message: `Não foi possível excluir a partida. O id ${id} não foi encontrado.`,
    });
  });
};
