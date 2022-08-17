/* Write a function called minSubArrayLen which accepts two parameters - an array of positive integers 
 * and a positive integer.This function should return the minimal length of a contiguous subarray of 
 * which the sum is greater than or equal to the integer passed to the function. If there isn't one, 
 * return 0 instead - use sliding window pattern
 * Time Complexity - O(n)
 * Space Complexity - O(1) */
const minSubArrayLen = (array, number) => {
  let sumOfSubArray = 0;
  let total = null;
  let lenSubArrLoop = 1;
  let left = 0;
  let right = 0;
  while (right < array.length) {
    if (left === 0 && right === 0) {
      right += 1;
      sumOfSubArray = array[left] + array[right];
      lenSubArrLoop += 1;
    } else if (sumOfSubArray < number) {
      right += 1;
      sumOfSubArray += array[right];
      lenSubArrLoop += 1;
    } else if (sumOfSubArray >= number) {
      if (total === null || lenSubArrLoop <= total) {
        total = lenSubArrLoop;
        sumOfSubArray -= array[left];
        left += 1;
        lenSubArrLoop -= 1;
      } else {
        sumOfSubArray -= array[left];
        left += 1;
        lenSubArrLoop -= 1;
      }
    }
  }
  return total === null ? 0 : total
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9));  // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52))  // 1 -> because [62] is greater 
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0