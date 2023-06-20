function sqrtOfSum(nums) {
  let sum = 0;
  nums.forEach((n) => (sum += Math.pow(n, 2)));

  return Math.sqrt(sum);
}

const nums = [1, 2, 3, 4, 5];
const sqrtSum = sqrtOfSum(nums);

console.log(sqrtSum);
