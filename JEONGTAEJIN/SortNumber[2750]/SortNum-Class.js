module.exports = class Sort {
  constructor () {
  }
  diff(num, diff){
    let result = false;
    if(num > diff) result = true;
    if(num == diff) result = '=';
    return result;
  }
  swap(arr , idx){
    let temp = arr[idx];
    arr[idx] = arr[idx+1];
    arr[idx+1] = temp;
    return arr;
  }
  sort(arr){
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr.length; j++) {
        if(this.diff(arr[j] , arr[j+1])) this.swap(arr , j);
        if(this.diff(arr[j] , arr[j+1]) == '=') arr.splice(j+1, 1);
      }
    }  
    return arr; 
  }
}