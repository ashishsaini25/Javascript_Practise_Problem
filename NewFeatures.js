const test = (a='a',b='b',c='c')=>{
    return a+b+c
}
 
console.log(test('A','B','C')) 
console.log(test('A','B'))     
console.log(test('A'))      

var foo = ["Mayank", "Shiv", "TTT"];
 
var [one, two, three] = foo;
console.log(one); 
console.log(two); 
console.log(three); 

const student = {
    name:'Ming',
    age:'18',
    city:'Shanghai'  
  };
   
  const {name,age,city} = student;
  console.log(name); 
  console.log(age); 
  console.log(city); 

  var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [...arr1, ...arr2];
console.log(arr3);

let arr = ['react', 'angular', 'vue'];
 
if (arr.includes('react'))
{
    console.log('react existence');
}

var obj = { foo: "bar", baz: 42 };
console.log(Object.keys(obj));


var arr1 = [1, 2, [3, 4]];
console.log(arr1.flat()); 
 
var arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());
 
var arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));
console.log(arr3.flat(Infinity)); 

var arr4 = [1, 2, , 4, 5];
console.log(arr4.flat());

let  greeting =  "    Hello World";
console.log(greeting.trimStart());

  greeting = "Hello World    ";
console.log(greeting.trimEnd());