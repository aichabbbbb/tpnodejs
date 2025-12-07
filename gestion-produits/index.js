// index.js
function addProduct(name, price) {
    return {
        name,
        price,
        addedAt: new Date()
    };
}

function listProducts(products) {
    return products.map(p => `${p.name} - ${p.price}€`);
}

module.exports = { addProduct, listProducts };
