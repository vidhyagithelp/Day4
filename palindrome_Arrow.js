
//PALINDROME IN ARROW FUNCTION
let palindrome = ()=> {
    let arr = ["car", 123, "madam", "vanmm", "racecar", 18281, 34643];
    let res = "";

    let dummy = [];

    for (let i = 0; i < arr.length; i++) {
      res = "";
      arr[i] = arr[i].toString();
      if (arr[i].length % 2 == 1) {
        for (
          let j = 0, k = arr[i].length - 1;
          j < arr[i].length;
          j++, k--
        ) {
          if (arr[i][j] === arr[i][k]) {
            res += arr[i][j];
          } else {
            break;
          }
        }
      }

      if (res) {
        dummy.push(res);
      }
    }
    return dummy;
  };


  console.log(palindrome());