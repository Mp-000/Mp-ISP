function tambahPelanggan(){
let p=getData('pelanggan');
p.push({nama:nama.value,alamat:alamat.value,status:'Aktif'});
saveData('pelanggan',p);alert('Pelanggan ditambahkan');
}
