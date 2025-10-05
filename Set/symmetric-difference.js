const symmetricDifference = function(a1,a2){
  const set1 = new Set(a1);
  const set2 = new Set(a2);
  
  const def1 = [...set1].filter(item => !set2.has(item));
  const def2 = [...set2].filter(item => !set1.has(item));
  
  return [...def1, ...def2]
}

symmetricDifference([1, 2, 4, 5], [2,4,1,6])