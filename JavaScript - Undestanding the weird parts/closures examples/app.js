function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        // if you use "let" instead of "var" on i = 0, you get 0, 1, 2
        
        // Other way to solve the problem is saving the calue of "i" in a new let variable

        //  let j = i;

        arr.push(
            function() {
                console.log(i);
            }
        )
    }
    return arr;
}
var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

//--------------------------------------------
function buildFunctions2() {
    var arr = [];
    for (var i = 0; i < 3; i++) {   
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }
    return arr;
}
var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();