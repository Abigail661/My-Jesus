//I'm so sorry for submitting late,i was finding it hard to get the answers,not to even talk of providing a source code,that was hard and stressful.
function calculate(a,b,operation){
    if(operation==='add'){
    return a + b;
    }
   else if(operation==='subtraction '){
       return a - b;
   }
   else if(operation==='multiply'){
       return a * b;
    }
    else if(operation==='divide')
        return a !== 0 ? a / b:
        undefined;
}}
console.log(calculate(2,5, 'add'))
console.log(calculate(10,2, 'subtraction'))
console.log(calculate(4,9, 'multiply'))
console.log(calculate(8,6, 'divide'))
