


interface Product {
    name: string,
    price: number,
}

const phone: Product = {
    name: "nokia phone",
    price: 300
}

const tablet: Product = {
    name: "samsung tablet",
    price: 700
}

const calculateIGV = (products: Product[], igv: number): number[] => {

    let total: number = 0;

    for (const prod of products) {
        total += prod.price;
    }

    return [total + (total * igv), igv * total];
}

console.log(calculateIGV([phone, tablet], 0.18));


