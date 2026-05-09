
const inputTugas = document.getElementById("inputTugas")
const btntambah = document.getElementById("btnTambah")
const daftarTugas = document.getElementById("daftarTugas")

btntambah.addEventListener("click", function(){
    
    let teskTugas = inputTugas.value;

    if(teskTugas === ""){
        alert("Data harus dimasukan!");
        return;
    }
    
    let listbaru = document.createElement("li");
    let spanbaru = document.createElement("span");

    spanbaru.innerHTML= teskTugas;

    listbaru.appendChild(spanbaru);

    daftarTugas.appendChild(listbaru);

    const warnabaru = document.querySelectorAll("li");
    warnabaru.forEach((item, index) => {
        if(index % 2 === 0){
            item.style.color = "red";
        } else {
            item.style.color = "green";
        }
    });

    inputTugas.value = "";


});