
const display1=document.getElementById('heading')

// const text1 = "My name is sovan... My age is (400 wait) 23..."
// let text1length=text1.length;
// console.log(text1length);
// My age is(400 wait) 23...
// .";


let timer;

// the current index
let i = 0;

function type() {
setTimeout(() => {
  display1.innerHTML +=(text1[i]);
  
  i++;
  
  if(i >= text1.length) 
    clearInterval(timer); 
}, 3000);
  

 
}

// pass in function, instead of calling it
timer = setInterval(type, 1000);