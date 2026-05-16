
const inputTugas = $("#inputTugas");
const inputTanggal = $("#inputTanggal");
const btntambah = $("#btnTambah");
const daftarTugas = $("#daftarTugas");

btntambah.addEventListener("click", function(){
    
    let teskTugas = inputTugas.value;
    let tanggalValue = inputTanggal.value;

    if(teskTugas === ""){
        alert("Data harus dimasukan!");
        return;
    }

    if(!tanggalValue){
        alert("Tanggal harus diisi!");
        return;
    }

    let listbaru = document.createElement("li");
    let spanbaru = document.createElement("span");
    spanbaru.innerHTML = teskTugas + " <small>(" + tanggalValue + ")</small>";

    let tombolHapus = document.createElement("button");
    tombolHapus.innerHTML = "Hapus";
    tombolHapus.style.marginLeft = "10px";
    tombolHapus.style.background = "#ef4444";
    tombolHapus.style.color = "white";
    tombolHapus.style.border = "none";
    tombolHapus.style.padding = "6px 12px";
    tombolHapus.style.borderRadius = "6px";
    tombolHapus.style.cursor = "pointer";
    tombolHapus.onclick = function() {
        if(confirm("Apakah Anda yakin menghapus task ini?")) {
            listbaru.remove();
        }
    };

    let tombolEdit = document.createElement("button");
    tombolEdit.innerHTML = "Edit";
    tombolEdit.style.marginLeft = "5px";
    tombolEdit.style.background = "#f59e0b";
    tombolEdit.style.color = "white";
    tombolEdit.style.border = "none";
    tombolEdit.style.padding = "6px 12px";
    tombolEdit.style.borderRadius = "6px";
    tombolEdit.style.cursor = "pointer";
    tombolEdit.onclick = function() {
        let teksBaru = prompt("Edit tugas:", teskTugas);
        let tanggalBaru = prompt("Edit tanggal (YYYY-MM-DD):", tanggalValue);
        if(teksBaru && teksBaru !== "") {
            teskTugas = teksBaru;
        }
        if(tanggalBaru && tanggalBaru !== "") {
            tanggalValue = tanggalBaru;
        }
        
        spanbaru.innerHTML = teskTugas + " <small>(" + tanggalValue + ")</small>";
    };

    let tombolStatus = document.createElement("button");
    tombolStatus.innerHTML = "Progress";
    tombolStatus.style.marginLeft = "5px";
    tombolStatus.style.background = "#3b82f6";
    tombolStatus.style.color = "white";
    tombolStatus.style.border = "none";
    tombolStatus.style.padding = "6px 12px";
    tombolStatus.style.borderRadius = "6px";
    tombolStatus.style.cursor = "pointer";
    tombolStatus.onclick = function() {
        if(tombolStatus.innerHTML === "Progress") {
            tombolStatus.innerHTML = "Done";
            tombolStatus.style.background = "#10b981";
        } else {
            tombolStatus.innerHTML = "Progress";
            tombolStatus.style.background = "#3b82f6";
            listbaru.style.textDecoration = "none";
        }
    };

    listbaru.appendChild(spanbaru);
    listbaru.appendChild(tombolStatus);
    listbaru.appendChild(tombolEdit);
    listbaru.appendChild(tombolHapus);
    daftarTugas.appendChild(listbaru);

    const warnabaru = document.querySelectorAll("li");
    warnabaru.forEach((item, index) => {
        if(index % 2 === 0){
            item.style.color = "brown";
        } else {
            item.style.color = "black";
        }
    });

    inputTugas.value = "";
    inputTanggal.value = "";

});