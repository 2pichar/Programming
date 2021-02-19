// Assorted Types
const len = function(obj){
	return obj.length;
}
// Array
const slice = function(arr, start, end){
	return arr.slice(start, end);
}
const splice = function(arr, start, count, ...items){
	return arr.splice(start, count, items);
}
exports.len = len;
exports.slice = slice;
exports.splice = splice;