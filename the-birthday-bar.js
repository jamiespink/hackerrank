// https://www.hackerrank.com/challenges/the-birthday-bar/problem
function birthday(s, d, m) {
    let segmentSum = 0;
    let segmentCount = 0;
    for (var i = 0; i < s.length; i++) {
        segmentSum = s[i];
        for (var j = i + 1; j < i + m; j++) {
            segmentSum += s[j];
        }
        if (segmentSum === d) {
            segmentCount ++;
        }
    }
    return segmentCount;
}