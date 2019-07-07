var PartiGagner = false;
var balance = true;
var tabJeux = ['case1', 'case2', 'case3', 'case4', 'case5', 'case6', 'case7', 'case8', 'case9', ];
var PartieDeJeux = [
    ['case1', 'case2', 'case3'],
    ['case4', 'case5', 'case6'],
    ['case7', 'case8', 'case9'],
];
NbPartie = 8;
var verif = [
    [0, 0, 1, 2],
    [1, 0, 1, 2],
    [2, 0, 1, 2],
    [0, 0, 1, 0, 2, 0],
    [0, 1, 1, 1, 2, 1],
    [0, 2, 1, 2, 2, 2],
    [0, 2, 1, 1, 2, 0],
    [0, 0, 1, 1, 2, 2],
]


function verification(verif, PartieDeJeux) {

    //La boucle parcour le tableau des possibilitées de victoire

    for (i = 0; i < 8; i++) {

        //on verif la taille du tableau recuperer 

        var TailleTableau = verif[i].length;



        if (TailleTableau == 4) {

            //verif les differentes position du tableau Partiedejeux pour voir si il y une egalité avec les information de position inscrif dans le tableau verif

            if ((PartieDeJeux[verif[i][0]][verif[i][1]] == "o") && (PartieDeJeux[verif[i][0]][verif[
                        i][2]] ==
                    "o") && (PartieDeJeux[verif[i][0]][verif[i][3]] == "o")) {



                document.getElementById("gagnant").innerHTML = "joueur1 à gagner !";
                document.getElementById("gagnant").style.visibility = "visible";
                PartiGagner = true;

                return "gagner";





            } else if ((PartieDeJeux[verif[i][0]][verif[i][1]] == "x") && (PartieDeJeux[verif[i][0]]
                    [verif[
                        i][2]] ==
                    "x") && (PartieDeJeux[verif[i][0]][verif[i][3]] == "x")) {

                document.getElementById("gagnant").innerHTML = "joueur2 à gagner !";
                document.getElementById("gagnant").style.visibility = "visible";
                PartiGagner = true;

                return "gagner";



            }





        } else {

            //verif les differentes position du tableau Partiedejeux pour voir si il y une egalité avec les information de position inscrif dans le tableau verif

            if ((PartieDeJeux[verif[i][0]][verif[i][1]] == "o") && (PartieDeJeux[verif[i][2]][verif[i][3]] ==
                    "o") && (PartieDeJeux[verif[i][4]][verif[i][5]] == "o")) {

                document.getElementById("gagnant").innerHTML = "joueur1 à gagner !";
                document.getElementById("gagnant").style.visibility = "visible";;
                PartiGagner = true;

                return "gagner";



            } else if ((PartieDeJeux[verif[i][0]][verif[i][1]] == "x") && (PartieDeJeux[verif[i][2]][verif[
                    i][3]] == "x") && (PartieDeJeux[verif[i][4]][verif[i][5]] == "x")) {



                document.getElementById("gagnant").innerHTML = "joueur2 à gagner !";
                document.getElementById("gagnant").style.visibility = "visible";
                PartiGagner = true;

                return "gagner";

            }





        }



    }
}





function remplirtableau(NumCase, cercle, croix) {

    //c'est partie va permettre a une case d'être changer une seule fois

    CaseExiste = false;

    for (i = 0; i < tabJeux.length; i++) {

        if (tabJeux[i] == NumCase) {
            CaseExiste = true;
            tabJeux[i] = 0;
        }

    }

    //caseExiste sera a true si la case choisie n'a pas été encore changer

    if (balance && CaseExiste) {

        document.getElementById(cercle).style.display = "block";
        document.getElementById(croix).style.display = "none";

        for (var i = 0; i < PartieDeJeux.length; i++) {



            for (var j = 0; j < PartieDeJeux[i].length; j++) {

                if (PartieDeJeux[i][j] == NumCase) {

                    PartieDeJeux[i][j] = "o";
                }


            }


        }

        console.log(PartieDeJeux);





        balance = false;
        NbPartie--;


    } else if (!balance && CaseExiste) {

        document.getElementById(cercle).style.display = "none";
        document.getElementById(croix).style.display = "block";

        for (var i = 0; i < PartieDeJeux.length; i++) {



            for (var j = 0; j < PartieDeJeux[i].length; j++) {

                if (PartieDeJeux[i][j] == NumCase) {

                    PartieDeJeux[i][j] = "x";
                }
                


            }


        }

        console.log(PartieDeJeux);

        balance = true;
        NbPartie--;


    }




}

function init() {


    tabJeux = ['case1', 'case2', 'case3', 'case4', 'case5', 'case6', 'case7', 'case8', 'case9', ];
    PartieDeJeux = [
        ['case1', 'case2', 'case3'],
        ['case4', 'case5', 'case6'],
        ['case7', 'case8', 'case9'],
    ];



}


function game(NumCase, cercle, croix) {

    if (NbPartie > 0) {

        

     

        remplirtableau(NumCase, cercle, croix);
        var gagne = verification(verif, PartieDeJeux);
        if (gagne == "gagner") {

            init();



        }

    } else if (NbPartie == 0 && !PartiGagner ) {

        document.getElementById("gagnant").innerHTML = "PERDU !";
        document.getElementById("gagnant").style.visibility = "visible";


    }



}

// o x o
// o x x
// x o o