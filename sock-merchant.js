// https://www.hackerrank.com/challenges/sock-merchant/problem
function sockMerchant(n, ar) {
    let log = {};
    let pairs = 0;
    for (let number of ar) {
        log[number] = log[number] ? log[number] + 1 : 1;
        if (log[number] % 2 === 0) {
            pairs ++;
        }
    }
    return pairs;
}