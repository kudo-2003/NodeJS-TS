module.exports = function (fastify, opts, done) {
    fastify.get('/products', async (request, reply) => {
        reply.send({ message: 'Danh sách sản phẩm' });
    });
    done();
};
