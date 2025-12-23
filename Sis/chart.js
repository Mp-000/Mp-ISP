document.getElementById('p').innerText=g('pelanggan').length;
document.getElementById('pk').innerText=g('paket').length;
document.getElementById('t').innerText=g('tagihan').length;
new Chart(document.getElementById('chart'),{type:'bar',data:{labels:['Pelanggan','Paket','Tagihan'],datasets:[{data:[g('pelanggan').length,g('paket').length,g('tagihan').length]}]}});