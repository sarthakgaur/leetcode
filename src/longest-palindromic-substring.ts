function longestPalindrome(string: string): string {
  let resultLength = 0;
  let resultStart = 0;
  let resultEnd = string.length - 1;
  const cache = {};

  function longestPalindromeHelper(start: number, end: number) {
    const cacheString = `${start},${end}`;
    const currentStringLength = end - start + 1;

    if (cache[cacheString]) {
      return;
    }

    if (currentStringLength < resultLength) {
      return;
    }

    const result = isPalindrome(string, start, end);

    if (result) {
      resultLength = currentStringLength;
      resultStart = start;
      resultEnd = end;
    } else {
      longestPalindromeHelper(start, end - 1);
      longestPalindromeHelper(start + 1, end);
    }

    cache[cacheString] = true;
  }

  longestPalindromeHelper(0, string.length - 1);

  if (resultLength) {
    return string.substring(resultStart, resultEnd + 1);
  }

  return "";
}

function isPalindrome(string: string, start: number, end: number): boolean {
  let startIndex = start;
  let endIndex = end;

  while (true) {
    if (startIndex > string.length - 1) {
      return false;
    } else if (endIndex < 0) {
      return false;
    } else if (startIndex == endIndex) {
      break;
    } else if (startIndex > endIndex) {
      break;
    } else if (string[startIndex] !== string[endIndex]) {
      return false;
    }

    startIndex++;
    endIndex--;
  }

  return true;
}
