/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const friedRice: number = 18000;
const mineralWater: number = 5000;
const quantityFriedRice: number = 3;
const quantityMineralWater: number = 2;
const discount: number = 10000;



const totalsego: number = friedRice * quantityFriedRice;
const totalNgumbi: number = mineralWater * quantityMineralWater;

const GrandTotal: number = totalsego + totalNgumbi;
const FinalBayar: number = GrandTotal - discount;

console.log("Total Harga Nasi Goreng: Rp" + totalsego);
console.log("Total Harga Minuman: Rp" + totalNgumbi);
console.log("Total Harga Sebelum Diskon: Rp" + GrandTotal);
console.log("Total Harga Setelah Diskon: Rp" + FinalBayar); 

