/* 
    Balance Index

    Here, a balance point is ON an index, not between indices.

    Return the balance index where sums are equal on either side
    (exclude its own value).
    
    Return -1 if none exist.
*/


/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
*/

// Construct a while or a for loop, travelling from the left side.
// Another one for traveling from the right side.
// These loops do NOT need to be nested, they can be seperate. 

// One way we can find the middle of an array is dividing the length by 2. (This works primarily for when we have odd numbers, but is not needed!)

// Sum of the right and sum of the left should have declared values.
// Use the sums to evaluate that the left and right side are equal.

// Return the index of the point between the left and right.
const nums1 = [-2, 5, 7, 0, 1, 2];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;


function balanceIndex(nums) {


// if array length is < 3 then.. 
if (nums.length < 3) {
    // return -1 (array too short to have balance point)    
    return -1
}
    let leftSum = 0;
    let rightSum = 0;
    // let center = nums.length/2;

for (let i = 1; i < nums.length-1; i++) {
    //iterate through left side for left total
    for (let j = 0; j < i; j++) {
        leftSum += nums[j];
}
    //iterate through right side for right total
    for (let k = i+1; k < nums.length; k++) {
        rightSum += nums[k];
        
    }
    //check if left and right sides match
    if (leftSum == rightSum){
        return i;
    }
    // reset counters
    leftSum = 0;
    rightSum = 0;
}
return -1;
}
console.log(balanceIndex(nums1));
console.log(balanceIndex(nums2));
console.log("===========\n");



/*****************************************************************************/

//! while loop solution in progress
// function balanceIndex2(nums) {
// if (nums.length < 3){
//     return -1;
// }

// let leftSum = 0;
// let rightSum = 0;
// let i = 1;

// while (i < nums.length - 1){
//     let J = 0;
//     while (j < i){
//         leftSum += nums[j];
//         j++;
//     }
// }



// }
