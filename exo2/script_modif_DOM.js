function changetitle(){
	var t = document.querySelector("h1.jumbotron-heading");
	t.innerHTML='Ce que jai appris à THP';
	var s = document.getElementsByTagName("p");
  	s[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
 	console.log(s[0].textContent);	
  	console.log(t.textContent);	
}
 changetitle();

function changeCallToAction(){
 var a = document.getElementsByClassName("btn-primary ");
	a[0].innerHTML ="OK je veux tester !"; 
	a[0].setAttribute("href", "http://www.thehackingproject.org");
 var c = document.getElementsByClassName("btn-secondary");
 	c[0].textContent = "Non Merci";
 	c[0].setAttribute("href","https://www.pole-emploi.fr/accueil/");

 } 

 function changeLogName(){
 	var c = document.getElementsByTagName("strong");
 	    c[0].textContent = "the THP experiencies";
 	    c[0].style.fontSize="2em";
 }

function populatelImage(){
	let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
	var img = document.getElementsByTagName("img");
	for (i=0;i<img.length;i++){
		img[i].src = imagesArray[i];
	}
}

 populatelImage()

function deleteLastCards(){
	var img = document.getElementsByTagName("img");
	console.log(img.length);
	var k = img.length;
	for(let i=0;i <3;i++){
		  	img[img.length-1].remove(); 	
	}
}
deleteLastCards();

function changeCardsText(){
	c = document.querySelectorAll("p.card-text");
	card1 = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web","Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."]
	for(i=0;i<3;i++){
		c[i].textContent = card1[i];
	}
}
changeCardsText();

function changeViewButtons(){
	var b = document.getElementsByClassName("btn-outline-secondary");

	for(i=0;i<b.length;i++){
		if (b[i].textContent === "View"){
			// b[i].style.background = "#0ba500";
			// b[i].style.width ="50px";
			// b[i].style.textAlign = "center";
			// b[i].style.borderRadius ="52.5.px"
			// b[i].lineHeight = "80px";
			// b[i].display = "block";
			 b[i].setAttribute("class","btn-success");
		}
	}
}

changeViewButtons();


 // modif1 = document.querySelectorAll("div.col-md-4")[5].remove();
 modif2 = document.querySelectorAll("div.col-md-4")[6].remove();
 modif3 = document.querySelectorAll("div.col-md-4")[7].remove();
 modif4 = document.querySelectorAll("div.col-md-4")[document.querySelectorAll("div.col-md-4").length-1].remove();

///////////////////////////////////////////////////
 var a = document.createElement("div");
	a.setAttribute("class","row");
	/// mettr div àpres celui qui contient deja les cards actuelles
	 var divcar = document.querySelector("div.row"); 
	 var divcarpar = divcar.parentNode;


	 divcarpar.appendChild(a);
	 divcarpar.lastChild = divcar.childNodes[2];
	  divcar.childNodes[1].remove();
	console.log(divcar.childNodes[3].remove() );
	