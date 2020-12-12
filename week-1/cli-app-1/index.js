var readlineSync=require('readline-sync')
var chalk=require('chalk');
var userName=readlineSync.question("Hi there!, What's your name?");

console.log(chalk.bold.bgCyan("Welcome "+userName+" to 'How well do you know me?'."));
console.log(chalk.magenta("Let's Play!"));

var score=0;
function quiz(question,answer){
  var userResponse=readlineSync.question(question);
  if(userResponse==answer){
    score++;
    console.log(chalk.green("That is correct!"));
    console.log("Your current score is ",score);
  }
  else{
    console.log(chalk.red("That is incorrect. The correct answer is ",answer));
  }
}
var quizQuestions=[
  {
    question:'"Where do I live?"',
    answer:'Bangalore'
  },
  {
    question:'"What do I major in at University?"',
    answer:'Electronics and communication Engineering'
  },
  {
    question:'"Do I have a pet?"',
    answer:'Yes'
  },
  {
    question:'"What pet do I have?"',
    answer:'Cat'
  }
]
var highscore = [{
  name: "Aparna",
  score: 3},
{ name: "Adhya",
  score: 1 },
{ name: "Aisiri",
  score: 1 }]

for(var i=0;i<4;i++){
  var current=quizQuestions[i];
  quiz(current.question, current.answer);
}

console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');

  console.log(chalk.bgCyan("Your final score is "+score+" !"));
  console.log("Highest Score:");
  console.log(highscore[0].name, highscore[0].score)

