var logo = ["-", "*"],
    x = 0;

console.log(logo[0] + logo[1]);

function firstRow(x) {
    var x = x;
    var row = logo[0].repeat(x) + logo[1].repeat(x) + logo[0].repeat(x) + logo[1].repeat(x) + logo[0].repeat(x);
    if (x % 2 !== 0) {
        var indexDash = logo.indexOf("-");
        var indexStar = logo.indexOf("*");
        console.log(indexDash);
        console.log(indexStar);
        console.log(x);
    }
}

function oddNum(x) {
    if (x % 2 !== 0) {
        firstRow(x);
    }
}