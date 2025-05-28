const fastify = require('fastify')({ logger : true});
const fastifyStatic = require('@fastify/static');
const path = require('path');

const productRoutes = require('./routes/product');


const connectMongoDB = require('./db/mongodb');
const connectMySQL = require('./db/mysql');

fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'public'),
    prefix: '/'
});

fastify.register(require('@fastify/view'), {
    engine: { pug: require('pug') },
    root: path.join(__dirname, 'views')
});



connectMongoDB(); // Kết nối database
connectMySQL();

fastify.register(productRoutes);


fastify.get('/', async (request, reply) => {
    return reply.view('home.pug', { 
        title: 'Trang chủ', 
        message: 'Chào mừng đến với Fastify!', 
        products: [] // Truyền một mảng rỗng để tránh lỗi Pug
    });
});




fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`🚀 Server chạy tại ${address}`);
});
