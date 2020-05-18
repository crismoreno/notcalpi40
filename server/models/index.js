const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.contactForms = require("./contactForm.model")(sequelize, Sequelize);

db.projects = require("./projects.model")(sequelize, Sequelize);

db.tags = require("./tags.model")(sequelize, Sequelize);
db.projectTags = require("./projectTags.model")(sequelize, Sequelize);

db.codingLangs = require("./codingLangs.model")(sequelize, Sequelize);
db.projectCodingLangs = require("./projectCodingLangs.model")(
  sequelize,
  Sequelize
);

db.madeAt = require("./madeAt.model")(sequelize, Sequelize);
db.projectMadeAt = require("./projectMadeAt.model")(sequelize, Sequelize);

//RELATIONS
db.projects.hasMany(db.projectTags);
db.projectTags.belongsTo(db.tags);
db.projectTags.belongsTo(db.projects);

db.projects.hasMany(db.projectCodingLangs);
db.projectCodingLangs.belongsTo(db.codingLangs);
db.projectCodingLangs.belongsTo(db.projects);

db.projects.hasOne(db.projectMadeAt);
db.projectMadeAt.belongsTo(db.madeAt);
db.projectMadeAt.belongsTo(db.projects);

module.exports = db;
