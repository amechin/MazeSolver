let lab;

$.getJSON("lab.json", function (allMazes) {
    const size = 20;
    const {20: allMazesSize} = allMazes;
    const {'ex-0': mazeSize} = allMazesSize;

    //initialisation du labyrinthe
    lab = arrayDim(size);

    //chargement du labyrinthe avec les murs
    $.each(mazeSize, function (i, el) {
        lab[el.posX][el.posY] = el.walls;
        console.log(el.walls);
    });

    creaGrille(size);

    //on enlève les murs du labyrinthe
    for (let i = 0; i < size ; i++) { // boucle sur lignes
        for (let j = 0; j < size; j++) { // boucle sur colonnes
            let wallsArr = lab[i][j];
            $.each(wallsArr, function (position, wall) {
                if(!wall){
                    removeWall(i,j, position);
                }
            });

        }
    }



});

function creaGrille(sizeMaze) {
    let innerHTMLString = "";
    innerHTMLString = '<table class=\"table table-bordered border-dark\">';
    for (let ligne = 0; ligne < sizeMaze; ligne++) {
        innerHTMLString += '<tr>';
        for (let col = 0; col < sizeMaze; col++) {
            innerHTMLString += '<td id=\"l';
            innerHTMLString += ligne;
            innerHTMLString += 'c';
            innerHTMLString += col;
            innerHTMLString += '\"></td>';
        }
        innerHTMLString += '</tr>';
    }
    innerHTMLString += '</table>';
    $('#maze-grid').html(innerHTMLString);
}


function removeWall(ligne, col, position) {
    let cell = '#l' + ligne + 'c' + col;
    switch (position) {
        case 0:
            $(cell).css("border-top-style", "hidden");
            break;
        case 1:
            $(cell).css("border-right-style", "hidden");
            break;
        case 2:
            $(cell).css("border-bottom-style", "hidden");
            break;
        case 3:
            $(cell).css("border-left-style", "hidden");
            break;
        default:
            break;
    }
}


function arrayDim(dim) {
    let cube = [];
    for (let i = 0; i < dim; i++) {
        cube.push([null, null, null]);
    }
    return cube;
}
