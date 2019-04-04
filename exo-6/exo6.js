// Partie 8 code academy
console.log("exo-6");

// commenter cette ligne de code.
var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
var team = {
    _players: [{
        firstName: "Pablo",
        lastName:"Sanchez",
        age: 11
    }]
    ,
    
    _games: [{
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27
    }]
};
function addPlayer(first,last,age) //permet de créer un joueur
{
    var player = {}; // je créer un nouvel objet "joueur"
    player.firstName = first; 
    player.lastName = last;
    player.age = age;
   team._players.push(player);
   
}
function newMatch(adv,tPoints,advPoints) // permet de lancer un match
{
    let match = {}; // je créer un nouvel objet "match"
    match.opponent = adv;
    match.teamPoints = tPoints;
    match.opponentPoints = advPoints;
    
    team._games.push(match);

}

addPlayer('bernard','yaya',23); // je parametre mon joueur
addPlayer('toto','tata',33);
addPlayer('bernadette','chouette',70);
addPlayer('yuraima','oruss',31);
addPlayer('zizou','zindine',40);
newMatch("TeamRocket",50,12);
newMatch("TeamRocket",66,34);
newMatch("TeamRocket",45,7);


//addition des score de mon équipe
var score =0;
team._games.forEach(function(element) {
    score=element.teamPoints+score;
});
///////////////////////////////////

//calcul de la moeyenne des points de l'équipe adverse 
var scoreAdv=0
var i =0;
team._games.forEach(function(element) {
    scoreAdv=element.opponentPoints+scoreAdv;
    i=i+1;
});
var moyenne= scoreAdv/i;
//////////////////////////////////
//trouver qui est le plus vieux des joueurs
var old=0;
team._players.forEach(function(element) {
 
    if(element.age > old) {
        old = element.age;
    }
}); 
/////////////////////////////////

/*function decroissant(a,b) { 
    if(a>b) return -1;
    if(a<b) return 1;
    return 0;
    }*/

    var croiss = function croissant(a,b) { 
    if(a.firstName>b.firstName) return 1;
    if(a.firstName<b.firstName) return -1;
    return 0;
    }
    
    
   

  
/////////////////////////////////

console.log(old);
console.log(score);
console.log(scoreAdv);
console.log(moyenne);
console.log(team._players.sort(croiss));
console.log(team._games);



// afficher le nombre de voitures de Joe

// changer le nombre de salle de bains de Joe : il n'en possède au'une.

// Joe vient d'acquérir un garage changer la structure pour le refléter.