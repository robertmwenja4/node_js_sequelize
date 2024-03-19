const config = require('../config/dbConfig.js')
const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(
    config.dbConfig.DB,
    config.dbConfig.USER,
    config.dbConfig.PASSWORD,
    {
        host: config.dbConfig.HOST,
        dialect: config.dbConfig.dialect,
        operatorAliases: false,

        pool: {
            max: config.dbConfig.pool.max,
            min: config.dbConfig.pool.min,
            dialect: config.dbConfig.pool.dialect,
            idle: config.dbConfig.pool.idle,
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('Connected');
})
.catch(err =>{
    console.log('Error is'+err);
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./productModel.js')(sequelize, DataTypes)
db.reviews = require('./reviewModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false})
.then(() => {
    console.log('Yes re-sync done');
})

//Relationship
// db.products.hasMany(db.reviews, {
//     foreignKey: 'product_id',
//     as: 'review'
// });

// db.reviews.belongsTo(db.products, {
//     foreignKey: 'product_id',
//     as: 'product'
// })
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

module.exports = db