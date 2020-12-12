var readlineSync=require('readline-sync')
var chalk=require('chalk');
var userName=readlineSync.question("Hi there!, What's your name?");

console.log(chalk.bold.bgCyan("Welcome "+userName+" to 'Who said this? Marvel Edition Quiz'. There are three levels in tis game - Basic, Intermediate, Advanced!"));
console.log(chalk.yellow("You will advance to subsequent levels if you acore more than three points or more."))
console.log(chalk.magenta("Let's Play!"));

var score=0;
console.log("Basic")
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
    question:'"I can do this all day "',
    answer:'Captain America'
  },
  {
    question:'"I am inevitable "',
    answer:'Thanos'
  },
  {
    question:'"I am Groot "',
    answer:'Groot'
  },
  {
    question:'"Avengers, assemble! "',
    answer:'Captain America'
  },
  {
    question:'"There is an Ant-Man and Spider-Man!?"',
    answer:'Bruce Banner'
  },
  {
    question:'"I have been falling, for thirty minutes! "',
    answer:'Loki'
  },
  {
    question:'"We have a Hulk "',
    answer:'Iron Man'
  },
  {
    question:'"He is a friend from work! "',
    answer:'Thor'
  },
  {
    question:'“I’ve Got Red In My Ledger. I’d Like To Wipe It Out.”',
    answer:'Black Widow'
  },
  {
    question:'"That is my secret, Captain. I am always angry. "',
    answer:'Bruce Banner'
  },
  {
    question:'"Somebody has got to look out for the little guy, right? "',
    answer:'Spider-Man'
  },
  {
    question:'"I cannot control their fear, only my own. "',
    answer:'Scarlet Witch'
  },
  {
    question:'“At Some Point We All Have To Choose Between What The World Wants You To Be And Who You Are. ” ',
    answer:'Black Widow'
  },
  {
    question:'"In times of crisis, the wise build bridges, while the foolish build barriers. We must find a way to look after one another as if we were one single tribe. "',
    answer:"T'Challa"
  }
]

for(var i=0;i<4;i++){
  var current=quizQuestions[i];
  quiz(current.question, current.answer);
}
if(score>=3){
  console.log(chalk.bgMagenta("You made it to the intermediate level!"))
  console.log(chalk.yellow('___________________________'));
  for(var i=4;i<9;i++){
    var current=quizQuestions[i];
    quiz(current.question, current.answer);
  }
}
if(score>=6){
  console.log(chalk.bgMagenta("You made it to the advanced level!"))
  console.log(chalk.yellow('___________________________'));
  for(var i=10;i<quizQuestions.length;i++){
    var current=quizQuestions[i];
    quiz(current.question, current.answer);
  }
}
var highscore = [{
  name: "Aparna",
  score: 13},
{ name: "Adhya",
  score: 10 },
{ name: "Aisiri",
  score: 10 }]


console.log('*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*');
if(score==14){
  console.log(chalk.bgCyan("Congratulations! You final score is 14. You are a true Marvel fan!"))
}
else{
  console.log(chalk.bgCyan("Your final score is "+score+" !"));
}
console.log("Highest Score:")
console.log(highscore[0].name, highscore[0].score)
