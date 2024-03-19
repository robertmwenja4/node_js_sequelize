module.exports =  (sequelize, DataTypes) => {
    const Review = sequelize.define('Review', {
        ratings: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        }
    });

    Review.associate = (models) =>{

        Review.belongsTo(sequelize.define('Product'), {
            foreignKey: 'product_id',
            as: 'product'
        });
    }
    return Review;
}