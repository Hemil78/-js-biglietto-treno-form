//seleziono i bottoni
var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");

//al click
btnGenera.addEventListener ( "click",
    function() {

        //prendo i valori dei campi input e select
        var name = document.getElementById("name").value;
        var km = document.getElementById("km").value;
        var fascia = document.getElementById("fascia").value;

        //calcolo il prezzo in base all'età
        var prezzoKm = km * 0.21;

        if (fascia == "minorenne") {
            //sconto 20%
            prezzoKm = (prezzoKm - ((prezzoKm / 100) * 20));
        } else if (fascia == "over"){
            //sconto 40%
            prezzoKm = (prezzoKm - ((prezzoKm / 100) * 40));
        } else {
            //prezzo fisso
            prezzoKm = km * 0.21;
        }
        //stampo a video tutti i dati nel div del biglietto
        // nome del passeggero
        document.getElementById("nome-passeggero").innerHTML = name;
        //tipo di offerta
        document.getElementById("tipo-offerta").innerHTML = fascia;
        //prezzo
        document.getElementById('totale').innerHTML = prezzoKm.toFixed(2);
        //creare e stampo a video  numero carrozza e codice cliente
        var numCarrozza = Math.floor(Math.random() * 10) + 1;
        document.getElementById("carrozza").innerHTML = numCarrozza;

        var numCodice = Math.floor(Math.random() * 100000) + 1;
        document.getElementById("codice").innerHTML = numCodice;
        //mostro il biglietto
        document.getElementById("biglietto").classList.add("open");
        //tolgo i puntini
        document.getElementById("points").innerHTML = "";
    }
);

//click bottone annulla
btnAnnulla.addEventListener("click",
    function() {
        //nascondo il biglietto
        document.getElementById("biglietto").classList.remove("open");

        //reset di tutti i campi
        document.getElementById("name").value = "";
        document.getElementById("km").value = "";
        document.getElementById("fascia").value = "";
        
    }
);