function findSubarraysWithSum(arr, target) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        const subarray = [];

        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            subarray.push(arr[j]);

            if (sum === target) {
                result.push([...subarray]); 
            }

            if (sum > target) break;
        }
    }

    return result;
}

const arr = [1, 2, 3, 4, 5];
const target = 5;

console.log(findSubarraysWithSum(arr, target));
