const readlineSync = require('readline-sync');
const chalk = require('chalk');

var name = readlineSync.question(chalk.bold('Hey, What\'s your name? '));
console.log(`Welcome, ${name}!`);

console.log('');

console.log('Let\'s see how much do you know me! ');

console.log('');

let score = 0;

function askQuestion(ques, ans) {
	var userAns = readlineSync.question(chalk.bold(ques));

	if(userAns.toLowerCase() == ans) {
		console.log(chalk.bold.greenBright('Correct Answer :)'));
		score++;
	} else {
		console.log(chalk.bold.red('Incorrect Answer :('));
	}

	console.log(chalk.underline(`Score: ${score}`));
	console.log(" ");
}

var quesList = [
	{
		q: 'What is my name? ',
		a: 'himadri',
	},
		{
		q: 'Where do I live? ',
		a: 'rajkot',
	},
	{
		q: 'What is my birthdate? ',
		a: '21',
	},
	{
		q: 'Where was I born? ',
		a: 'mumbai',
	},
	{
		q: 'Which college do I study in? ',
		a: 'v.v.p. engineering college',
	},	
];

for(var i=0; i<quesList.length; i++) {
	askQuestion(quesList[i]["q"], quesList[i]["a"]);
}

console.log(chalk.italic.bold.bgBlue(`Result: You scored ${score} points!`));
