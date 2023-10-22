// chapter # 05 Q: 01
// document.write("Sum of 3 and 5 is " + (3 + 5));

// chapter # 05 Q: 02
// document.write("<br> Sub of 3 and 5 is " + (3 - 5));
// document.write("<br> Mul of 3 and 5 is " + (3 * 5));
// document.write("<br> Div of 3 and 5 is " + (3 / 5));
// document.write("<br> Module of 3 and 5 is " + (3 % 5));


// // chapter # 05 Q: 03(a)
// var a;
// // chapter # 05 Q: 03(b)
// document.write("Value after variable declaration is: " + a);
// // chapter # 05 Q: 03(c)
// var a = 5;
// // chapter # 05 Q: 03(d)
// document.write("<br> Initial value: " + a);
// // chapter # 05 Q: 03(e)
// a ++;
// // chapter # 05 Q: 03(f)
// document.write("<br> Value After Increment is: " + a);
// // chapter # 05 Q: 03(g)
// a = a + 7;
// // chapter # 05 Q: 03(h)
// document.write("<br> Value After Addition is: " + a);
// // chapter # 05 Q: 03(i)
// a --;
// // chapter # 05 Q: 03(j)
// document.write("<br> Value After Decrement is: " + a);
// // chapter # 05 Q: 03(k)
// a = a % 3;
// document.write("<br> The Reminder is: " + a);

// // chapter # 05 Q: 04
// var movieTicket = 600;
// document.write("The Cost Of Buy 5 tickets to a movie is " + (5 * movieTicket) + "PKR");

// chapter # 05 Q: 05
// var a = 4;
// document.write("Table of " + a);
// document.write("<br> 4 x 1 = " + (a * 1));
// document.write("<br> 4 x 2 = " + (a * 2));
// document.write("<br> 4 x 3 = " + (a * 3));
// document.write("<br> 4 x 4 = " + (a * 4));
// document.write("<br> 4 x 5 = " + (a * 5));
// document.write("<br> 4 x 6 = " + (a * 6));
// document.write("<br> 4 x 7 = " + (a * 7));
// document.write("<br> 4 x 8 = " + (a * 8));
// document.write("<br> 4 x 9 = " + (a * 9));
// document.write("<br> 4 x 10 = " + (a * 10));

// // chapter # 05 Q: 06(a)
// var C = 25;
// // chapter # 05 Q: 06(b)
// var Convert = (C * 9/5) + 32;
// document.write(C + "<sup>o</sup>C is " + Convert + "<sup>o</sup>F");
// // chapter # 05 Q: 06(c)
// var F = 70;
// // chapter # 05 Q: 06(D)
// Convert = (F - 32) * 5/9;
// document.write("<br>" + F + "<sup>o</sup>F is " + Convert + "<sup>o</sup>C");

// chapter # 05 Q: 07
// var item1 = 650;
// var item2 = 100;
// var Q1 = 3;
// var Q2 = 7;
// var SC = 100;
// document.write("Price of item 1 is " + item1);
// document.write("<br> Quantity of item 1 is " + Q1);
// document.write("<br> Price of item 2 is " + item2);
// document.write("<br> Quantity of item 2 is " + Q2);
// document.write("<br> Shipping Charges " + SC);

// var total = (item1 * Q1) + (item2 * Q2) + SC;
// document.write("<br> Total Cost of your order is " + total);

// chapter # 05 Q: 08
// var totalMark = 980;
// var obtainMark = 804;
// document.write("<h1> Marks Sheet </h1>");
// document.write("<br> Total Marks: " + totalMark);
// document.write("<br> Marks Obtained: " + obtainMark);

// var per = (obtainMark / totalMark) * 100;
// document.write("<br> Percentage: " + per + "%");

// chapter # 05 Q: 09
// var us1 = 104.80;
// var sr1 = 28;
// var currency = (10 * us1) + (25 * sr1);
// document.write("<h1> Currency in PKR </h1>")
// document.write("<br> Total Currency in PKR: " + currency);

// chapter # 05 Q: 11
// var CY = 2023;
// var BY = 2002;
// var age = CY - BY;
// document.write("<h1> Age Calculator </h1>")
// document.write("<br> Your Age is: " + age);

