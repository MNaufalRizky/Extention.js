// Program JavaScript Sederhana Menggunakan if else

// Input Penjualan Harian 
const penjualanharian = 600000;

//Menghitung komisi berdasarkan ketentuan
let uangjasa, persentasekomisi;

if (penjualanharian <= 200000){
    uangjasa = 10000;
    persentasekomisikomisi = 0.1;
} else if (penjualanharian <= 500000) {
    uangjasa = 20000;
    persentasekomisi = 0.15; 
} else {
    uangjasa = 30000;
    persentasekomisi = 0.2;
}

//Menghitung uang komisi
const uangkomisi = penjualanharian * persentasekomisi;

//Menghitung total pendapatan
const totalpendapatan = uangjasa * uangkomisi
console.log("<===== Program Sederhana Menggunakan if dan else =====>")
console.log(`Penjualan Harian : ${penjualanharian}`);
console.log(`Uang Jasa : ${uangjasa}`);
console.log(`Uang Komisi : ${uangkomisi}`);
console.log(`Total Pendapatan : ${totalpendapatan}`);


//# Program JavaScript Sederhana Menggunakan Swicth dan case

// Input Penjualan Harian 
const penjualanHarian = 500000;

//Menghitung komisi berdasarkan ketentuan
let uangJasa, persentaseKomisi;

switch (true){
case (penjualanHarian <= 200000):
    uangJasa = 10000;
    persentaseKomisikomisi = 0.1;
    break;
case (penjualanHarian <= 500000):
    uangJasa = 20000;
    persentaseKomisi = 0.15;
    break; 
default:
    uangJasa = 30000;
    persentaseKomisi = 0.2;
    break;
}

//Menghitung uang komisi
const uangKomisi = penjualanHarian * persentaseKomisi;

//Menghitung total pendapatan
const totalPendapatan = uangJasa * uangKomisi

console.log("<===== Program Sederhana Menggunakan switch dan case =====>")
console.log(`Penjualan Harian : ${penjualanHarian}`);
console.log(`Uang Jasa : ${uangJasa}`);
console.log(`Uang Komisi : ${uangKomisi}`);
console.log(`Total Pendapatan : ${totalPendapatan}`);


// #Program JavaScript Sederhana Menggunakan gabungan if else dan switch case

// Input Penjualan Harian 
const Penjualanharian = 200000;

//Menghitung komisi berdasarkan ketentuan
let Uangjasa, Persentasekomisi;

if (Penjualanharian <= 200000){
    Uangjasa = 10000;
    Persentasekomisikomisi = 0.1;
} else if (Penjualanharian > 200000 && Penjualanharian <= 500000) {
    Uangjasa = 20000;
    Persentasekomisi = 0.15; 
} else {
    Uangjasa = 30000;
    Persentasekomisi = 0.2;
}

//Menghitung uang komisi
const Uangkomisi = Penjualanharian * Persentasekomisi;

//Menghitung total pendapatan
const Totalpendapatan = Uangjasa * Uangkomisi
console.log("<===== Program Sederhana Menggunakan gabungan if else dan switch case =====>")
console.log(`Penjualan Harian : ${Penjualanharian}`);
console.log(`Uang Jasa : ${Uangjasa}`);
console.log(`Uang Komisi : ${Uangkomisi}`);
console.log(`Total Pendapatan : ${Totalpendapatan}`);











