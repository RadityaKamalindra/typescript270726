/**
 * An online store has the following products below.
 * Tasks:
 * 1. Display only products that are currently available.
 * 2. Display only products that are currently available.
 * 3. Generate an array containing only the product names.
 * 4. Calculate the total value of all products currently in stock.
 * 5. Sort available products from most expensive → cheapest.
 */

import { log } from "node:console";

const products = [
    {
        id: 1,
        name: "Keyboard",
        category: "Computer",
        price: 350000,
        stock: 10,
    },
    {
        id: 2,
        name: "Mouse",
        category: "Computer",
        price: 150000,
        stock: 0,
    },
    {
        id: 3,
        name: "Monitor",
        category: "Computer",
        price: 2500000,
        stock: 5,
    },
    {
        id: 4,
        name: "Headset",
        category: "Audio",
        price: 450000,
        stock: 8,
    },
    {
        id: 5,
        name: "Microphone",
        category: "Audio",
        price: 850000,
        stock: 3,
    },
];

console.log(products.map(a => a));
console.log();
console.log(products.map(x => x.name));
console.log();
console.log(products.reduce((sum, x) => sum + x.stock, 0))
console.log();
console.log(products.sort((a,b) => b.price-a.price))


