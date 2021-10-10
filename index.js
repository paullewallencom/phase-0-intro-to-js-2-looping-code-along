//

function countDown(c) {
    while (c >= 0) {
        console.log(c--);
    }
}

function writeCards(n, m) {
    let f = [];
    for (let i = 0; i < n.length; i++) {
        f.push("Thank you, " + n[i] + ", for the wonderful " + m + " gift!");
    }
    return f;
}