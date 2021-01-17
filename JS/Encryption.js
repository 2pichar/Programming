var getIndex = function(al, l){
    var shift;
    var em;
    for(var j = 0; j < al.length; j++){
        if(l === al[j]){break;}
    }
    return j;    
};
var alph = {
    a: {
        f: ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\^_`]abcdefghijklmnopqrstuvwxyz{|}~',
        r: ' !"&\',-.0123456789:;?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    },
    R: '#$%()*+-/<=>@[\\^_`]{|}~',
    scramble: function(string){
			string = Array.from(string);
			var s = '';
			var rn;
			var a = '';
			var num = string.length;
			for(var i = 0; i < string.length; i++){
					rn = Math.round(Math.random() * 10) % num;
					a = string.splice(rn, 1);
					s += a;
			}
			return s;
		},
    choose: function(m){
        var al = this.a.r;
        for(var i in m){
            for(var j of this.R){
                if(m[i] === j){
                    al = this.a.f;
                    break;
                }
            }
            if(al === this.a.f){break;}
        }
        return al;
    }};

var ceasar = function(m, shift){
    var al = alph.choose(m);
    var shift = shift || 0;
    var em = ''; // string to hold encrypted message;
    for(var i in m){ // loop iterates through message 
        var j = getIndex(al, m[i]);
        var k = (j + shift)% al.length;
        var l = al[k];
        em += l;
    }
    return em;
};

var getShifts = function(key, a){
    a = a || alph.a.f;
    if(!key){return;}
    var shifts = [];
    for(var i = 0; i < key.length; i++){
        var index = getIndex(a, key[i]);
        var thisShift = (index - getIndex(a, ' '))% a.length;
        shifts.push(thisShift);
    }
    return shifts;
};
// check function
var viginere = function(m, key, scrmbl){
    var k = key.slice(1, key.length);
		var pl = key[0];
		key = '';
		for(var i of k){
				if(pl !== i){
					key += pl;
				}
				if(getIndex(k, i) === (k.length - 1)){
					if(pl !== i){
						key += i;
					}
				}
				pl = i;
		}
		var al = alph.choose(m);
		al = (scrmbl === true) ? alph.scramble(al) : al;
    var shifts = getShifts(key, al);
    var max;
    var em = '';
    if(shifts.length >= m.length){
        max = 1;
        var i = 1;
        for(var j = 0; j < shifts.length; j++){
            var b = i * j;
            var c = m[b];
            em += ceasar(c, shifts[j]);
        }
    } else if(shifts.length < m.length){
        max = 1;
        for(var j = 0, i = 1, k = 0; k < m.length; j++, k++, i++){
            j = j% shifts.length;
            var b = i * j;
            var c = m[b];
            em += ceasar(c, shifts[j]);
        }
        
    } else {
        max = Math.fround(m.length / shifts.length);
        if(max === m.length){
            max = m.length;
            for(var i = 0; i < max; i++){
                var c = m[i];
                em += ceasar(c, shifts[0]);
            }
        } else {
            for(var i = 0; i < max; i++){
                for(var j = 0; j < shifts.length; j++){
                    var b = (i * j);
                    var c = m[b];
                    em += ceasar(c, shifts[j]);
                }
            }
        }
    }
    return al + '\n' + em;
};

var b = viginere('i like fuzz', 'i like fuzz', true);
console.log(b);