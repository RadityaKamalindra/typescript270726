/**
 * Sebuah hotel menentukan ketersediaan kamar menggunakan aturan berikut.
 * Pertama, sistem memeriksa apakah kamar masih tersedia.
 * Jika kamar tersedia:
 * -Anggota premium menerima upgrade kamar gratis.
 * -Pelanggan reguler hanya menerima kamar yang dipesan.
 * 
 * Jika tidak ada kamar yang tersedia:
 * -Anggota premium ditempatkan pada daftar tunggu prioritas.
 * -Pelanggan reguler diberitahu bahwa tidak ada kamar yang tersedia.
 * 
 * Reservasi hari ini:
 * | Informasi | Nilai |
 * | -------------- | ----------- |
 * | Nama Pelanggan | Nadia Putri |
 * | Anggota Premium | Ya |
 * | Kamar Tersedia | Tidak |
 * 
 * Sistem harus menampilkan pesan yang sesuai.
 * Tugas Siswa: 
 * 1. Deklarasikan semua variabel.
 * 2. Implementasikan logika menggunakan pernyataan if yang disarangkan.
 * 3. Menampilkan hasil reservasi.
 */

const nama: string = "Nadia Putri"
const gender: string = "P"
const prem: boolean = true
const kamar: boolean = false

console.log("Nama Pelanggan :", nama)
console.log("Anggota Premium :", prem)
console.log("Kamar Tersedia :", kamar, "\n")

if (kamar) {
    if (prem) {
        if (gender == "P") {
            console.log("Terdapat kamar yang lebih direkomendasikan Nona")
            console.log("Lebih baik Nona menggunakan kamar tersebut, terimakasih kami sampaikan")
        } else {
            console.log("Terdapat kamar yang lebih direkomendasikan Tuan")
            console.log("Lebih baik Tuan menggunakan kamar tersebut, terimakasih kami sampaikan")
        }
    } else {
        console.log("Kamar telah berhasil dipesan")
    }
} else {
    if (prem) {
        if (gender == "P") {
            console.log("Maaf kamar sedang penuh");
            console.log("Nona akan kami tempatkan ke daftar tunggu prioritas");
            console.log("Kami meminta maaf yang sebesar-besarnya");
        } else {
            console.log("Maaf kamar sedang penuh");
            console.log("Tuan akan kami tempatkan ke daftar tunggu prioritas");
            console.log("Kami meminta maaf yang sebesar-besarnya");
        }
    } else {
        console.log("Reservasi kamar telah penuh, tidak ada kamar yang tersedia")
    }
}

/**
const nama: string = "Nadia Putri";
const gender: string = "P";
const prem: boolean = true;
const kamar: boolean = false;

const panggil = gender === "P" ? "Nona" : "Tuan";

console.log(`Nama Pelanggan : ${nama}\nAnggota Premium : ${prem}\nKamar Tersedia : ${kamar}\n`);

if (kamar) {
    if (prem) {
        console.log(`Terdapat kamar yang lebih direkomendasikan ${panggil}`);
        console.log(`Lebih baik ${panggil} menggunakan kamar tersebut, terimakasih kami sampaikan`);
    } else {
        console.log("Kamar telah berhasil dipesan");
    }
} else {
    if (prem) {
        console.log("Maaf kamar sedang penuh");
        console.log(`${panggil} akan kami tempatkan ke daftar tunggu prioritas`);
        console.log("Kami meminta maaf yang sebesar-besarnya");
    } else {
        console.log("Reservasi kamar telah penuh, tidak ada kamar yang tersedia");
    }
}

 */