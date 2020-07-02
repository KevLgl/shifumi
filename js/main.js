alert("Bonjour et bienvenue");
//Ask the user for have his name 
var userName = prompt("Veuillez entrer votre pseudo, puis validez");
//aske the user for have his choice
var userChoice = prompt("Tu veux jouer " + userName + ", parfait moi aussi \n pierre, feuille ou ciseaux ?")

//Create random number for the compunter
var computerChoise =  Math.random();
//Create condition for assign random number to triple choice
if(computerChoise <=0.33){
    computerChoise ="pierre";
}
else if(computerChoise <=0.66){
    computerChoise="feuille";
}
else{
    computerChoise="ciseaux";
};

// Create condition for watch who is winning
if(computerChoise === "pierre" && userChoice === "ciseaux"){
     whoWin ="ordinateur";
}
else if(computerChoise === "feuille" && userChoice === "pierre"){
     whoWin ="ordinateur";
}
else if(computerChoise === "ciseaux" && userChoice === "feuille"){
     whoWin = "ordinateur"
}
else if(userChoice === "pierre" && computerChoise === "ciseaux"){
     whoWin = "humain"
}
else if(userChoice === "feuille" && computerChoise === "pierre"){
     whoWin = "humain"
}
else if(userChoice === "ciseaux" && computerChoise === "feuille"){
     whoWin = "humain"
}
else if(userChoice === computerChoise){
     whoWin ="nul"
}
else{
    prompt("Merci de rentrer une valeur correcte (pierre, feuille ou ciseaux")
};

// Create variable for counter 
if(whoWin === "ordinateur"){
    var sentenceWin = "C'est l'ordinateur qui à gagné"
}
else if(whoWin === "humain"){
    sentenceWin = "C'est toi qui à gagné, bravo !"
}
else if(whoWin === "nul"){
    sentenceWin ="Match nul pour cette manche"
}
else{
    sentenceWin ="Merci de rentrer une valeur correcte (pierre, feuille ou ciseaux"
}



var result = alert("L'ordinateur fait " + computerChoise + "\n tu as fait " + userChoice +"\n\n" + sentenceWin)




