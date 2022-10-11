
var playerScore = 0;
var computerScore = 0;
alert("Bonjour et bienvenue sur le site de shifumi");
console.log(test);
test("2")

//Ask the user to have his name 
var userName = prompt("Veuillez entrer votre pseudo, puis validez");
while(userName.length < 2 || userName.length > 20) {
    var userName = prompt("Veuillez entrer votre pseudo entre 2 et 22 caracteres, puis validez")
};

function game(){
    while(playerScore < 3 && computerScore < 3){
        //ask the user to have his choice 
        var userChoice = prompt("Tu veux jouer " + userName + ", parfait moi aussi\npierre, feuille ou ciseaux ?").toLowerCase();
        while(userChoice != "pierre" && userChoice != "feuille" && userChoice != "ciseaux"){
            var userChoice = prompt("Veuillez rentrer une donnée valide (pierre, feuille ou ciseaux)")
        };

        //Create random number for the compunter
        var computerChoice = Math.random();

        //Create condition to assign random number to triple choice
        if(computerChoice <=0.33){
            computerChoice ="pierre";
        }
        else if(computerChoice <=0.66){
            computerChoice="feuille";
        }
        else{
            computerChoice="ciseaux";
        };

        // Create condition to watch who is winning
        if((computerChoice === "pierre" && userChoice === "ciseaux") || (computerChoice === "feuille" && userChoice === "pierre") || (computerChoice === "ciseaux" && userChoice === "feuille") ){
            var sentenceWin = "---Tu as perdu---";
            computerScore = computerScore +1; 
        }   
        else if((userChoice === "pierre" && computerChoice === "ciseaux") || (userChoice === "feuille" && computerChoice === "pierre") || (userChoice === "ciseaux" && computerChoice === "feuille")){
            var sentenceWin = "---C'est toi qui à gagné, bravo !---";
            playerScore = playerScore +1;
        }   
        else{
            var sentenceWin ="Match nul pour cette manche"
        };

        // Display the result
        alert("L'ordinateur fait " + computerChoice + "\ntu as fait " + userChoice + "\n\n" + sentenceWin + "\n\n" + "Tu as " + playerScore + " points" + "\n" + "L'ordinateur a " + computerScore + " points");

    };

    // // Display the final result of the game and ask for replay
    // if(computerScore === 3){
    //     var replay = prompt(" C'est l'ordinateur qui à gagné, tu veux rejouer ? ");}
    // else if(playerScore === 3){
    //     var replay = prompt(" C'est toi qui à gagné, tu veux rejouer ? ");
    // }    

    //Ask for  replay
    var replay = prompt("Voulez vous rejouer ? oui ou non").toLocaleLowerCase();
    while(replay != "oui" && replay != "non"){
        var replay = prompt("Voulez vous rejouer ? Veuillez repondre par 'oui' ou 'non'");
    }
    if(replay === "oui"){
        computerScore = 0;
        playerScore = 0;
        game();
    }
}

game();

