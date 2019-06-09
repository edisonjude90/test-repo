const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}


const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  (function(){setTimeout(function(x) {
    console.log('Index: ' + x + ', element: ' + arr[x]);
  }, 3000);})(i)
}


const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function(x) {
    console.log('Index: ' + x + ', element: ' + arr[x]);
  }(i), 3000);
}


const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log('Index: ' + i + ', element: ' + arr[i])
  }, 3000);
}

var arr = [];
for(var i = 0; i < 5; i++){
	arr[i] = function(x){

		return function(){
			return x;
		};

	}(i);
}



var arr = [];
for(let i = 0; i < 5; i++){
	arr[i] = function(){
			return i;
		};
}


















