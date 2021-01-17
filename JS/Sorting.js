var sort = {
	test(a, az = true){
		var temp;
		var half;
		if(a.length % 2 === 0){
			half = a.length / 2;
		} else{
			half = (a.length - 1) / 2;
		}
		var li = a.length - 1;
		if(az){
			for(var i = 0; i < half; i++){
				if(a[i] > a[li - i]){
					temp = a[i];
					a[i] = a[li - i];
					a[li - i] = temp;
				}
			}
			for(i = li; i > 0; i--){
				var current = a[i];
				for(var j = 0; j < i; j++){
					var other = a[j];
					if(other > current){
						temp = current;
						a[i] = other;
						current = a[i]
						a[j] = temp;
					}
				}
			}
		} else if(az = false){
			for(var i = 0; i < half; i++){
				if(a[i] < a[li - i]){
					temp = a[i];
					a[i] = a[li - i];
					a[li - i] = temp;
				}
			}
			for(i = li; i > 0; i--){
				var current = a[i];
				for(var j = 0; j < i; j++){
					var other = a[j];
					if(other < current){
						temp = current;
						a[i] = other;
						current = a[i];
						a[j] = temp;
					}
				}
			}
		} else throw new Error("Unexpected Value");
		return a;
	},
	merge(a, p, r){
		var merge = function(array, p, q, r) {
			var lh = [];
			var hh = [];
			var k = p;
			var i;
			var j;
			for (i = 0; k <= q; i++, k++) {
					lh[i] = array[k];
			}
			for (j = 0; k <= r; j++, k++) {
					hh[j] = array[k];
			}

			k = p;
			i = 0;
			j = 0;
			
			while(i < lh.length && j < hh.length){
					if(lh[i] < hh[j]){
							array[k] = lh[i];
							i++;
							k++;
					} else {
							array[k] = hh[j];
							j++;
							k++;
					}
			}
			while(i < lh.length){
					array[k] = lh[i];
					i++;
					k++;
			}
			while(j < hh.length){
					array[k] = hh[j];
					j++;
					k++;
			}
		}
		if(p !== r){
      var q = Math.floor((p + r) / 2);
      this.merge(a, p, q);
      this.merge(a, q + 1, r);
      merge(a, p, q, r);
    }
	}
};