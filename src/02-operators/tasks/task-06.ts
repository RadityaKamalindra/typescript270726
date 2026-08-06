/**
 * Sebuah kafe internet mengenakan tarif kepada pelanggan sebesar Rp8.000 per jam. 
 * Pelanggan ditagih untuk setiap jam mulai. Jika total waktu bermain melebihi 5 jam, mereka mendapat diskon 15%.
 * Saat ini, pelanggan menggunakan komputer untuk:
 * 7 jam 35 menit
 * 
 * 
 * Anda perlu menentukan:
 * -Total waktu bermain dalam hitungan menit
 * -Sisa menit setelah jam penuh
 * -Total jam yang ditagih
 * -Total pembayaran sebelum diskon
 * -Jumlah diskon
 * -Pembayaran terakhir
 */

const hours: number = 7;
const minutes: number = 35;

const pricePerHour: number = 8000;
const discountPercentage: number = 0.15;

const totalMinutes: number = (hours * 60) + minutes;

const remainingMinutes: number = totalMinutes % 60;

const chargedHours: number = Math.ceil(totalMinutes / 60);

const totalPayment: number = chargedHours * pricePerHour;

const discount: number = chargedHours > 5 ? totalPayment * discountPercentage : 0;

const finalPayment: number = totalPayment - discount;

console.log("Total Minutes :", totalMinutes, "minutes");
console.log("Remaining Minutes :", remainingMinutes, "minutes");
console.log("Charged Hours :", chargedHours, "hours");
console.log("Total Payment Before Discount : Rp", totalPayment);
console.log("Discount : Rp", discount);
console.log("Final Payment : Rp", finalPayment);