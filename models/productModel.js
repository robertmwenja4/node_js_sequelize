const Review = require('../models/reviewModel.js')
module.exports =  (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        title: {
            type: DataTypes.STRING,
            notNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.BOOLEAN
        }
    });

    Product.associate = (models) =>{

        Product.hasMany(sequelize.define('Review'), {
            foreignKey: 'product_id',
            as : 'reviews'
        });
    }

    
    return Product;
}