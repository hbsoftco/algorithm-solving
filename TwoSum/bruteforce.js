const nums = [2, 7, 11, 15];
const target = 9;


for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            console.log(`Found numbers ${nums[i]} and ${nums[j]} at indices ${i} and ${j}`);
        }
    }
}