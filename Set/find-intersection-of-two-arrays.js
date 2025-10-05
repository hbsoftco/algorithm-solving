const intersection = (arr1, arr2) => {
    const set1 = new Set(arr1);
    return arr2.filter(item => set1.has(item));
}

const data = intersection([1, 2, 3, 4], [3, 4, 5, 6]);

console.log(data);
