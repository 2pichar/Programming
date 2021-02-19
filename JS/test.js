const readline = require("readline");
const stdin = process.stdin;
const stdout = process.stdout;



Object.defineProperty(console, 'prompt', {
	value(prompt){
		
		var inp;
		rl.question(prompt, (ans)=>{inp = ans;});
		while(inp !== undefined){
			setTimeout(()=>{}, 500);
		}
		return inp;
	},
	writable: false,
	configurable: false,
	enumerable: true
});

var test = new file("../test.txt");
test.writeLine("hello");
console.log(test.read());