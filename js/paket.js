let paket = JSON.parse(localStorage.getItem("paket")) || [];

function renderPaket(){
  let html="";
  paket.forEach((p,i)=>{
    html+=`
    <tr>
      <td>${p.nama}</td>
      <td>${p.speed}</td>
      <td>Rp ${p.harga}</td>
      <td><button class="btn btn-danger btn-sm" onclick="hapusPaket(${i})">Hapus</button></td>
    </tr>`;
  });
  document.getElementById("dataPaket").innerHTML=html;
  document.getElementById("totalPaket").innerText=paket.length;
  localStorage.setItem("paket",JSON.stringify(paket));
}
renderPaket();

function tambahPaket(){
  Swal.fire({
    title:"Tambah Paket",
    html:`
      <input id="nama" class="swal2-input" placeholder="Nama Paket">
      <input id="speed" class="swal2-input" placeholder="Kecepatan">
      <input id="harga" class="swal2-input" placeholder="Harga">
    `,
    preConfirm:()=>{
      paket.push({nama:nama.value,speed:speed.value,harga:harga.value});
      renderPaket();
    }
  })
}

function hapusPaket(i){
  paket.splice(i,1);
  renderPaket();
}
