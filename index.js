const readlineSync = require('readline-sync');
const chalk = require('chalk');

let name = readlineSync.question(chalk.yellow('Hey, What\'s your name? '));

while(name.length === 0) {
	name = readlineSync.question(chalk.yellow('Hey, What\'s your name? '));
}

console.log(chalk.yellow(`Welcome, ${name}! \n`));
console.log(chalk.yellow('Let\'s see how much do you know me! \n'));

let score = 0;

function askQuestion(ques, ans) {
	let userAns = readlineSync.question(chalk.bold(ques));

	while(userAns.length === 0) {
		userAns = readlineSync.question(chalk.bold(ques));
	}

	if(userAns.toLowerCase() == ans.toLowerCase()) {
		console.log(chalk.bold.greenBright('Correct Answer :)'));
		score++;
	} else {
		console.log(chalk.bold.red('Incorrect Answer :('));
		console.log(chalk.bold.greenBright(`The correct answer is ${ans}.`));}

	console.log(chalk.underline(`Score: ${score} \n`));
}

var quesList = [
	{
		q: 'What is my full name? ',
		a: 'Himadri Shah',
	},
	{
		q: 'What is my age? ',
		a: '21',
	},
	{
		q: 'Which city do I live in? ',
		a: 'Rajkot',
	},
	{
		q: 'What is my birthdate? ',
		a: '21',
	},
	{
		q: 'What is my sun sign? ',
		a: 'Libra',
	},
	{
		q: 'Which college do I study in? ',
		a: 'V.V.P. Engineering College',
	},	
];

for(var i=0; i<quesList.length; i++) {
	askQuestion(quesList[i]["q"], quesList[i]["a"]);
}

console.log(chalk.italic.bold.bgBlue(`Result: You scored ${score} points!`));
