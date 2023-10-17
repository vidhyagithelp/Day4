// generate prime numbers using arrow function
let generatePrimeNumArr = (val)=> {
    let givenNum = Number(val);
    i = 2;
    while (i <= givenNum) {
      if (i % 2 == 1  || i == 2) {
            if(i%3==0){
              // break;
            }
  
           else{
            console.log(i);
           }
        // console.log(i);
      }
      i++;
    }

    // return finalarr;
  };

  generatePrimeNumArr(21);
