var log = ((...args) => {console.log(args + '');});

var Pow = (b, e) => {
	var p = 1;
	for(var i = 0; i < e; i++){
		p *= b;
	}
	return p;
};

var calcSquare = (base => {
  var n = 2;
	if(base === n){
		n = 1;
	}
	var x = base - n;
	if(base === 1 || base === 0){
	    return base;
	} else {
	    return(calcSquare(n) + x * (2*n + x));
	}
});

var AddAllNums = function(start = 0, end){
		var total = 0;
    for(var i = start; i <= end; i++){
        total += i;
    }
    return total;
};

/*var addAllNums = ((start, end) => {
	var total = 0;
  for(var i = start; i <= end; i++){
      total += i;
  }
	return total;
});*/

var max = (...args) => {
	let m = args[0];
	for(let i = 1; i < args.length; i++){
		m = args[i] > m ? args[i] : m;
	}
	return m;
};

var fromHex = (hex => +(`0x${hex}`));
var toHex = num => {
	var hex = '0123456789ABCDEF';
	var h = '';
	var hl = Math.floor(Math.log(num) / Math.log(15)) + 1;
	var cn = num;
	for(var i = 0; i < hl; i++){
			h += hex[(cn % 16)];
			log(hex[cn % 16]);
			cn = Math.floor(cn / 16);
	}
	var H = [];
	for(i of h){
		H.push(i);
	}
	H.reverse();
	h = H.join('');
	return h;
};

var fibonacc = ((m = 100, p = false) => {
	var i = 1;
    var j = 0;
    var nums = [];
    for(var x = 0; x < m; x++){
        j += i;
        i = j - i;
        nums.push(j);
    }
    if(p === true){
        log(nums);
    }
		return nums;
});

var addAllarr = ((arr, a = 0) => arr.reduce((a, cv) => a + cv, a));
/*log(addAllarr(fibonacc(100, false)));
for(var i = 0; i < 4; i++){
	for(var j = 0; j < 8; j++){
		for(var h = 0; h < 8; h++){
			log(+(`${i}${j}${h}`));
		}
	}
}*/

/*
var a = p => p;
*/var b = p => Promise.resolve(p);
var c = async p => p;

var P = Promise.resolve(3);
P.then(function(val){
	console.log(val + 3);
});
var usePromisedVal = function(v, f){
	if(typeof(f) !== 'function'){throw new TypeError('Parameter "f" is required to be of type "function"');
	} else {
		f(v);
	}
}
var a = Promise.resolve(10);

var obj = {b: 'c'};
var ob = {a: 'b', ...obj, c: 'd'};
console.log(Object.entries(ob));
var o = Object.create(null);
o.a = 'b';
o.b = 'c';
o.c = 'd';
console.log(o)