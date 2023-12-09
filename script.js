// ......................1.......................................................
// var  num = Number(prompt("Enter the number"));
// console.log(num);
// ......................2.......................................................
// var  num = Number(prompt("Enter The Number"));
// if (num % 3 === 0 && num % 4 === 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
// ......................3.......................................................
// var  num1 = Number(prompt("Enter The num1"));
// var  num2 = Number(prompt("Enter The num2"));
// if (num1 > num2) {
//   console.log("the greater number is " + num1);
// } else {
//   console.log("the greater number is " + num2);
// }
// ......................4.......................................................
// var num = Number(prompt("Enter The Number"));
// if (num > 0) {
//   console.log("positive");
// } else {
//   console.log("Negative");
// }
// ......................5.......................................................
// var num1 = Number(prompt("Enter num1"));
// var num2 = Number(prompt("Enter num2"));
// var num3 = Number(prompt("Enter num3"));
// if (num1 > num2 && num1 > num3 && num2 < num1 && num2 < num3) {
//   console.log("max element is " + num1);
//   console.log("min element is " + num2);
// } else if (num2 > num1 && num2 > num3 && num3 < num1 && num3 < num2) {
//   console.log("max element is " + num2);
//   console.log("min element is " + num3);
// } else {
//   console.log("max element is " + num3);
//   console.log("min element is " + num1);
// }
// ......................6.......................................................
// var num = Number(prompt("Enter num"));
// if (num % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }
// ......................7.......................................................
// var char = prompt("Enter char");
// if (
//   char === "a" ||
//   char === "e" ||
//   char === "i" ||
//   char === "o" ||
//   char === "u"
// ) {
//   console.log("Vowl");
// } else {
//   console.log("Consonant");
// }
// ......................8.......................................................
// var num = Number(prompt("Enter num"));
// for (var i = 1; i <= num; i++) {
//   console.log(i);
// }
// ......................9.......................................................
// var num = Number(prompt("Enter num"));
// for (let i = 1; i <= 12; i++) {
//   console.log(num * i);
// }
// ......................10.......................................................
// var num = Number(prompt("Enter num"));
// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// ......................11.......................................................
// const num = Number(prompt("Enter num"));
// const powVal = Number(prompt("Enter powVal"));
// var result = 1;
// for (i = 0; i < powVal; i++) {
//   result = result * num;
// }
// console.log(result);
// ......................12.......................................................
// var sub1 = Number(prompt("Enter Sub1 marks"));
// var sub2 = Number(prompt("Enter Sub2 marks"));
// var sub3 = Number(prompt("Enter Sub3 marks"));
// var sub4 = Number(prompt("Enter Sub4 marks"));
// var sub5 = Number(prompt("Enter Sub5 marks"));
// var total = sub1 + sub2 + sub3 + sub4 + sub5;
// console.log("the total is " + total);
// console.log("the average is " + total / 5);
// console.log("the percentage is " + (total / 100));
// ......................13.......................................................
// var monthNumber = Number(prompt("Enter Month Number"));
// if (
//   monthNumber === 1 ||
//   monthNumber === 3 ||
//   monthNumber === 5 ||
//   monthNumber === 7 ||
//   monthNumber === 9 ||
//   monthNumber === 11 ||
//   monthNumber === 12
// ) {
//   console.log("the month days is 31");
// } else if (
//   monthNumber === 4 ||
//   monthNumber === 6 ||
//   monthNumber === 8 ||
//   monthNumber === 10
// ) {
//   console.log("the month days is 30");
// } else {
//   console.log("the month days is 28");
// }
// ......................14.......................................................
// var sub1 = Number(prompt("Enter Physics marks "));
// var sub2 = Number(prompt("Enter Chemistry, marks "));
// var sub3 = Number(prompt("Enter Biology, marks "));
// var sub4 = Number(prompt("Enter Mathematics marks "));
// var sub5 = Number(prompt("Enter Computer marks "));
// var pecentage = sub1 + sub2 + sub3 + sub4 + sub5;

// if (pecentage >= 90) {
//   console.log("pecentage >=  90% : Grag A");
// } else if (pecentage >= 80) {
//   console.log("pecentage >=  80% : Grag B");
// } else if (pecentage >= 70) {
//   console.log("pecentage >=  70% : Grag C");
// } else if (pecentage >= 60) {
//   console.log("pecentage >=  60% : Grag D");
// } else if (pecentage >= 40) {
//   console.log("pecentage >=  40% : Grag E");
// } else if (pecentage <= 40) {
//   console.log("pecentage <=  40% : Grag F");
// } else {
//   console.log("Please Enter Valid makrk");
// }
// ............................15.............................................
// var monthNumber = Number(prompt("Enter Month Number"));
// switch (monthNumber) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 9:
//   case 11:
//   case 12:
//     console.log("total days is 31");
//     break;
//   case 4:
//   case 6:
//   case 8:
//   case 10:
//     console.log("total days is 30");
//     break;
//   case 2:
//     console.log("total days is 28");
//     break;
//   default:
//     console.log("Please Enter Valid Month");
// }
// ............................16.............................................
// var char = prompt("Enter The Char");
// switch (char) {
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("vowel");
//     break;
//   default:
//     console.log("Constant");
// }
// ............................17.............................................
// var num1 = Number(prompt("Enter Num1"));
// var num2 = Number(prompt("Enter Num2"));
// switch (num1 > num2) {
//   case true:
//     console.log("num1 > num2");
//     break;
//   default:
//     console.log("num2 > num1");
// }
// ............................18.............................................
// var num1 = Number(prompt("Enter Num1"));
// switch (num1 % 2 === 0) {
//   case true:
//     console.log("The Number Is Even");
//     break;
//   default:
//     console.log("The Number Is Odd");
// }
// ............................19.............................................
// var num = Number(prompt("Enter Num"));
// switch (true) {
//   case num > 0:
//     console.log("Num  is positive");
//     break;
//   case num < 0:
//     console.log("Num  is Nagative");
//     break;
//   default:
//     console.log("Num ===0");
// }
// ............................20.............................................
// var num1 = Number(prompt("Enter Num1"));
// var num2 = Number(prompt("Enter Num2"));
// var operand = prompt("Enter Operand");
// switch (operand) {
//   case "+":
//     console.log(num1 + num2);
//     break;
//   case "-":
//     console.log(num1 - num2);
//     break;
//   case "*":
//     console.log(num1 * num2);
//     break;
//   case "/":
//     console.log(num1 / num2);
//     break;
// }
