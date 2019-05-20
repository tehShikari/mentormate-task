var logo = ["-", "*"],
    x = 0,
    minVal = 2,
    maxVal = 10000;

console.log(logo[0] + logo[1]);

function firstRow(x) {
    var n = x;
    var row = logo[0].repeat(x) + logo[1].repeat(x) + logo[0].repeat(x) + logo[1].repeat(x) + logo[0].repeat(x);
    if (x % 2 !== 0 && x > minVal && x < maxVal) {
        var indexDash = logo.indexOf("-");
        var indexStar = logo.indexOf("*");
        console.log(indexDash);
        console.log(indexStar);
        console.log(row);
        function rowBuilder (row) {
            var nextRow = indexDash.repeat(x--);
            //doesnt work .. ?
            console.log(typeof(nextRow));
            return nextRow;
        }
    }
}

function showLogo(x) {
    if (x % 2 !== 0) {
        firstRow(x);
    }
}