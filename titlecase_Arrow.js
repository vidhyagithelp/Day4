
   //Titlecase using arrow function
let printStringWithCaptl=()=>{
    let strArr=["teju","moni","kamal","raju","poonam"];
    let finalArr=[];
    for(let i=0;i<strArr.length;i++){
        let titlecase=strArr[i][0].toUpperCase()+strArr[i].substring(1);
        finalArr.push(titlecase);
    }
    console.log(finalArr);
}

printStringWithCaptl();

