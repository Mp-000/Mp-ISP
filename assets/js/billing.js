function buatTagihan(nama,jumlah){
let b=getData('billing');
b.push({nama:nama,jumlah:jumlah,status:'Belum Lunas'});
saveData('billing',b);
}
function bayar(i){
let b=getData('billing');
b[i].status='Lunas';
saveData('billing',b);
}
