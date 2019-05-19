/*jslint devel: true */
    
var x = "",
    minVal = 2,
    maxVal = 10000,
    logo = {
        letterLeft: "*",
        letterRight: "*",
        spaceLeft: "-",
        spaceMiddle: "-",
        spaceRight: "-"
};

//*** multiplies input value by length of the string ;; want to use it for swapping symbols
function leftLetter(x) {
    var sth = x * logo.letterLeft.length;
    console.log(sth);
}

function firstRow(x) {
   console.log(logo.spaceLeft.repeat(x) + logo.letterLeft.repeat(x) + logo.spaceMiddle.repeat(x) + logo.letterRight.repeat(x) + logo.spaceRight.repeat(x));
}

function secondRow(x) {
    logo.letterLeft.replace(/-/, "*");
}

function oddNum(x) {
    if (x % 2 !== 0) {
        firstRow(x);
        var firstRow = firstRow.toString(firstRow);
        secondRow(x);
        return secondRow;
    }
}

function showLogo(x) {
    if (x > minVal && x < maxVal) {
        if (oddNum(x)) {
            return oddNum(x);
        }
    }
}