// chapter # 06 Q: 01
// var a = prompt("Enter the value: ");
// document.write("Result:")
// document.write("<br> The value of a is: " + a);
// document.write("<br> ..........................");
// document.write("<br><br> The value of ++a is: " + ++a);
// document.write("<br> Now The value of a is: " + a);
// document.write("<br> ..........................");
// document.write("<br><br> The value of a++ is: " + a++);
// document.write("<br> Now The value of a is: " + a);
// document.write("<br> ..........................");
// document.write("<br><br> The value of --a is: " + --a);
// document.write("<br> Now The value of a is: " + a);
// document.write("<br> ..........................");
// document.write("<br><br> The value of a-- is: " + a--);
// document.write("<br> Now The value of a is: " + a);

// chapter # 06 Q: 02
// var a = prompt("Enter the value of a: ");
// var b = prompt("Enter the value of b: ");
// var result = --a - --b + ++b + b--;
// document.write("a is: " + a);
// document.write("<br> b is: " + b);
// document.write("<br> Result is " + result);

// chapter # 06 Q: 03
// var name = prompt("Enter Your Name: ");
// document.write("Hello" + " " + name);

// chapter # 06 Q: 04
// var table = prompt("Enter Your Number: ");
// document.write("<h3> Table of " + table + "</h3>");
// document.write("<br>" + table + " " + "x" + " " + 1 + " " + "=" + " " + (table * 1));
// document.write("<br>" + table + " " + "x" + " " + 2 + " " + "=" + " " + (table * 2));
// document.write("<br>" + table + " " + "x" + " " + 3 + " " + "=" + " " + (table * 3));
// document.write("<br>" + table + " " + "x" + " " + 4 + " " + "=" + " " + (table * 4));
// document.write("<br>" + table + " " + "x" + " " + 5 + " " + "=" + " " + (table * 5));
// document.write("<br>" + table + " " + "x" + " " + 6 + " " + "=" + " " + (table * 6));
// document.write("<br>" + table + " " + "x" + " " + 7 + " " + "=" + " " + (table * 7));
// document.write("<br>" + table + " " + "x" + " " + 8 + " " + "=" + " " + (table * 8));
// document.write("<br>" + table + " " + "x" + " " + 9 + " " + "=" + " " + (table * 9));
// document.write("<br>" + table + " " + "x" + " " + 10 + " " + "=" + " " + (table * 10));

// chapter # 06 Q: 05
// var S1 = prompt("Enter Your Subject 1: ");
// var S2 = prompt("Enter Your Subject 2: ");
// var S3 = prompt("Enter Your Subject 3: ");
// var totalMark = 100;
// var o1 = +(prompt("Enter Your Obtained Marks in Subject 1 out of 100: "));
// var o2 = +(prompt("Enter Your Obtained Marks in Subject 2 out of 100: "));
// var o3 = +(prompt("Enter Your Obtained Marks in Subject 3 out of 100: "));
// var per1 = (o1 / totalMark) * 100;
// var per2 = (o2 / totalMark) * 100;
// var per3 = (o3 / totalMark) * 100;

// document.write("<h1> Subject Total Marks Obtained Marks Percentage </h1>");
// document.write("<br> Subject: " + S1 + " " + "Total Marks is: " + totalMark + " " + "Obtained Marks is: " + o1 + " " + "Percentage is: " + per1);
// document.write("<br> Subject: " + S2 + " " + "Total Marks is: " + totalMark + " " + "Obtained Marks is: " + o2 + " " + "Percentage is: " + per2);
// document.write("<br> Subject: " + S3 + " " + "Total Marks is: " + totalMark + " " + "Obtained Marks is: " + o3 + " " + "Percentage is: " + per3);
// document.write("<br> Total Marks is: " + 300);
// var totalO = o1 + o2 + o3;
// document.write("<br> Total Obtained Marks is: " + totalO);
// var totalP = (totalO / 300) * 100;
// document.write("<br> Total Percentage is: " + totalP);

// Chapter: 09 Question 1
// var city = prompt("Enter The City Name: ");
// if(city === "Karachi"){
// document.write("Welcome to City of No Lights");
// }

