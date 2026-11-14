/* declaratin de personnage */
let perso = document.getElementById("personne");
let btnRest = document.getElementById("btnReset");

/*position de depart*/
let posX = 50;
let posY = 50;
let vitesse = 20;  /* nombre de pixel par appui*/

/*fonction pour deplacer et pour eviter de sortir de l'ecran*/
function deplacer() {
    /* On récupère la vraie taille du cadre blanc et du perso */
    let jeu = document.getElementById("jeu"); /* il faut que cadre = "jeu"*/
    let limiteX = jeu.clientWidth - perso.clientWidth; /* largeur max = largeur jeu - largeur perso */
    let limiteY = jeu.clientHeight - perso.clientHeight; /* hauteur max pareil*/
    // Limite gauche/droite
    if (posX < 0) posX = 0;
    if (posX > limiteX) posX = limiteX; 
    // Limite haut/bas
    if (posY < 0) posY = 0;
    if (posY > limiteY) posY = limiteY; 
    perso.style.left = posX + "px";
    perso.style.top = posY + "px";
}
document.addEventListener("keydown", function(event) {
    /* event.key contient le nom de la touche :right ,left ,up , down */
    if (event.key === "ArrowRight") {
        posX = posX + vitesse; /* aller a droite */
    } else if (event.key === "ArrowLeft") {
        posX = posX - vitesse;  /* aller a gauche */
    } else if (event.key === "ArrowUp") {
        posY = posY - vitesse;/* monter : y diminue quant on monte */
    } else if (event.key === "ArrowDown") {
        posY = posY + vitesse;/* decendre */
    }
    /* Apres changer la position x et y ,on appele la fonction qui affiche*/
    deplacer();
});
/* Quand on clique sur le bouton Reset */
btnRest.addEventListener("click", function() {
    posX = 50;  /* on met X en depart */
    posY = 50;  /* on met Y en depart */
    deplacer(); /* on affiche la position depart */
});