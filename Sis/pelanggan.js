const f=document.getElementById('f'),tb=document.getElementById('tb');
function l(){tb.innerHTML='';g('pelanggan').forEach((e,i)=>tb.innerHTML+=`<tr><td>${e.nama}</td><td>${e.alamat}</td><td><button onclick=h(${i}) class='btn btn-danger btn-sm'>Hapus</button></td></tr>`)}
f.onsubmit=e=>{e.preventDefault();let d=g('pelanggan');d.push({nama:nama.value,alamat:alamat.value});s('pelanggan',d);Swal.fire('OK');f.reset();l()}
function h(i){let d=g('pelanggan');d.splice(i,1);s('pelanggan',d);l()}
l();