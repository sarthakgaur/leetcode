interface LocalNode {
  count: number,
  transferedTo?: string,
}

function longestConsecutive(numbers: number[]): number {
  const numbersMap: { [key: string]: LocalNode } = {};
  let highestCount = numbers.length > 0 ? 1 : 0;

  for (const number of numbers) {
    numbersMap[number] = { count: 1 };
  }

  const keys = Object.keys(numbersMap);

  for (const current of keys) {
    const currentNode = numbersMap[current];
    const number = Number(current);
    const oneMore = String(number + 1)

    if (numbersMap[oneMore]) {
      const oneMoreNode = numbersMap[oneMore];
      let transferedTo: string;

      if (oneMoreNode.transferedTo) {
        const transferKey = getTransferKey(oneMoreNode.transferedTo, numbersMap);
        const transferNode = numbersMap[transferKey];
        transferNode.count += currentNode.count;
        transferedTo = transferKey;
        currentNode.transferedTo = transferKey;
        highestCount = Math.max(transferNode.count, highestCount);
      } else {
        oneMoreNode.count += currentNode.count;
        currentNode.transferedTo = oneMore;
        highestCount = Math.max(oneMoreNode.count, highestCount);
      }
    }
  }

  return highestCount;
}

function getTransferKey(transferedTo: string, numbersMap: { [key: string]: LocalNode }): string {
  let transferKey = transferedTo;
  let transferNode = numbersMap[transferKey];

  while (transferNode.transferedTo) {
    transferKey = transferNode.transferedTo;
    transferNode = numbersMap[transferKey];
  }

  return transferKey;
}
