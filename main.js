'use strict';

let buttonGenera = document.getElementById('buttonGenera');
let buttonAnnulla = document.getElementById('buttonAnnulla');
let nomeCognome = document.getElementById('NameSurname');
let etaPasseggero = document.getElementById('eta');
let kmDaPercorrere = document.getElementById('kmTotali');
Number(kmDaPercorrere);
Number(etaPasseggero);

// inizializzo a 0 le 2 variabili una per il prezzo totale e una per il prezzo scontato
let prezzoTotale = 0;
let prezzoScontato = 0;


prezzoTotale = kmDaPercorrere * 0.21;  
console.log('il prezzo totale è: ' + prezzoTotale);

buttonGenera.addEventListener('click', function () {

if(etaPasseggero === 'minorenne'){
    prezzoScontato = (prezzoTotale * 20 / (100));
    prezzoTotale = prezzoTotale - prezzoScontato;
    console.log('il prezzo scontato è:' + ' ' + prezzoTotale.toFixed(2));

}
else if(etaPasseggero === 'over 65'){
    prezzoScontato = (prezzoTotale * 40 / (100));
    prezzoTotale = prezzoTotale - prezzoScontato;
    console.log('il prezzo scontato è:' + ' ' + prezzoTotale.toFixed(2));
}


});