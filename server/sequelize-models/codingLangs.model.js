module.exports = (sequelize, Sequelize) => {
  const CodingLangs = sequelize.define("codinglangs", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    orderby: {
      type: Sequelize.INTEGER,
    },
  });
  return CodingLangs;
};
