/*jslint devel: true */


//***the code should generate as many stars as the number is + 2 on the bottom row + 2 on the bottom row
//and - 2 hyphens on the next row from one part of the MM.

//***it should be like: make 3 originally + new row with 2 more stars, although it should be 
//calculated with the precise algorithm that displays the stars that overlap each other correctly.

//***the length of the logo is N*10
//where N is the number of stars in the 1st and last row, 1st and last rows are
//simply turned around.

//***the stars on the top row are as many asthe hyphens. On every row, the hyphens decremete with 1, until 
//there are 0 hyphens on the 1st part of the bottom row -> until they are turned around.

//***the stars divide themselves when they are about to collide and the next row has the same number of stars
//in the middle as the previos row had 2 sets of the same number, while on the 2 sides we get the initial
//number of stars, until they reach the end of the line and they have completely turned around. On the last
//row, the numbers of stars are equal to themselves and to the number of hyphens.

//***on the 1st row we have 5- 5* 5- 5* 10- 5* 5- 5* 5-
//on the last row we have 5* 5- 5* 5- 10* 5- 5* 5- 5*





//function isEven(value) {
//    if (value%2 == 0)
//        return false;
//    else
//        return true;
//}


var logo = {
    letter: "*",
    space: "-"
};

var minVal = 2;
var maxVal = 10000;

function letterBuilder(x) {
    var firstRow = console.log(logo.space.repeat(x) + logo.letter.repeat(x) + logo.space.repeat(x) + logo.letter.repeat(x) + logo.space.repeat(x) + logo.space.repeat(x) + logo.letter.repeat(x) + logo.space.repeat(x) + logo.letter.repeat(x) + logo.space.repeat(x));
}

function spaceBuilder(x) {
    return logo.space.repeat(x);
}

function oddNum(x) {
    if (x % 2 !== 0) {
        return letterBuilder(x);
    }
}

function logoBuilder(x) {
    return logo.space.repeat(x);
    return logo.letter.repeat(x);
}

function showLogo(x) {
    if (x > minVal && x < maxVal) {
        if (oddNum(x)) {
            return logoBuilder(x);
        }
    }
}

//function valBetweenAlt(v, min, max) {
//    if (val > min) {
//        if (val < max) {
//            return val;
//        } else return max;
//    } else return min;
//}




//for (n=2; n<10000; n++) {
//    if(n%2!=0) {
//        console.log("---***---***------***---***---");
//        console.log("--*****-*****----*****-*****--");
//        console.log("-***-*****-***--***-*****-***-");
//        console.log("***---***---******---***---***");
//    }
//}













