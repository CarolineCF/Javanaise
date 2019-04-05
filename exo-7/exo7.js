console.log("exo-7");

var trad = {
    'car': 'voiture',
    'house': 'maison',
    'game': 'jeu',
    'videoGame': 'jeu-video',
    'show': 'concert'

};

jsonDatas.forEach(element0 => {
    var tab = Object.keys(trad);

    tab.forEach(element => {
        if (element0.type === element) {
            element0.type = trad[element];
           // 2ieme soluce pour ajouter cette fois ci une propriété dans un objet
           // element0.cat = trad[element];
        }
    });
});


console.log(jsonDatas);
