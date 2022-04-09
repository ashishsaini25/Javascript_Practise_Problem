const f =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("I am working with number 2")},3000);
    });
}
function Fun(num){
    console.log("Hello there i am working with number "+num);
}

const callme=async ()=>{

     Fun(1);
    const val2=  await f();
    console.log(val2);
     Fun(3);
     
}
callme();

const MultipleCallBack= async (FirstCallBack,SecondCallBack,ThirdCallBack) =>{
    FirstCallBack(2,3);
     await SecondCallBack(2,3);
    if(ThirdCallBack(5)){
        console.log("The Given number is Even");
    }
    else{
console.log("The given number is Odd");
    }
}


function Multiply(a,b){
    console.log(`The Product Two Number is ${a*b}` );
} 

function  Power(a,b){
    setTimeout(()=>{console.log(`The Answer  is ${a**b}`)},3000);
}

function EvenOdd(num){
    if(num%2==0)return true;
    return false;
}
MultipleCallBack(Multiply,Power,EvenOdd);

async function init() {
    console.log('start')
    await testSync()
    console.log('End')
  }
  init()
  async function testSync() {
    const response = await new Promise(resolve => {
      setTimeout(() => {
          resolve("async await test...");
        }, 1000);
    });
    console.log(response);
  }