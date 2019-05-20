var logo = ["-", "*"],
    x = 0;


console.log(logo[0] + logo[1]);

function firstRow(x) {
    var row = console.log(logo[0].repeat(x) + logo[1].repeat(x) + logo[0].repeat(x) + logo[1].repeat(x) + logo[0].repeat(x));
}

function oddNum(x) {
    if (x % 2 !== 0) {
        firstRow(x);
    }
}