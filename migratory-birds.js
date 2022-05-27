// https://www.hackerrank.com/challenges/migratory-birds/problem
function migratoryBirds(arr) {
    let highestFrequency = 0;
    let bird;
    const sortedArray = arr.sort();
    let i = 0;
    while (i < sortedArray.length) {
        const id = sortedArray[i];
        const frequency = sortedArray.lastIndexOf(id) - sortedArray.indexOf(id) + 1;
        if (frequency > highestFrequency) {
            highestFrequency = frequency;
            bird = id;
        } else if (frequency === highestFrequency) {
            bird = id < bird ? id : bird;
        }
        i = frequency > 0 ? i + frequency : i + 1;
    }
    return bird;
}