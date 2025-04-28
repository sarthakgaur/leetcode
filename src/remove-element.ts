function removeElement(nums: number[], val: number): number {
  for (let i = 0; i < nums.length;) {
    const number = nums[i];

    if (number === val) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  return nums.length;
};