// Chapter: 09 Question 2
// var gender = prompt("Enter The Gender Male AND Female: ");
// if(gender === "Male"){
//     document.write("Good Morning Sir")
// }
// else if(gender === "Female"){
//     document.write("Good Morning Ma'am")
// }

// Chapter: 09 Question 3
// var color = prompt("Enter The Color of Signal: ");
// if(color === "red"){
//     document.write("Must Stop")
// }
// else if(color === "green"){
//     document.write("Move Now")
// }
// else if(color === "yellow"){
//     document.write("Ready to Move")
// }

// Chapter: 09 Question 4
// var fuel = +(prompt("Remaing Fuel: "))
// if(fuel < 0.25){
//     document.write("Please refill the fuel in your car")
// }
// else{
//     document.write("You Have Sufficient Fuel in Your Car")
// }

// Chapter: 09 Question 5(a)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// Chapter: 09 Question 5(b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// Chapter: 09 Question 5(c)
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// Chapter: 09 Question 5(d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// Chapter: 09 Question 5(e)
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// Chapter: 09 Question 5(f)
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// Chapter: 09 Question 6
// var maths = +(prompt("Enter the Marks of Maths: "))
// var physics = +(prompt("Enter the Marks of Physics: "))
// var chemistry = +(prompt("Enter the Marks of Chemistry: "))
// var totalMarks = 300;
// var obtainMarks = maths + physics + chemistry;
// document.write("<h1> Marks Sheet </h1>")
// document.write("<br> Total Marks is: " + totalMarks);
// document.write("<br> Obtained Marks is: " + obtainMarks);
// var par = (obtainMarks / totalMarks) * 100;
// document.write("<br> Percentage is: " + par);
// if(par >= 80){
//     document.write("<br> Grade: A-One")
//     document.write("<br> Remarks: Excellent")
// }
// else if(par >= 70){
//     document.write("<br> Grade: A")
//     document.write("<br> Remarks: Good")
// }

// else if(par >= 60){
//     document.write("<br> Grade: B")
//     document.write("<br> Remarks: You Need To Improve")
// }

// else if(par < 60){
//     document.write("<br> Grade: Fail")
//     document.write("<br> Remarks: Sorry")
// }

// Chapter: 09 Question 7

// var secret1 = +(prompt("Enter Secret Number from 1 to 10: "))
// var secret = 5;
// if(secret === secret1){
//     document.write("Bingo! Correct Answer")
// }
// else if(secret === 4){
//     document.write("Close Enough to the Correct Answer")
// }
// else if(secret === 6){
//     document.write("Close Enough to the Correct Answer")
// }
// else{
//     document.write("Wrong Answer")
// }

// Chapter: 09 Question 8

// var number = +prompt("Enter the Number: ");
// var result = number % 3;
// if(result === 0){
//     document.write("The Number is divisible by 3")
// }
// else{
//     document.write("The Number is not divisible by 3")
// }

// Chapter: 09 Question 9

// var number = +prompt("Enter the Number: ");
// var result = number % 2;
// if(result === 0){
//     document.write("The Number is Even")
// }
// else{
//     document.write("The Number is Odd")
// }

// Chapter: 09 Question 10

// var temp = +prompt("Enter The Temperature")
// if(temp > 40){
//     document.write("It is too hot outside")
// }
// else if(temp > 30){
//     document.write("The Weather is Normal Today")
// }

// else if(temp > 20){
//     document.write("Today's Weather is Cold")
// }

// else if(temp > 10){
//     document.write("OMG! Today's Weather is So Cold")
// }

// else if(temp < 10){
//     document.write("The Weather is too Cold")
// }

// Chapter: 09 Question 10

// var num1 = +prompt("Enter The First Number: ")
// var operator = prompt("Enter The Operator: ")
// var num2 = +prompt("Enter The Second Number: ")

// if(operator === "+"){
//     document.write("The Result is " + (num1 + num2))
// }
// else if(operator === "-"){
//     document.write("The Result is " + (num1 - num2))
// }

// else if(operator === "*"){
//     document.write("The Result is " + (num1 * num2))
// }

// else if(operator === "/"){
//     document.write("The Result is " + (num1 / num2))
// }

// else if(operator === "%"){
//     document.write("The Result is " + (num1 % num2))
// }








