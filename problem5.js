/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here
var Email =
  student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(Email);
