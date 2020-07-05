
alert("Bonjour et bienvenue");
//Ask the user for have his name 
var userName = prompt("Veuillez entrer votre pseudo, puis validez")
//aske the user for have his choice
var userChoice = prompt("Tu veux jouer " + userName + ", parfait moi aussi \n pierre, feuille ou ciseaux ?").toLowerCase();
//Create random number for the compunter
var computerChoise = Math.random();
// Max length for userName

if(userChoice.length > 20){
     // ????????????????????????????????????
     };

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
if((computerChoise === "pierre" && userChoice === "ciseaux") || (computerChoise === "feuille" && userChoice === "pierre") || (computerChoise === "ciseaux" && userChoice === "feuille") ){
     var userWin = false
}
else if((userChoice === "pierre" && computerChoise === "ciseaux") || (userChoice === "feuille" && computerChoise === "pierre") || (userChoice === "ciseaux" && computerChoise === "feuille")){
     var userWin = true
}
else{
     var userDraw = true
};




// Create variable for counter 
if(userWin === true){
    var sentenceWin = "C'est toi qui à gagné, bravo !"
}
else if(!userWin){
    sentenceWin = "Tu as perdu"
}
else{
    sentenceWin ="Match nul pour cette manche"
}


// Display the result
var result = alert("L'ordinateur fait " + computerChoise + "\n tu as fait " + userChoice +"\n\n" + sentenceWin)





