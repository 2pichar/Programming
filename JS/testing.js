const io = require("stdio");;
const obj = require("./obj");
async function main(args){
	var ans = await io.ask("What is your name?");
	console.log(ans);
}
main(obj.slice(process.argv, 2, obj.len(process.argv)));