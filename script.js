
const inputTugas = $("#inputTugas");
const inputTanggal = $("#inputTanggal");
const btntambah = $("#btnTambah");
const daftarTugas = $("#daftarTugas");

btntambah.on("click", function(){
    
    let teskTugas = inputTugas.val();
    let tanggalValue = inputTanggal.val();

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
    $(spanbaru).html(teskTugas + " <small>(" + tanggalValue + ")</small>");

    let tombolHapus = document.createElement("button");
    $(tombolHapus).html("Hapus");
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
    $(tombolEdit).html("Edit");
    $(tombolEdit).css({
    marginLeft: "5px",
    background: "#f59e0b",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer"
    });
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
    $(tombolStatus).html("Progress");
    $(tombolStatus).css({
    marginLeft: "5px",
    background: "#3b82f6",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer"
    });
    tombolStatus.onclick = function() {
        if($(tombolStatus).html() === "Progress") {
           $(tombolStatus).html("Done");
           $(tombolStatus).css("background", "#10b981");
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

    $("li").each(function(index) {
    if(index % 2 === 0){
        $(this).css("color", "brown");
    } else {
        $(this).css("color", "black");
    }
    });

    inputTugas.val() = "";
    inputTanggal.val() = "";

});