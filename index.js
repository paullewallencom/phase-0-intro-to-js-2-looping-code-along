//

function countDown(c) {
    for (let i = c; i >= 0; i--) {
        console.log(i);
    }
}

function writeCards(n, m) {
    let f = [];
    for (let i = 0; i < n.length; i++) {
        f.push("Thank you, " + n[i] + ", for the wonderful " + m + " gift!");
    }
    return f;
}