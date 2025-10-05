const reversal = (str) => {
    const strArr = str.split('');

    let left = 0;
    let right = strArr.length - 1;

    while (left < right) {
        const tmp = strArr[left];

        strArr[left] = strArr[right]
        strArr[right] = tmp;

        left++;
        right--;
    }

    return strArr.join('');
}

const str = 'hossein';
console.log(str);
const newStr = reversal(str);
console.log(newStr);

