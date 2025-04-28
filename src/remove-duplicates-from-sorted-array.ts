function removeDuplicates(nums: number[]): number {
  let firstPointer = 0;
  let secondPointer = 1;

  while (firstPointer < nums.length) {
    if (secondPointer >= nums.length) {
      break;
    } else if (nums[secondPointer] !== nums[firstPointer]) {
      firstPointer = secondPointer;
      secondPointer++;
    } else if (nums[secondPointer] === nums[firstPointer]) {
      nums.splice(secondPointer, 1);
    }
  }

  return nums.length;
};
