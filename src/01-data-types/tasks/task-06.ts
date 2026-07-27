/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {  
    productCode: string;
    productName: string;
    sellingPrice: number;
    stockQuantity: number;
    productWeight: number;
    averageCustomerRating: number;
    isDiscounted: boolean;
};

const product1: Product = {
    productCode: "KOPDES-19283",
    productName: "Vodka Red Label 1L",
    sellingPrice: 2500000,
    stockQuantity: 500,
    productWeight: 1,
    averageCustomerRating: 5.0,
    isDiscounted: false
};

const product2: Product = {
    productCode: "KOPDES-09723",
    productName: "Cocaine Chocolate Flavor 100g",
    sellingPrice: 1500000,
    stockQuantity: 2045,
    productWeight: 0.1,
    averageCustomerRating: 5.0,
    isDiscounted: false
};

const product3: Product = {
    productCode: "KOPDES-76231",
    productName: "Gas LPG 3kg",
    sellingPrice: 23000,
    stockQuantity: 20,
    productWeight: 3,
    averageCustomerRating: 2.7,
    isDiscounted: true
};

console.log("Product 1:", product1);
console.log("Product 2:", product2);
console.log("Product 3:", product3);