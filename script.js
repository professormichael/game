function button(num){
  let value1 = document.getElementById("input");
  value1.value += num;
  
}
function calculate() {
   var y= eval(document.getElementById('input').value);
document.getElementById('input').value = y;
}
 function delete_last() {
   var x = document.getElementById('input').value;

   // Convert the string to an array, remove the last character, and join back to a string
   var y = x.split('');
   y.splice(y.length - 1, 1);
   y = y.join('');

   document.getElementById('input').value = y;
 }






