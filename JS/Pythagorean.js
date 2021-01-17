var rtd = r => r / (Math.PI / 180);
var dtr = d => d * (Math.PI / 180);
var pythagorean = (a, b) => {
	bma = b**2 - a**2;
	ab = 2*b*a;
	apb = b**2 + a**2;
	return {
	sides: [
		bma,
		ab,
		apb
	],
	angles: [
		rtd(Math.asin(bma/apb)),
		rtd(Math.asin((ab / apb))),
		90]
	};
};


var polar = function(cartesian){
	var x = cartesian[0], y = cartesian[1];
	var pcoords = [];
	pcoords[1] = Math.sqrt(Math.pow(x, 2) + Math.pow(y, y));
	pcoords[0] = Math.round(rtd(Math.asin(y / pcoords[1])));
	return pcoords;
}

var cartesian = function(polar){
	var theta = polar[0];
	var r = polar[1];
	var y = (Math.sin(dtr(theta))) * r;
	var x = Math.sqrt(r * r - y * y);
	return[x, y];
}
console.log(pythagorean(2,3));