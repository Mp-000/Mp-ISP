let pelanggan = JSON.parse(localStorage.getItem("pelanggan")) || [];

function renderPelanggan(){
  let html = "";
  pelanggan.forEach((p,i)=>{
    html += `
    <tr>
      <td>${p.nama}</td>
      <td>${p.alamat}</td>
      <td>${p.status}</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="hapusPelanggan(${i})">Hapus</button>
      </td>
    </tr>`;
  });
  document.getElementById("dataPelanggan").innerHTML = html;
  document.getElementById("totalPelanggan").innerText = pelanggan.length;
  localStorage.setItem("pelanggan", JSON.stringify(pelanggan));
}
renderPelanggan();

function tambahPelanggan(){
  Swal.fire({
    title:"Tambah Pelanggan",
    html:`
      <input id="nama" class="swal2-input" placeholder="Nama">
      <input id="alamat" class="swal2-input" placeholder="Alamat">
    `,
    preConfirm:()=>{
      pelanggan.push({nama:nama.value, alamat:alamat.value, status:"Aktif"});
      renderPelanggan();
    }
  })
}

function hapusPelanggan(i){
  Swal.fire({
    title:"Hapus?",
    icon:"warning",
    showCancelButton:true
  }).then(res=>{
    if(res.isConfirmed){
      pelanggan.splice(i,1);
      renderPelanggan();
    }
  })
                      }
    
