const orders = [
    { id: 1, product: 'Mouse', price: 500, quantity: 2 },
    { id: 2, product: 'Keyboard', price: 1200, quantity: 1 },
    { id: 3, product: 'Monitor', price: 8000, quantity: 2 }
];


const subTotal = orders.map(x => x.price * x.quantity);

const grandTotal = orders.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

const expensiveOrder = orders.reduce((max, curr) => {
    const currentSubtotal = curr.price * curr.quantity;
    const maxSubtotal = max.price * max.quantity;
    return currentSubtotal > maxSubtotal  ? curr : max;
})

const productName = orders.map(x => x.product);

const maxPriceProdouct = orders.filter(x => x.price > 1000);

console.log(subTotal);
console.log(grandTotal);
console.log(expensiveOrder);
console.log(productName);
console.log(maxPriceProdouct);