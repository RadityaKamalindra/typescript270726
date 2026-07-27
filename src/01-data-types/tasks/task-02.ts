/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */  

const NamaProduk: string = "Mechanical Keyboard RGB";
const CodeProduct: string = "KBR-001";

const HargaAsli: number = 850000;
const Diskon: number = 25;
const Jumlah: number = 2;

const PremiumOrNot: boolean = true;
const GratisOngkir: boolean = true;

const stok: number = 18;

console.log("Nama Produk:", NamaProduk);
console.log("Kode Produk:", CodeProduct);
console.log("Harga Asli:", HargaAsli);
console.log("Diskon:", Diskon + "%");
console.log("Jumlah yang dibeli:", Jumlah);
console.log("Apakah pelanggan premium?", PremiumOrNot);
console.log("Apakah gratis ongkir?", GratisOngkir);
console.log("Stok tersedia:", stok);
console.log("Total Harga Setelah Diskon:", HargaAsli * Jumlah * (1 - Diskon / 100));
