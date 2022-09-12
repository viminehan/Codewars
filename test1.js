let arr = [1, 2, 3, 4, 5]

    let arrMin = Math.min(arr);
    let arrMax = Math.max(arr);
    
    let total;
    total = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
    
    let smallestSum;
    smallestSum = total - arrMax;
    let largestSum; 
    largestSum = total - arrMin;
    
    console.log(smallestSum, largestSum);
