const nums = [2, 7, 11, 15];
const target = 18;

const map = new Map();

for(let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
        console.log('[',map.get(complement), i, ']');
    }

    map.set(nums[i], i);
}   
