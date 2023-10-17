//sum of all numbers using arrow function
let sumofArr = ()=> {
    let res=0;
    let numArr = [2, 2, 2, 2];
    let i = 0;
    while (i < numArr.length) {
      res+=numArr[i];
      
      i++;
    }
    console.log("SumResult==",res);
  };

  sumofArr();