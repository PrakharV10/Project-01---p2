// input 
var myVar = require('readline-sync');
var chalk = require('chalk');
var Username = myVar.question(chalk.red("Hi! What is your name?\n"));
console.log(chalk.cyanBright("Welcome " + Username + 
"\nTo the world, where magic flows like blood in your veins!!\nWhere miracles happen with the advent of every day and night!! \n" + "Welcome " + Username + " to PV's World!\n"));

var choice = myVar.question(chalk.red("Do you wish to experience this wonderful world with your own two eyes??\n")+ chalk.green("(Y/N)"));


// Score to keep a check
var score = 0; 



// Function to check Answer
function checkAnswer(question , answer){
  var userAnswer = myVar.question(chalk.cyanBright(question));
    if(userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log(chalk.green("Correct."));
    score ++;
    }

    else{
    console.log(chalk.red("Wrong."));
    console.log(chalk.white("Correct Answer = " + answer));
    }
    console.log(chalk.redBright("\n-------------------"));

}



// Question bank
var questionBank = [{
  question : "Which of the actors on Friends unfortunately decides to whiten his teeth\nbefore going out on a first date with a girl\nhe's had a crush on for some time?\n",
  answer : "Ross"
},
{
  question : "Who was Ross's second wife?\n",
  answer : "Emily"
},
{
  question : "Who is Gunther's roommate?\n",
  answer : "Jasmine"
},
{
  question : "Which friend admitted to having very small feet for an adult?\n",
  answer : "Joey"
},
{
  question : "Who puts the ball down when the gang are playing the throwing game?\n",
  answer : "Phoebe"
},
{
  question : "To whom did Rachel serve her last ever cup of coffee to as a waitress at Central Perk?\n",
  answer : "Chandler"
},
{
  question : "What family heirloom was sent to Phoebe by her birth mother?\n",
  answer : "Fur coat"
},
{
  question : "Who or what did Monica say broke her parents' porch swing?\n",
  answer : "Hurricane Gloria"
},
{
  question : "More ______ Mr. Chandler?\n",
  answer : "Turkey"
}]



// processing 
if(choice == "Y" || choice == "y"){
  console.log(chalk.red("\nYou need to answer these questions first!! "));
  for(var i = 0; i<questionBank.length; i++){
    current = questionBank[i];
    checkAnswer(current.question,current.answer);
  }
  console.log(chalk.yellowBright("Total = " + score + " out of " + questionBank.length));
}
console.log(chalk.redBright("\n-------------------"));



// LeaderBoard Score
const leaderBoard = [
  {
    name : "Kirito",
    score : "9"
  },
  {
    name : "Sneha",
    score : "8"
  },
  {
    name : "Eugeo",
    score : "6"
  },
  {
    name : "Mansi",
    score : "3"
  }
];
for(var a = 0 ; a<leaderBoard.length; a++){
  var curr = leaderBoard[a];
    console.log(curr.name + " = " + curr.score); 
}


// Processing for Rank
for(var b = 0; b<leaderBoard.length; b++){
  var curr1 = leaderBoard[b];
  if(score > curr1.score){
    var rank = b+1;
    break;
  }
  else
    var rank = leaderBoard.length;
}
console.log(chalk.green("You achived Rank No." + rank));
console.log(chalk.redBright("\n-------------------"));

//Lastly
if(score >= questionBank.length/2 ){
  console.log(chalk.yellow("\nCongratulations! You won yourself a chance to visit PV's World!" + "\nPlease Click a Screenshot and Share it to the owner\nand wait for further instructions.."));
}
else if(Username == "Qwerty" || Username == "qwerty"){
  console.log(chalk.blueBright("\nCongratulations! You successfully used The cheat code... Psst, Dont tell anyone.. ;p"));
}
else{
  console.log(chalk.redBright("\nBetter luck next time!"));
}
console.log(chalk.redBright("\n---------END----------"));