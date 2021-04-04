// https://www.hackerrank.com/challenges/the-birthday-bar/problem
function birthday(s, d, m) {
    return s.reduce((count, currentValue, i) => {
        let segmentSum = 0;
        for (var j = i; j < i + m; j++) {
            segmentSum += s[j];
        }
        if (segmentSum === d) {
            return count + 1;
        }
        return count;
    }, 0)
}