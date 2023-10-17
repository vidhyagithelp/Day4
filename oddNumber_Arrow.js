//print odd numbers using arrow function
let printOddNumber = ()=> {
    let arr = [1, 3, 4, 6, 8, 12, 11, 45];
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] % 2 !== 0) console.log(arr[i]);
    // }

    let i=0;
    while(i<arr.length){
      if (arr[i] % 2 !== 0) console.log(arr[i]);
      i++;
    }
  };
  printOddNumber();