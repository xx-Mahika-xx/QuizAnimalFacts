var readLineSync = require("readline-sync");
var chalk = require("chalk")
var score = 0;

const questionAnswerSet = [
  {
    question: "How many legs does a butterfly have? \na)2\nb)4\nc)6\nd)8\n",
    answer: "c"
  },
  {
    question: "What is the longest snake in the world? \na)Black Mamba\nb)Reticulated Python\nc)Anaconda\nd)Rattle Snake\n",
    answer: "b"
  },
  {
    question: "What is the fastest bird?\na)Sparrow\nb)Swift\nc)Pigeon\nd)Leather Tail\n ",
    answer: "b"
  },
  {
    question: "What is the largest living bird? \na)Ostrich\nb)Emu\nc)Albatross\nd)Siberian Crane\n",
    answer: "a"
  },
  {
    question: "A rhino's horn is made of?\na)Bones\nb)Collagen\nc)Fibroin\nd)Kerotin\n",
    answer: "d"
  },
  {
    question: "Among the following animals, the figures of which are found in the state emblem of India? \na)Bull, deer and eagle\nb)Deer and elephant\nc)Horse and bull\nd)Elephant, tiger and bull\n",
    answer: "c"
  },
  {
    question: "What was the first clones sheeps name? \na)Dolly\nb)Polly\nc)Molly\nd)Rolly\n",
    answer: "a"
  },
  {
    question: "Which of the following is the National Aquatic Animal of India? \na)Sea water Crocodile\nb)Sea Turtle\nc)Dolphin\nd)Duoung\n",
    answer: "c"
  },
  {
    question: "In which of the following animals is respiration done by skin? \na)Flying Fish\nb)Sea Horse\nc)Chameleon\nd)Frog \n",
    answer: "d"
  },
  {
    question: "Which mammal lays eggs? \na)Platypus\nb)Bat\nc)Dolphin\nd)Whale\n",
    answer: "a"
  }
]
var highScores = [
  {
    name: "Anjali",
    score: 8
  },
  {
    name: "Sapan",
    score: 7
  },
  {
    name: "Anusha",
    score: 7
  }
]

const play = (username) => {
  for(i = 0 ; i<10; i++){
    var userAnswer = readLineSync.question(chalk.bold("Q"+(i+1)+"."+ (questionAnswerSet[i].question)+"\n\t"));
    if(userAnswer.toUpperCase() == questionAnswerSet[i].answer.toUpperCase()){
      console.log(chalk.green("\tYou are right!"));
      score++;
      console.log("\t"+username + "\'s Score is: " + chalk.bold(score));
    }
    else{
      console.log(chalk.red("\tYou are wrong!"));
      console.log("\t"+username + "\'s Score is: " + chalk.bold.underline(score));
    }
    console.log(" ");
  }
  console.log(chalk.bold("\nHigh Scores are as follows: "));
  var flag =0;
  for( k = 0; k< highScores.length;k++){
    if(score>= highScores[k].score && flag!=1){
      flag =1;
    console.log(chalk.bold(username+": "+chalk.underline(" "+score+" ")));
    }
    console.log(chalk.bold(highScores[k].name+": "+ chalk.bgHex('#FFA500')
            .underline(" "+highScores[k].score+" ")));
  }
  if(flag ===1){
    console.log(chalk.blue.underline("Congratulations! You have beaten a High Score."));
  }
  else{
    console.log(chalk.blue.underline("Oh no! You couldn't beat a High Score. Try again!"));
  }
}
const userName = readLineSync.question("Enter your user name: ");
play(userName);
