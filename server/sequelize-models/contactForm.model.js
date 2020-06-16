module.exports = (sequelize, Sequelize) => {
  const ContactForms = sequelize.define("contact_form", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    tel: {
      type: Sequelize.STRING,
    },
    company: {
      type: Sequelize.STRING,
    },
    message: {
      type: Sequelize.STRING,
    },
  });
  return ContactForms;
};
