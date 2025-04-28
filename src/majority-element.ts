function majorityElement(nums: number[]): number {
  const majority = nums.length / 2;
  const numberCounter: Map<number, number> = new Map();

  for (const number of nums) {
    if (numberCounter.has(number)) {
      const newCount = (numberCounter.get(number) ?? 0) + 1;
      numberCounter.set(number, newCount);
    } else {
      numberCounter.set(number, 1);
    }
  }

  const keys = numberCounter.keys()

  for (const key of keys) {
    if (numberCounter.get(key) ?? 0 > majority) {
      return key;
    }
  }

  return 0;
};