/**************reponse****************/
//1// elements <p> dans la page html
var par = document.getElementsByTagName("p");
n = par.length +1;
console.log("Le nombre de paragraphe p est: " +n); // =>60

//2// le contenue du texte de l'element portant l'id coucou//
var txt = document.getElementById("coucou");
console.log("texte :"+txt);

//3//  l'URL vers laquelle pointe le 3ème élément <a>
var ac = document.getElementsByTagName("a");
url = ac[2];
console.log(" URL de la 3eme élément " + url );

//4// Combien d'éléments portent la classe compte-moi
var cn = document.getElementsByClassName("compte-moi");
let nb = cn.length;
console.log("le nombre d'element que porte la class compte-moi est : " +nb );

//5// Combien d'éléments <li> portent la classe compte-moi
var nli = document.querySelectorAll("li.compte-moi"); 
console.log("nombre de li  dans la classe compte-moi :" + nli.length);

//6//Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ?
// let nlilo = document.querySelectorAll("li.compte-moi"); 
    nlilo = document.querySelectorAll("lo.compte-moi");

console.log("nombre de l000  dans lo ou  la classe est compte-moi :" + nlilo.length);

///7///Petit jeu de piste à résoudre s
var d = document.getElementsByTagName("div");
  
   // var s = p.getElementsByTagName("li");
// var div = document.getElementsByTagName("ul");

 console.log(d[0]);
