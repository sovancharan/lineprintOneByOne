
const display2=document.getElementById('heading2');
const display1=document.getElementById('heading')


var interval = null
var interval2=null


function type(){

    setTimeout(() => {
        var text1 = "Hi I am sovan charan";
        // var text2="I am 23 years old"
          
        var i = 0;
        interval = setInterval( () => {
         if( i === text1.length -1) {
           clearInterval(interval);
           type2()
           }
           display1.innerHTML +=(text1[i++]);
         
         }, 500)  
    }, 3000);        
 }
 
 function type2() {
    setTimeout(() => {
        var text2="My age is 23";
    var j=0;
    interval2 = setInterval( () => {
        if( j === text2.length -1) {
          clearInterval(interval2);
          
          }

        // console.log(text2[j++]);
      
          display2.innerHTML +=(text2[j]);
        j++;
        }, 1000)   
    }, 1000);
  
 }
 type();

 



