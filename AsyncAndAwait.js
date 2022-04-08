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
