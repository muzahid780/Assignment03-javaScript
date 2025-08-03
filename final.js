/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
if (area > 0 && area <= 1000000000) {
  var Divide = area / 2;
  console.log(Divide);
}

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (money >= 25000) {
  console.log("Laptop");
} else if (money >= 10000) {
  console.log("Cycle");
} else {
  console.log("Chocolate");
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
if (lastDay > 3 && lastDay <= 30) {
  for (var x = 1; x <= lastDay; x++) {
    if (x % 3 === 0) {
      console.log(x + " - medicine");
    } else {
      console.log(x + " - rest");
    }
  }
}

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
if (
  fileName.startsWith("#") ||
  fileName.endsWith(".pdf") ||
  fileName.endsWith(".docx")
) {
  console.log("Store");
} else {
  console.log("Delete");
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here
var Email =
  student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(Email);

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
  for (var y = 1; y <= experience; y++) {
    presentSalary = presentSalary + presentSalary * 0.05; //5%
  }
  presentSalary = presentSalary.toFixed(2); //up to 2 decimal
  console.log(presentSalary);
}
