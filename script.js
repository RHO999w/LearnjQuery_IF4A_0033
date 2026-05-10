
const inputTugas = document.getElementById("inputTugas")
const inputTanggal = document.getElementById("inputTanggal");
const btntambah = document.getElementById("btnTambah")
const daftarTugas = document.getElementById("daftarTugas")

btntambah.addEventListener("click", function(){
    
    let teskTugas = inputTugas.value;
    let tanggalValue = inputTanggal.value || "Tidak ada tanggal";

    if(teskTugas === ""){
        alert("Data harus dimasukan!");
        return;
    }

    if(tanggalValue === "") {
        let today = new Date();
        let tahun = today.getFullYear();
        let bulan = today.getMonth() + 1;
        let hari = today.getDate();
        tanggalValue = tahun + "-" + bulan + "-" + hari;
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
    tombolEdit.onclick = function() {
        let teksBaru = prompt("Edit tugas:", teskTugas);
        if(teksBaru && teksBaru !== "") {
            teskTugas = teksBaru;
            spanbaru.innerHTML = teskTugas + " <small>(" + tanggalValue + ")</small>";
        }
    };

    let tombolStatus = document.createElement("button");
    tombolStatus.innerHTML = "Progress";
    tombolStatus.style.marginLeft = "5px";
    tombolStatus.style.background = "orange";
    tombolStatus.onclick = function() {
        if(tombolStatus.innerHTML === "Progress") {
            tombolStatus.innerHTML = "Done";
            tombolStatus.style.background = "green";
        } else {
            tombolStatus.innerHTML = "Progress";
            tombolStatus.style.background = "orange";
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


});