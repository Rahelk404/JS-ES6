const info = {name: 'Rahim', product: 'Laptop', price: 5000}


const Str = ({name, product, price}) => {
    const output = `${name} bought a ${product} for ${price} taka`
    return output;
}

console.log(Str(info));