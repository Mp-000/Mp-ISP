let tagihan = JSON.parse(localStorage.getItem("tagihan")) || [];

function renderTagihan(){
  let html="";
  tagihan.forEach((t,i)=>{
    html+=`
    <tr>
      <td>${t.pelanggan}</td>
      <td>${t.bulan}</td>
      <td>Rp ${t.total}</td>
      <td>${t.status}</td>
      <td>
        <button class="btn btn-success btn-sm" onclick="lunas(${i})">Lunas</button>
      </td>
    </tr>`;
  });
  document.getElementById("dataTagihan").innerHTML=html;
  document.getElementById("totalTagihan").innerText=tagihan.length;
  localStorage.setItem("tagihan",JSON.stringify(tagihan));
}
renderTagihan();

function tambahTagihan(){
  Swal.fire({
    title:"Tambah Tagihan",
    html:`
      <input id="pelanggan" class="swal2-input" placeholder="Nama Pelanggan">
      <input id="bulan" class="swal2-input" placeholder="Bulan">
      <input id="total" class="swal2-input" placeholder="Total">
    `,
    preConfirm:()=>{
      tagihan.push({pelanggan:pelanggan.value,bulan:bulan.value,total:total.value,status:"Belum Lunas"});
      renderTagihan();
    }
  })
}

function lunas(i){
  tagihan[i].status="Lunas";
  renderTagihan();
}
