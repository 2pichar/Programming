const readline = require("readline");
const util = require('util');
const stdin = process.stdin;
const stdout = process.stdout;
/*const prompt = function(prmpt){
	const rl = readline.createInterface({
		input: stdin,
		output: stdout
	});
	var ret;
	rl.question(prmpt,(inp) => {
		rl.close();
		ret = inp;
	});
	while(ret !== undefined){
		setTimeout(()=>{}, 1000);
	}
	console.log(ret);
}*/

async function prompt(text, cll) {
	const rl = readline.createInterface({
		input: stdin,
		output: stdout
	});
	const question = util.promisify(rl.question).bind(rl);
  try {
    const answer = await question(text);
		console.log(answer);
		return answer;
  } catch (err) {
  }
	rl.close();
}

exports.prompt = prompt;