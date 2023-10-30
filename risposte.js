/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

1. String 
Per String si intende una stringa di testo: una serie di caratteri come "Stefano Ciri".
Le String si scrivono fra virgolette singole o doppie. 
Esempi: 
let nomeUtente = "Stefano Ciri";
let nomeUtente = 'Stefano Ciri';

2. Number
I numeri possono essere scritti con o senza decimali. 
Esempi: 
let x = 34.00;
let x = 34;

3. BigInt
Questa dicitura consente di archiviare numeri interi troppo grandi per essere archiviati attraverso un Number.EPSILON
Esempi:
let x = BigInt("123456789012345678901234567890");

4. Boolean
Un Boolean può avere due valori: true o false.
Esempi:
let x = 5;
let y = 5;
let z = 6;
(x == y) // true
(x == z) // false

5. Undefined 
Una variabile priva di valore assume valore e tipo undefined.
Esempi:
let car; // value e type corrispondono ad "undefined"

6. Null 
Il valore null indica l'assenza intenzionale del un valore per un oggetto.
Esempi: 
const m = null

7. Symbol
L'oggetto avente valore di tipo Symbol è unico: anche se vengono creati più simboli con la stessa descrizione, verranno considerati come valori differenti.
Esempi: 
let id1 = Symbol("id");
let id2 = Symbol ("id");
alert (id1 == id2); // false

8. Object
Ad un Object possono essere assegnate una serie di proprietà, separate da virgole all'interno di parentesi graffe.
Esempi: 
const utente = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = Stefano;

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12
let y = 20 
console.log(x+y)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = Ciri;
const name = Stefano;
let name = Ciri;

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log (4-x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = john;
let name2 = John;
(name1 == name2) // false
console.log (name2.toLowerCase()); // output: name2 = john


