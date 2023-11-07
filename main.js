'use strict';

let buttonGenera = document.getElementById('buttonGenera');
let buttonAnnulla = document.getElementById('buttonAnnulla');
let nomeCognome = document.getElementById('NameSurname');
let etaPasseggero = document.getElementById('eta');
let kmDaPercorrere = document.getElementById('kmTotali');
let offerte = document.getElementById('offerte');
Number(kmDaPercorrere);
Number(etaPasseggero);

// variabili per gli span html della sezione 2
let secTwo = document.getElementById("sectionTwo").style.visibility = "hidden";
let invisibleTitle = document.getElementById("invisibleTitle").style.visibility = "hidden";
let Name = document.getElementById('name');
let biglietto = document.getElementById('biglietto');
let carrozza = document.getElementById('carrozza');
let codiceCp = document.getElementById('codiceCp');
let costoBiglietto = document.getElementById('costoBiglietto');
let sectionTwo = document.getElementById('sectionTwo');

// inizializzo a 0 le 2 variabili una per il prezzo totale e una per il prezzo scontato
let prezzoTotale = 0;
let prezzoScontato = 0;

// numeri random per le carrozze del treno
let min = 1;
let max = 10;
let maxCodiceCp = 99000;

buttonGenera.addEventListener('click', function () {

    // rendere la sezione 2 e titolo invisibili
    let secTwo = document.getElementById("sectionTwo").style.visibility = "visible";
    let invisibleTitle = document.getElementById("invisibleTitle").style.visibility = "visible";

    // numeri random per le carrozze del treno
    carrozza.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;
    codiceCp.innerHTML = Math.floor(Math.random() * (maxCodiceCp - min  + 1)) + min;

    // gestione output nome e cognome
    console.log('nome e cognome: ' + nomeCognome.value);

    Name.innerHTML = nomeCognome.value;

    // calcolo prezzo totale con la condizione che gestisce i km (se sono meno di 0 allora si blocca)
    if(kmDaPercorrere.value < 0.5 ){
        costoBiglietto.innerHTML = 'inserire km';

        }else{
            // gestione per i vari tipi di offerta
            if(offerte.value === 'low'){
                biglietto.innerHTML = 'Low cost';
                prezzoTotale = kmDaPercorrere.value * 0.21;  
            }else if(offerte.value === 'two'){
                biglietto.innerHTML = '2a Classe';
                prezzoTotale = 0.10 + (kmDaPercorrere.value * 0.21);  
            }else if(offerte.value === 'trhee'){
                biglietto.innerHTML = '1a Classe';
                prezzoTotale = 0.17 + (kmDaPercorrere.value * 0.21);  
            }else{
                biglietto.innerHTML = 'seleziona un tipo di biglietto';
            }
            // gestione output km
            console.log('i km da percorrere sono: ' + kmDaPercorrere.value + 'Km');
            console.log('il prezzo totale è: ' + prezzoTotale.toFixed(2) + '€');
    

    if(etaPasseggero.value === 'minorenne'){
        prezzoScontato = (prezzoTotale * 20 / (100));
        prezzoTotale = prezzoTotale - prezzoScontato;
        console.log('il prezzo scontato è:' + ' ' + prezzoTotale.toFixed(2) + '€');
        costoBiglietto.innerHTML = prezzoTotale.toFixed(2) + '€';
    }
    else if(etaPasseggero.value === 'over'){
        prezzoScontato = (prezzoTotale * 40 / (100));
        prezzoTotale = prezzoTotale - prezzoScontato;
        console.log('il prezzo scontato è:' + ' ' + prezzoTotale.toFixed(2) + '€');
        costoBiglietto.innerHTML = prezzoTotale.toFixed(2) + '€';
    }
    else{
        costoBiglietto.innerHTML = prezzoTotale.toFixed(2) + '€';
    }
}       //fine if che gestisce i km
});

// evento per cancellare cio che si è scritto nell'input e per cancellare la sezione 2 
buttonAnnulla.addEventListener( 'click', function(){
    nomeCognome.value = null;
    kmDaPercorrere.value = null;
    etaPasseggero.value = null;
    let secTwo = document.getElementById("sectionTwo").style.visibility = "hidden";
    let invisibleTitle = document.getElementById("invisibleTitle").style.visibility = "hidden"; 
}

)