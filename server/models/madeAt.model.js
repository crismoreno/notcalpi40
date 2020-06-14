module.exports = (sequelize, Sequelize) => {
  const MadeAt = sequelize.define("madeats", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: {
      type: Sequelize.STRING,
    },
		short_name: {
      type: Sequelize.STRING,
    },
  });
  return MadeAt;
};
