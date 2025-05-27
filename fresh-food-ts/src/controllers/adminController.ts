import productsData from '../data/products.json';

export const getAllProducts = async () => {
    return productsData;
};

export const getDashboardData = async () =>{
    return{
        revenue: 10000000,
        orders: 150,
        products: 200
    };
};