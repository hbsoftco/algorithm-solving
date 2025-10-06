const symmetricDifference = function (a1, a2) {
  const set1 = new Set(a1);
  const set2 = new Set(a2);

  const union = new Set([...set1, ...set2]);

  const intersection = new Set([...set1].filter((x) => set2.has(x)));

  return [...union].filter((item) => !intersection.has(item));
};

const data = symmetricDifference([1, 2, 4, 5], [2, 4, 1, 6, 9]);
console.log(data);
