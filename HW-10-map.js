let arr = [1, 2, 3, 4];

function map(myArr, func){
  let newArr = [];

    for(let i = 0; i < myArr.length; ++i){
      newArr.push(func(arr[i]));
    }
    return newArr;
}
console.log(map(arr, val => "Number " + val));