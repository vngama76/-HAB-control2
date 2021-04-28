function convert(nr, op) {
  if (op === 2) {
    const binNum = nr.toString().split('');

    let result = 0;

    for (let i = 0; i < binNum.length; i++) {
      result += Number(binNum[i] * Math.pow(2, binNum.length - 1 - i));
    }
    return result;
  } else if (op === 10) {
    const decNum = nr.toString(2);
    return decNum;
  } else console.error('Unknown operation');
}

console.log(convert(101, 2));
