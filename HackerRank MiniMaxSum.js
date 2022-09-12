'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let arrMin = Math.min(arr[0], arr[1], arr[2], arr[3], arr[4]);
    let arrMax = Math.max(arr[0], arr[1], arr[2], arr[3], arr[4]);
    
    let total = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
    
    let smallestSum = total - arrMax;
    let largestSum = total - arrMin;
    
    return console.log(smallestSum, largestSum);

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
