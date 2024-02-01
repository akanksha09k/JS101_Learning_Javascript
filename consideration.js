//Problem 3: Taking the following array into consideration get the output as given below:
//arr = [3,4,5,6,7]
//Output ==> 3 - 5 - 7
//Hint: You have to use forEach and conditional statement over here.

let arr = [3,4,5,6,7];
let result="";
arr.forEach(function(element,index){
  if (index % 2 === 0) {
    // Check if the index is even
    result += element;
    if (index < arr.length - 2) {
      result += " - ";
    }
  }
    
    })
console.log("Output:", result);

