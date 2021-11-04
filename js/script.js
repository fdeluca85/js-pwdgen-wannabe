// alert ("hello world")



// richiesta nome

const myNome = prompt ("Inserisci il tuo nome");
// console.log(myNome);


// richiesta cognome

const myCongnome = prompt ("Inserisci il tuo cognome");
// console.log(myCongnome);



// richiesta cognome

const myColore = prompt ("Inserisci il tuo colore preferito");
// console.log(myColore);


// password ottenuta
let password = myNome + myCongnome + myColore + "21";
document.getElementById("password").innerHTML = password;
// console.log(password);