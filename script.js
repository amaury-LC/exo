 /**

        initiation variable joueur et balance est initialise a 0;

        **/

 //  var joueur1 = prompt('Inscrivez votre nom joueur1');
 //  var joueur2 = prompt('Inscrivez votre nom joueur2');

 
 function ajouter(PartieDeJeux,balance,) {

    Position = [0, 0, 0, 1, 0, 2, 1, 0, 1, 1, 1, 2, 2, 0, 2, 1, 2, 2];

    PositionL = 0;
    PositionC = 1;

    while (true) {

        //  var joueur = prompt(PartieDeJeux[Position[PositionL]][Position[PositionC]] + " a toi de jouer");
        if(balance){

            joueur = "rond";
        }
        else{

            joueur = "croix";
        }

        if ((joueur == "rond" || joueur == "croix")) {

            PartieDeJeux[Position[PositionL]][Position[PositionC]] = joueur;
            return PartieDeJeux;




        } else if (joueur != "rond" || joueur != "croix") {

            if (PositionL <= 16 && PositionC <= 16) {

                PositionL += 2;
                PositionC += 2;
            } else {

                PositionL = 0;
                PositionC = 1;


            }

        }


    }

}


function verification(verif, PartieDeJeux) {

    //La boucle parcour le tableau des possibilitées de victoire

    for (i = 0; i < 8; i++) {

        //on verif la taille du tableau recuperer 

        var TailleTableau = verif[i].length;



        if (TailleTableau == 4) {

            //verif les differentes position du tableau Partiedejeux pour voir si il y une egalité avec les information de position inscrif dans le tableau verif

            if ((PartieDeJeux[verif[i][0]][verif[i][1]] == "rond") && (PartieDeJeux[verif[i][0]][verif[
                        i][2]] ==
                    "rond") && (PartieDeJeux[verif[i][0]][verif[i][3]] == "rond")) {

                alert('joueur1 à gagner !');

                return "gagner";




            } else if ((PartieDeJeux[verif[i][0]][verif[i][1]] == "croix") && (PartieDeJeux[verif[i][0]]
                    [verif[
                        i][2]] ==
                    "croix") && (PartieDeJeux[verif[i][0]][verif[i][3]] == "croix")) {

                alert('joueur2 à gagner !');

                return "gagner";



            }





        } else {

            //verif les differentes position du tableau Partiedejeux pour voir si il y une egalité avec les information de position inscrif dans le tableau verif

            if ((PartieDeJeux[verif[i][0]][verif[i][1]] == "rond") && (PartieDeJeux[verif[i][2]][verif[i][3]] ==
                    "rond") && (PartieDeJeux[verif[i][4]][verif[i][5]] == "rond")) {

                alert('joueur1 à gagner !');

                return "gagner";



            } else if ((PartieDeJeux[verif[i][0]][verif[i][1]] == "croix") && (PartieDeJeux[verif[i][2]][verif[
                    i][3]] == "croix") && (PartieDeJeux[verif[i][4]][verif[i][5]] == "croix")) {

                alert('joueur2 à gagner !');

                return "gagner";

            }





        }



    }
}

 var tabJeux = ['case1', 'case2', 'case3','case4', 'case5', 'case6','case7', 'case8', 'case9',
 ];

 var balance = false;

  //variable qui dit au programme si le jeux doit continuer , si valeur est true le jeux s'arrête
  var EtatJeux = false;
  NombreTours = 0;

  //tableau représentant le tableau de jeux
  var PartieDeJeux = [
      ['case1', 'case2', 'case3'],
      ['case4', 'case5', 'case6'],
      ['case7', 'case8', 'case9'],
  ];


  //verif chaque case commence le numero de la ligne et ensuite par les numero des cases pour les 3 premiere cases
  // ensuite c'est le numero de la ligne et de la case

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




 /**
       fonction de jeux qui ne prend rien en entrer
       @param {string} NumCase numero de la case
       @param {string} cercle  id du cercle
       @param {string} croix  id de la croix

      

       **/

 function game(NumCase, cercle, croix) {

     var sup = false;

     console.log(PartieDeJeux);

     //boucle qui parcour un tableau de case si une un case est reconnu il change son nom dans le tableau 
     //cela permet qu'un joueur qui a deja cliquer sur une case qu il ne puisse plus la modifier

     for (var i = 0; i < tabJeux.length; i++) {

         if (tabJeux[i] == NumCase) {

             tabJeux[i] = "case";
             sup = true
         } 

     }


     if (sup) {
         //permet d'interchanger l'apparition du cercle ou du carré en fonction du joueur qui a jouer

         if (balance) {

             document.getElementById(cercle).style.display = "block";
             document.getElementById(croix).style.display = "none";

             balance = false;

             var gagner = verification(verif, PartieDeJeux);


                if (gagner == "gagner") {

                    EtatJeux = true;


                    return
                }

                PartieDeJeux = ajouter(PartieDeJeux,balance);

         } else {

             document.getElementById(croix).style.display = "block";
             document.getElementById(cercle).style.display = "none";
             balance = true;
         }

     }
     else{

        return 
     }







 }