// Array
const isArr = function(obj){
	return Array.isArray(obj);
}
const concat = function(arr, arr2){
	return arr.concat(arr2);
}
const copyWithin = function(arr, tar, start, end){
	return arr.copyWithin(tar, start, end);
}
const entries = function(arr){
	return arr.entries();
}
const every = function(arr, callback, thisArg){
	return arr.every(callback);
}
const fill = function(arr, val, start, end){
	return arr.fill(val, start, end);
}
const filter = function(arr, callback, thisArg){
	return arr.filter(callback, thisArg);
}
const find = function(arr, callback, thisArg){
	return arr.find(callback, thisArg);
}
const findIndex = function(arr, callback, thisArg){
	return arr.findIndex(callback, thisArg);
}
const flat = function(arr, depth){
	return arr.flat(depth);
}
const flatMap = function(arr, callback, thisArg){
	return arr.flatMap(callback, thisArg);
}
const forEach = function(arr, call, thisArg){
	arr.forEach(call, thisArg);
}
const includes = function(arr, obj){
	return arr.includes(obj);
}
const indexOf = function(arr, obj){
	return arr.indexOf(obj);
}
const join = function(arr, comb){
	return arr.join(comb);
}
const keys = function(arr){
	return arr.keys();
}
const lastIndexOf = function(arr, obj, fromInd){
	return arr.lastIndexOf(obj, fromInd);
}
const map = function(arr, call, thisArg);


const len = function(obj){
	if(typeof(obj) === "object") return Object.keys(obj).length;
	if(!hasProperty(obj)) throw Error("");
	return obj.length;
}
const slice = function(obj, start, end){
	return obj.slice(start, end);
}
const splice = function(obj, start, count, ...items){
	return obj.splice(start, count, items);
}
exports.len = len;
exports.slice = slice;
exports.splice = splice;