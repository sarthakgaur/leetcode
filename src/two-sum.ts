function twoSum(nums: number[], target: number): number[] {
  const numbersMap: { [key: string]: number[] } = {};

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    if (numbersMap[number]) {
      const indices = numbersMap[number];
      indices.push(i);
    } else {
      numbersMap[number] = [i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const firstIndex = i;
    const firstNumber = nums[i];
    const requiredNumber = target - firstNumber;

    if (numbersMap[requiredNumber]) {
      const values = numbersMap[requiredNumber];
      const resultSet = new Set([firstIndex, ...values]);

      if (resultSet.size > 1) {
        return Array.from(resultSet);
      }
    }
  }

  return [0, 0];
};
