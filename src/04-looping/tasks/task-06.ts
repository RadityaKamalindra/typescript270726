/**
 * Gudang menyimpan jumlah stok setiap produk dalam susunan berikut.
 * Aturan Gudang:
 * -Stok Habis → kuantitas = 0
 * -Stok Rendah → kuantitas <10
 * -Stok Aman → kuantitas ≥ 10
 * 
 * Siswa harus Menghitung:
 * -Jumlah produk yang kehabisan stok
 * -Jumlah produk Stok Rendah
 * -Jumlah produk Safe Stock
 * -Jumlah persediaan
 * -Jumlah stok rata-rata
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

for (const a of stocks) {
    console.log(a)
}

for (const kuantitas of stocks) {
    if (kuantitas == 0) {
        console.log("Stok Habis")
    } else if (kuantitas <= 10) {
        console.log("Stok Rendah")
    } else {
        console.log("Stok Aman")
    }
} 
