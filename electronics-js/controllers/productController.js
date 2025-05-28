const Product = require('../models/product');

const getProducts = async (req, reply) =>{
    try {
        const products = await Product.find();
        reply.view('pages/product.pug', { title: 'Danh sach san pham', products });
    }catch(err){
        console.error(err);
        reply.status(500).send('Server Error');
    }
};

module.exports = { getProducts };