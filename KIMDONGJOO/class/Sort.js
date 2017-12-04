module.exports = class Sort {
  constructor() {}
  static diff(num, diff) {
    let result;
    if(num > diff) result = true;
    else if(num < diff) result = false;
    else result = '=';
    return result;
  }
  static swap(array, idx) {
    let temp;
    temp = array[idx + 1];
    array[idx + 1] = array[idx];
    array[idx] = temp;
    return array;
  }
  static sort(array) {
    for(let i = array.length - 1; i > 0; i--) {
      for(let j = 0; j < i; j++) {
        if(this.diff(array[j], array[j + 1]) == '=') array.splice(j + 1, 1);
        else if(this.diff(array[j], array[j + 1])) this.swap(array, j);
      }
    }
    return array;
  }
}