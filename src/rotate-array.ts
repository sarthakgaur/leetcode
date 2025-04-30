function rotate(nums: number[], k: number): void {
  const original = [...nums];

  for (let i = 0; i < original.length; i++) {
    const newIndex = (i + k) % original.length;
    nums[newIndex] = original[i];
  }
};
