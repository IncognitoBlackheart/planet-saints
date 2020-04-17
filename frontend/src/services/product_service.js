let DATA = [
    {id: 0, name: 'Purple Logo Saints Tee',       price: 11.91, picture: 'https://res.cloudinary.com/teepublic/image/private/s--jurwYve9--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_498/c_crop,g_north_west,h_626,w_470,x_14,y_14/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1494120371/production/designs/1577423_1.jpg'},
    {id: 1, name: 'Purple Logo Long Sleeve',      price: 25.67, picture: 'https://res.cloudinary.com/teepublic/image/private/s--3DcY7c-Q--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_399/c_crop,g_north_west,h_502,w_376,x_11,y_11/g_north_west,u_upload:v1446840676:production:blanks:vckar9iig1uncttqvjgw,x_-455,y_-298/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1494120371/production/designs/1577423_1.jpg'},
    {id: 2, name: '3rd Street Saints Black Tee', price: 21.45, picture: 'https://res.cloudinary.com/teepublic/image/private/s--GqWPsqNi--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1446164425/production/designs/76817_2.jpg'},
    {id: 3, name: 'Fleur-de-lis Tee',             price: 20.02, picture: 'https://i.ebayimg.com/images/g/WaQAAMXQGQRR9tGc/s-l300.jpg'},
    {id: 4, name: 'Mr. President Purple Tee',     price: 28.43, picture: 'https://images-na.ssl-images-amazon.com/images/I/61kra9mZUSL.jpg'},
    {id: 5, name: 'Mr. President White Tee',      price: 28.43, picture: 'https://images-na.ssl-images-amazon.com/images/I/61ZxY5YFMEL.jpg'}
];

const getProducts = () => DATA;

const getProduct = (idProduct) => {
    return DATA.filter(p => p.id === idProduct)[0];
};

const addProduct = (product, callback) => {
    let nextId = 0;
    if (DATA.length > 0) {
        nextId = Math.max(...DATA.map(p => p.id)) + 1;
    }
    product.id = nextId;
    DATA = [...DATA, product];
    callback();
};

const removeProduct = (idProduct, callback) => {
    let index = DATA.findIndex(p => p.id === idProduct);
    if (index >= 0) {
        DATA = [...DATA.slice(0, index), ...DATA.slice(index + 1)];
    }
    callback();
};

const editProduct = (product, callback) => {
    let index = DATA.findIndex(p => p.id === product.id);
    DATA[index] = product;
    callback();
};

const ProductsService = {
    getProducts,
    getProduct,
    addProduct,
    removeProduct,
    editProduct
};

export default ProductsService;