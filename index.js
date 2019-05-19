/*jslint devel: true */
    
//console.log(String.fromCharCode(42).repeat(3));

var x = "",
    letter = "",
    space = "",
    minVal = 2,
    maxVal = 10000,
    logo = {
        letterLeft: String.fromCharCode(42).repeat(x),
        letterRight: String.fromCharCode(42).repeat(x),
        spaceLeft: String.fromCharCode(45).repeat(x),
        spaceMiddle: String.fromCharCode(45).repeat(x),
        spaceRight: String.fromCharCode(45).repeat(x),
        firstRow: function() {
            return this.spaceLeft + this.letterLeft + this.spaceMiddle + this.letterRight + this.spaceRight;
        }
};

//*** multiplies input value by length of the string ;; want to use it for swapping symbols
//function leftLetter(x) {
//    var sth = x * logo.letterLeft.length;
//    console.log(sth);
//}

//function firstRow(x) {
//   alert( logo.spaceLeft + logo.letterLeft + logo.spaceMiddle + logo.letterRight + logo.spaceRight);
//}

function secondRow(x) {
    logo.letterLeft.replace(/-/, "*");
}

function oddNum(x) {
    if (x % 2 !== 0) {
        firstRow(x);
    }
}

function showLogo(x) {
    if (x > minVal && x < maxVal) {
        if (oddNum(x)) {
            return oddNum(x);
        }
    }
}




