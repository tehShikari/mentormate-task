var logo = ["-", "*"],
    x = 0,
    minVal = 2,
    maxVal = 10000;

console.log(logo[0] + logo[1]);

function firstRow(x) {
    var x = x;
    var row = logo[0].repeat(x) + logo[1].repeat(x) + logo[0].repeat(x) + logo[1].repeat(x) + logo[0].repeat(x);
    if (x % 2 !== 0 && x > minVal && x < maxVal) {
        var indexDash = logo.indexOf("-");
        var indexStar = logo.indexOf("*");
        function rowBuilder (logo) {
            var nextRow = indexDash.repeat(x--);
            //doesnt work .. ?
            console.log(typeof(nextRow));
            return nextRow;
        }
    }
}

function oddNum(x) {
    if (x % 2 !== 0) {
        firstRow(x);
    }
}