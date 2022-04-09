const first=(nam1)=>{
   return  function second(nam2){
        console.log(`${nam1} and ${nam2} are bestfriend`);
    }
}
first("Ashish")("Nishant");

const ff=(nam1)=>{
    return  function second(nam2){
        return function third(nam3){
         console.log(`${nam1} ,${nam3}  and ${nam2} are bestfriend`);
        }
     }
 }
 ff("Ashish")("Nishant")("Astha");


 const sum=(arr)=>{
     if(arr.length==0)return 0;
     const temp=arr.pop();
     return temp+sum(arr);
 }

 let a=[5,3,2,4,6,7];
 const ans=sum(a);
 console.log(ans);


 function doOperation(operation, number1, number2) {
    return operation(number1, number2)
}

function sumBothNumbers(number1, number2) {
    return number1 + number2
}

doOperation(sumBothNumbers,5,10);