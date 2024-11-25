
var n = 2;
function square(num){
    var ans = num * num;
    return ans;
}

var square1 = square(n); // function envoke - creation of brand new EXC.
var square2 = square(4);
var square3 = square(8);

console.log(square1);
console.log(square2);
console.log(square3);

// Output (Debug and Run) -> 
// 4
// 16
// 64 