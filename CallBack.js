
function ff(callback){
    callback(4,5);
}
function add(a,b){
    console.log("The sum of the two number is "+(a+b));
}
ff(add);


function  f(a,callback){
    console.log(a+callback(20));
}

function number(temp){
    return temp*2;
}
f(5,number);


function MultipleCallBack(FirstCallBack,SecondCallBack,ThirdCallBack){
    FirstCallBack(2,3);
    SecondCallBack(2,3);
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
    console.log(`The Answer  is ${a**b}` );
}

function EvenOdd(num){
    if(num%2==0)return true;
    return false;
}


MultipleCallBack(Multiply,Power,EvenOdd);