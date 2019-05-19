/*jslint devel: true */


//***the code should generate as many stars as the given number is + 2 on the bottom row + 2 on the bottom row
//and - 2 hyphens on the next row from one part of the MM. When the 2 sets of stars collide, the next row must go backwards
//-> the stars go in the middle and they decrement -2, while hyphens go up +2, until the stars reach the beginning of the row
//and stars and hyphens are the same number as initially given x

//***it should be like: make 3 originally + new row with 2 more stars, although it should be 
//calculated with the precise algorithm that displays the stars that overlap each other correctly.

//***the length of the logo is N*10
//where N is the number of stars in the 1st and last row, 1st and last rows are
//simply turned around.

//***the stars on the top row are as many as the hyphens. On every row, the hyphens decrement -1, until 
//there are 0 hyphens on the 1st part of the bottom row -> until they are turned around.

//***the stars divide themselves when they are about to collide and the next row has the same number of stars
//in the middle as the previos row had 2 sets of the same number of stars, while on the 2 sides we get the initial
//number of stars, until they reach the end of the line and they have completely turned around(the stars and the hyphens). On the last
//row, the numbers of stars are equal to themselves and to the number of hyphens.

//***on the 1st row we have     5- 5* 5- 5* 10- 5* 5- 5* 5-
//on the last row we have       5* 5- 5* 5- 10* 5- 5* 5- 5*

//***should use if(row.startsWith('*')) for the last line -> so when on a new line the 1st symbol is *, it stops.

//*** trying out pseudocode:

//if x is odd && higher than minVal && lower than maxVal
//    create a line of logo{} (each * x * 5) * 2
//    create additional lines where logo.letter increments +1 on each side 
//    while logo.space decrements by 1 on each side
//    the rows' length is x + 1

//***1st row  hyphens = 1st row stars;; 2nd row hyphens = x - 1 and stars = x + 2
//every time until row.startsWith(logo.star) && row.endsWith(logo.star)
// ^ this is for the left and right side of 'M'. while for the inner side:
//they have to collide and mix, making a bigger amount of stars, yet the same amount
//which is given is coming from every side -> \/ but also mixed like X
//Yet, the 'X' is not complete, the bottom ends of it are missing a * each

//*** while the number of rows is === to x, continue;
//when the number of rows > x, return rows;


//*** take x * logo.letterLeft 






//*** make an object holding all the functions




//function isEven(value) {
//    if (value%2 == 0)
//        return false;
//    else
//        return true;
//}


    

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

//function valBetweenAlt(v, min, max) {
//    if (val > min) {
//        if (val < max) {
//            return val;
//        } else return max;
//    } else return min;
//}

//function spaceBuilder(x) {
//    return logo.space.repeat(x);
//}


//for (n=2; n<10000; n++) {
//    if(n%2!=0) {
//        console.log("---***---***------***---***---");
//        console.log("--*****-*****----*****-*****--");
//        console.log("-***-*****-***--***-*****-***-");
//        console.log("***---***---******---***---***");
//    }
//}



//var str = 'Twas the night before Xmas...';
//var newstr = str.replace(/before/i, 'Christmas');
//console.log(newstr);  // Twas the night before Christmas...





//for (var i=0; i<5; i++) {
//  console.log("Hello, %s. You've called me %d times.", "Bob", i+1);
//}

//the output is:

//[13:14:13.481] Hello, Bob. You've called me 1 times.
//[13:14:13.483] Hello, Bob. You've called me 2 times.
//[13:14:13.485] Hello, Bob. You've called me 3 times.
//[13:14:13.487] Hello, Bob. You've called me 4 times.
//[13:14:13.488] Hello, Bob. You've called me 5 times.





