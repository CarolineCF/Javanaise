var inscrit = prompt('êtes-vous inscrit ? Entrez oui ou non'); // boolean oui/non
var age = prompt('Quel est ton âge');
var raceNumber = Math.floor(Math.random()*1000);

if (inscrit === 'non') {
   raceNumber= raceNumber + 1000;
console.log('Votre nouveau numéro de dossard est le' + ' ' + raceNumber);
} 
 if (age > 18 && inscrit ==='oui') {
console.log('You will race at 9:30 am');
} if (inscrit === 'oui'  || age > 18) {
    console.log('You will race at 11:00 am '+ raceNumber);
} else if (age < 18 && inscrit === 'non') {
    console.log('You will race at 12:30 pm ' + 'avec votre dossard numéro' + ' ' + raceNumber);
} else {
    console.log( 'Go to see the registration desk');
}







console.log('exo-2');