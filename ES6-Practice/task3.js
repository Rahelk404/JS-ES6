const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Monitor' }
];

const productId = products.map(x => x.name);
console.log(productId[2]);

//----------------------------------------------

const targetProduct = products.find(x => x.id === 3);
console.log(targetProduct);