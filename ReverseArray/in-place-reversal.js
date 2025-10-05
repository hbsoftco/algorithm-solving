const reversal = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const tmp = arr[left];

        arr[left] = arr[right]
        arr[right] = tmp;

        left++;
        right--;
    }

    return arr;

}

const myArr = [1,2,3,4,5,6,7];
console.log(myArr);
reversal(myArr);
console.log(myArr);