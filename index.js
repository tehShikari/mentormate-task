/*jslint devel: true */
    
//console.log(String.fromCharCode(42).repeat(3));

var x = 0,
    minVal = 2,
    maxVal = 10000,
    logo = {
        letter: "",
        letterLeft: String.fromCharCode(42).repeat(x),
        letterRight: String.fromCharCode(42).repeat(x),
        spaceLeft: String.fromCharCode(45).repeat(x),
        spaceMiddle: String.fromCharCode(45).repeat(x),
        spaceRight: String.fromCharCode(45).repeat(x),
        firstRow: function(x) {
            var stringRow = this.letter.toString(this.spaceLeft + this.letterLeft + this.spaceMiddle + this.letterRight + this.spaceRight);
            return this.stringRow;
        }
    };

//*** multiplies input value by length of the string ;; want to use it for swapping symbols
//function leftLetter(x) {
//    var sth = x * logo.letterLeft.length;
//    console.log(sth);
//}


console.log(logo.firstRow(5));

function secondRow(x) {
    logo.letterLeft.replace(/-/, "*");
}

function oddNum(x) {
    if (x % 2 !== 0) {
        logo.firstRow(x);
    }
}

function showLogo(x) {
    if (x > minVal && x < maxVal) {
        if (oddNum(x)) {
            return oddNum(x);
        }
    }
}




