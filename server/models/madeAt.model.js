module.exports = (sequelize, Sequelize) => {
  const MadeAt = sequelize.define("madeats", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  });
  return MadeAt;
};
