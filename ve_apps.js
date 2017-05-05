alert('Selamat datang, selamat bermain dalam aplikasi sederhanaku.\nSebelum mulai, mari berkenalan dulu.');
var nama = prompt('Silakan tuliskan nama kamu :  ');

if (nama === '') {
  alert("Kolom Nama masih belum kamu isi..");
}
else {
  alert("Sudah siap bermain, " + nama + "?");
}

var p1 = prompt("Terletak di Provinsi manakah Tugu Km 0 Indonesia? \n1) Aceh \n2) Papua \n3) Kalimantan")
var p2 = prompt("Apakah salah satu makanan yang terkenal dari Yogyakarta? \n1) Gudeg \n2) Cimol \n3) Lapet")
var p3 = prompt("Wisata alam yang terkenal di Jepara adalah? \n1) Karimun Jawa \n2) Gili Laba \n3) Batu")
var p4 = prompt("Gili Trawangan terletak di Pulau? \n1) Bali \n2) Lombok \n3) Sulawesi")
var p5 = prompt("Menu yang banyak diminati dari masakan Manado, adalah? \n1) Bubur \n2) Woku \n3) Gulai")
var p6 = prompt("Pulau yang berada di paling selatan Indonesia yaitu? \n1) Mianggas \n2)  Rote \n3) Simeuleu")
var p7 = prompt("Makanan tradisional yang banyak diminati oleh penduduk Indonesia Timur adalah? \n1) Betutu \n2) Soto \n3) Papeda")
var p8 = prompt("Tempat wisata yang terkenal di Papua Barat? \n1)Pantai Cermin \n2)Bromo \n3)Raja Ampat")
var p9 = prompt("Pahlawan Indonesia yang bernama Martha Christina Tiahahu berasal dari? \n1)Papua \n2)Nusa Tenggara Timur \n3)Ambon")


var barat = 0;
var tengah = 0;
var timur = 0;

if(p1=="1"){barat += 1;}
if(p2=="1"){barat += 1;}
if(p3=="1"){barat += 1;}
if(p4=="2"){tengah += 1;} 
if(p5=="2"){tengah += 1;} 
if(p6=="2"){tengah += 1;} 
if(p7=="3"){timur += 1;} 
if(p8=="3"){timur += 1;} 
if(p9=="3"){timur += 1;} 

console.log("Nilai sebagai Barat dalah "+barat)
console.log("Nilai sebagai Tengah dalah "+tengah)
console.log("Nilai sebagai Timur dalah "+timur)
document.write("<p>Wah, kamu cukup mengenal "+hasil()+"</p>")

function hasil(){
if (barat === 0 && tengah === 0 && timur === 0){
  return 'diri sendiri. Jalan-jalan gih biar mengenal Indonesia.'
}
else if(barat > tengah && barat > timur){
  return 'Indonesia bagian Barat.'
}
else if(tengah > barat && tengah > timur){
  return 'Indonesia bagian Tengah.'
}
else if(timur > barat && timur > tengah){
  return 'Indonesia bagian Timur.'
}
else {
  return 'Indonesia dari Sabang sampai Merauke.'
}
};
