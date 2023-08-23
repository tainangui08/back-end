module.exports = (sequelize, Sequelize) => {
  const NewPlay = sequelize.define("play", {
    title: {
      type: Sequelize.STRING(50),
    },
    description: {
      type: Sequelize.STRING(200),
    },
    numberOfPlayers: {
      type: Sequelize.INTEGER,
    },
    ageGroup: {
      type: Sequelize.STRING(20),
    },
  });

  return NewPlay;
};
