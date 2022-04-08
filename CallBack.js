
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