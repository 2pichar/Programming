var mod = function(factor,power,modulus){
    var result = 1;
    while(power > 0){
        if (power % 2 === 1){
            result = (result*factor) % modulus;
            power = power-1;
        }
    power = power/2;
    factor = (factor*factor)%modulus;
    }
    return result;
};
var gcd = function(x, y){
    while (y !== 0) {
        var z = x % y;
		x = y;
		y = z;
	}
	return x;
};

var prime = function(inputNum){
    var numTrials = 20;
		for (var trial = 0; trial < numTrials; trial++){
        var randTest = Math.floor((Math.random()*(inputNum-2)))+2;
        if (gcd(randTest,inputNum) !== 1){
        return false;
        }
       if (mod(randTest,inputNum-1,inputNum)!== 1){
        return false;
        }   
    }
    return true;
 };
var Factor = {
	smallest: function(n){
		for(var i = 2; i <= Math.sqrt(n); i++){
			if(n % i === 0){
				return i;
			}
		}
	},
	prime: function(n){
		if(n === 1){
			return n;
		} else if(n === 2){
			return [n, 1].sort((a, b)=>a-b);
		} else if(prime(n)){
			return [n, 1].sort((a, b)=>a-b);
		} else if(Array.isArray(n)){
			return n;
		}
		var i = Factor.smallest(n);
		var ni = Factor.prime(n/i);
		var factors = [i, ni];
		factors = factors.flat(Infinity);
		return factors.sort((a, b)=>a-b);
	}
};
var gcf = function(x, y){
	var fx = Factor.prime(x).reverse();
	var fy = Factor.prime(y);
	for(var i in fx){
		if(fy.includes(i)){
			return i;
		}
	}
}
console.log(gcf(100, 36));