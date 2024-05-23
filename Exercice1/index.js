export default pairNumbers;

function pairNumbers(minMb, maxNb) {
    let pairs = [];
    let pairNb = minMb * 2;
    for (pairNb; pairNb <= maxNb; pairNb += 2) {
        pairs.push(pairNb);
    }
    return pairs.join(",");
}

console.log(pairNumbers(1, 10));
