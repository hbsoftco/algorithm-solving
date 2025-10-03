const nums = [2, 7, 11, 15];
const target = 18;

const obj = [];

for (let i = 0; i < nums.length; i++) {
  const complement = target - nums[i];

  const find = obj.find((x) => x.value === complement);

  if (find) {
    console.log("[", find.index, i, "]");
  }

  obj.push({
    value: nums[i],
    index: i,
  });
}
