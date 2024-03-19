const db = require('../models')


const Product = db.products
const Review = db.reviews

const addProduct = async (req, res) => {
    //product info

    const info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false,
    };

    //create await
    const product = await Product.create(info);
    res.status(200).send(product)
    console.log(product);
}

//get All products
const getAllProduct = async (req, res) => {
    let products = await Product.findAll();
    res.status(200).send(products)
    console.log(products);
}

//Get One Product
const getOneProduct = async (req, res) => {
    let id = req.params.id;
    let product = await Product.findOne({
        where: {
            id: id
        }
    });
    res.status(200).send(product);
}

//Update Product
const updateProduct = async (req,res) => {
    let id = req.params.id
    // const info = {
    //     title: req.body.title,
    //     price: req.body.price,
    //     description: req.body.description,
    //     published: req.body.published ? req.body.published : false,
    // };

    const product = await Product.update(req.body, {
        where: {
            id: id
        }
    });
    res.status(200).json({message: "Product Updated Successfully!!"});
    console.log(product);
}

//deleteProduct
const deleteProduct = async (req,res) => {
    let id = req.params.id;
    const product = await Product.destroy({
        where: {
            id: id
        }
    });
    res.status(200).json({message: 'Product Deleted Successfully!!'});
}

//Published products
const getPublishedProducts = async (req,res) => {
    const products = await Product.findAll({
        where: {
            published: true
        }
    })
    res.status(200).send(products);
}
//GetReviewsPerProduct
const getProductReviews = async (req,res) =>{
    const id = req.params.id;
    const productReviews = await Product.findOne({
        include: [{
            model: Review,
            as: 'reviews'
        }],
        where: {
            id: id
        }
    })
    const price = 9.999;
    const formattedPrice = price.toLocaleString('en-KE', {style: 'currency', currency: 'KSH'});
    res.status(200).send(formattedPrice)
}

module.exports = {
    addProduct, getAllProduct, getOneProduct, updateProduct, deleteProduct, getPublishedProducts, getProductReviews
}
