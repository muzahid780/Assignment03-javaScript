/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
if (
  startingSalary > 0 &&
  startingSalary <= 1000000 &&
  experience > 0 &&
  experience <= 50
) {
  var presentSalary = startingSalary;
  for (var i = 1; i <= experience; i++) {
    presentSalary = presentSalary + presentSalary * 0.05;
  }
  presentSalary = presentSalary.toFixed(2); //up to 2 decimal
  console.log(presentSalary);
}
// else {
//   console.log("Invalid Value");
// }
