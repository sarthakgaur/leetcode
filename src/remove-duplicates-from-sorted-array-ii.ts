function removeDuplicates2(nums: number[]): number {
  let firstPointer = 0;
  let secondPointer = 1;
  let duplicateCounter = 0;

  while (firstPointer < nums.length) {
    if (secondPointer >= nums.length) {
      break;
    } else if (nums[secondPointer] !== nums[firstPointer]) {
      firstPointer = secondPointer;
      secondPointer++;
      duplicateCounter = 0;
    } else if (nums[secondPointer] === nums[firstPointer]) {
      if (duplicateCounter === 0) {
        duplicateCounter = 1;
        secondPointer++;
      } else {
        nums.splice(secondPointer, 1);
      }
    }
  }

  return nums.length;
};
