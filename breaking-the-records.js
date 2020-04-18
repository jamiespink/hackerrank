function breakingRecords(scores) {
    let high = scores[0];
    let low = scores[0];
    let highCount = 0;
    let lowCount = 0;
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > high) {
            high = scores[i];
            highCount ++;
            continue;
        }
        if (scores[i] < low) {
            low = scores[i];
            lowCount ++;
        }
    }
    return [highCount, lowCount];
}