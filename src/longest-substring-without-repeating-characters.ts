function lengthOfLongestSubstring(string: string): number {
  let left = 0;
  let right = 0;
  let longestSubString = 1;

  if (string.length <= 1) {
    return string.length;
  }

  while (true) {
    if (left === right) {
      right++;
    } else if (right > string.length - 1) {
      break;
    } else {
      const subString = string.substring(left, right + 1);
      const array = subString.split("");
      const set = new Set(array);

      if (subString.length !== set.size) {
        left++;
      } else {
        longestSubString = Math.max(longestSubString, subString.length);
        right++;
      }
    }
  }

  return longestSubString;
};
