#  calcolo del prezzo del biglietto del treno

#### 1. Descrizione Progetto
#### 2. Immagine di riferimento
#### 3. Descrizione Passaggi Inizio Progetto

## descrizione progetto

Scrivere un programma che chieda all’utente:

1. Il numero di chilometri da percorrere
2. Età del passeggero

3. Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

4. **MILESTONE** 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente **due input e un bottone** (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

5. **MILESTONE** 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

### immagine di riferimento 

![layout.img](<img-layout/screenshot (1).png>)

## descrizione passaggi inizio progetto

1. inizio con lo sviluppo della pagina HTML della MILESTONE 1 quindi inserendo solamente i 2 input e il bottone.
per il codice css prenderò quello utilizzato nel progetto precedente forse apportando qualche modifica che elencherò sotto

    - il primo input (partendo da sinistra guardando l'immagine) sara solo di tipo testuale 
    - il secondo input invece sara si di tipo numerico ma ci permette di tramite 2 frecce nel rettangolo di scorrere i numeri 
    - il terzo input sarà invece una lista di 3 elementi (Maggiorenne, Minorenne, over 65)

2. una volta che il programma funzionerà con lo scheletro HTML procedo alla creazione della pagina per intero, tenendo a mente che il secondo rettangolo con il titolo h2 non sarà inizialmente visibile e apparirà solamente quando si preme il bottone |GENERA| 

## JAVASCRIPT

ecco i vari passaggi che ho usato per il codice js

1. prendo con delle variabili gli elementi html tramite il loro ID in questo modo --> let buttonGenera = document.getElementById('buttonGenera');

2. successivamente inizializzo a 0 le variabili ch emi serviranno per il prezzo totale e per quellos contato

3.  tramite --- buttonGenera.addEventListener('click', function (){}) --- questa operazione creo una funzione che al click del bottone mostra in console i dati che ho richiesto 

4. all'interno dell'operazione 3 inserisco la condizione "if" per la quale se il passeggero è minorenne avra un tipo di prezzo e se over 65 avrà un altro tipo di prezzo 


  if(kmDaPercorrere.value < 0 ){
        costoBiglietto.innerHTML = 'inserire km';
    }else{
        prezzoTotale = kmDaPercorrere.value * 0.21;  
        console.log('il prezzo totale è: ' + prezzoTotale.toFixed(2) + '€');
    }

    dalla riga 46 alla 50 ma comprende tutto il blocco if, gestisce i km, se un passeggero mette i km sotto lo 0 allora in costo appare la stringa "inserire km"
    altrimenti il programma viene eseguito normalmente 

    ## sezione aggiunta da me 

    vorrei gestire i tipi di biglietto aprendo quindi una scermata che una volta selezionato il tipo del biglietto aggiunge al prezzo una quantità x:
    - biglietto standard Low cost : aggiunta 0;
    - biglietto 2a classe : aggiunta 0.10€ al km 
    - biglietto 1a classe : aggiunta 0.17€ al km 

    magari posso sviluppare una ulteriore sezione per la quale il passeggero ha la possibilità di scegliere il tragitto del treno e alla fine far quindi apparire una sezione che dice il tragito l'ora del treno e tutti i dettagli compressi