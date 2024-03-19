const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/productRouter.js')
const reviewRouter = require('./routes/reviewRouter.js')


const app = express();
var corOptions = {
    origin: 'https:://localhost:8081'
}


//middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Product Routes

app.use('/api/products', productRouter)
app.use('/api/reviews', reviewRouter)
//test api
app.get('/', (req, res) => {
    res.json({message: "Api test working"})
})


//define port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})