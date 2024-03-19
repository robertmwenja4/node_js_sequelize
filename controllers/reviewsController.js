const db = require('../models')

const Review = db.reviews

//add reviews
const addReview = async (req, res) => {
    const info = {
        ratings: req.body.ratings,
        description: req.body.description,
        product_id: req.body.product_id
    };

    const review = await Review.create(info);
    res.status(201).send(review)
}

//GetAll reviews
const getAllReviews = async (req,res) => {
    const reviews = await Review.findAll();
    res.status(200).send(reviews);
}



module.exports = {
    addReview, getAllReviews
}