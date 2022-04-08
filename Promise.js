function promise(){
    let ok=false;
    return new Promise((resolve,reject)=>{
        if(!ok){
            resolve("The promblem have been resolved");
        }
        else{
            reject("problem have been rejected");
        }

    });
}
promise().then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})

function Control(number){
    return new Promise((resolve,reject)=>{
        if(number==1){
            resolve("The given number is one");
        }
        else if(number==2){
            resolve("The given number is two");
        }
        else if(number==3){
            resolve("The given number is three");
        }
        else{
            reject("The number is greater than 3");
        }
    })

}
Control(1).then((message)=>{
    console.log(message);
}).then((message)=>{
    console.log(message);
}).then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})