// let K = "vague"
// let L = 2
// console.log(K + L)

// const a = {
//     name: "hero",
//     class: 10,
//     section: "D",
//     Profession: "Doctor"
// }
// a["friend"] = "zero"
// console.log(a)

// const b = 3.14
// // b = 3.1415 // b is already decleared

// const dict = {
//     sierra: "a chain of hills or mountains, the peaks of which suggest the teeth of a saw.",
//     hallucinate: " to produce false information contrary to the intent of the user and present it as if true and factual.",
//     repudiate: "to reject or refuse to accept something",
//     deny: " to say something is not true",
//     monkey: "a small to medium-sized primate that typically has a long tail, most kinds of which live in trees in tropical countries."
// }

// console.log(dict.monkey)
// let age = prompt("What's your age?")
// age = Number.parseInt(age)
// if (age >= 10 && age <= 20) {
//     console.log("your age lies between 10 and 20")
// }

// else {
//     console.log("invalid age")
// }

// let age = prompt("What's your age?")
// switch (age) {
//     case '12':
//         console.log("your age is 12")
//         break
//     case '13':
//         console.log("your age is 13")
//         break
//     case '14':
//         console.log("your age is 14")
//         break
//     case '15':
//         console.log("your age is 15")
//         break
//     default:
//         console.log("your age is not special")
// }


// Program to find whether a number is divisible by 2 and 3.

//  let x = prompt("Write a number!!")
// x = Number.parseInt(x)

// if (x%2==0 && x%3==0) {
//     console.log("x is completely divisible by 2 and 3")
// }

// else {
//     console.log("An error occurred!!")
// }

// Program to find whether a number is divisible by 2 or 3.

// let x = prompt("Write a number!!")
// x = Number.parseInt(x)

// if (x % 2 == 0) {
//     console.log(x, 'is completely divisible by 2')
// }

// else if (x % 3 == 0) {
//     console.log(x, 'is completely divisible by 3')
// }

// else {
//     console.log("An error occurred!!")
// }


// Ternary operators
// let age = 18
// let y = age < 18 ? "you cannot drive" : "you can drive"
// console.log(y)

// let age = prompt("What is your age?")
// age = Number.parseInt(age)
// console.log("you" + (age < 18 ? " cannot drive" : "can drive"))

// sample program of for loop
// let factorial = 1
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// for (let i = 1; i <= n; i++) {
//     factorial *= i
// }
// console.log("the factorial of the program is " + factorial)


// wap to display fibonacci series
// let x = 1
// let y = 1
// let z = 0
// console.log(z)
// for (let i = 1; i <= 5; i++) {
//     console.log(x)
//     console.log(y)
//     x = x + y
//     y = x + y
// }

// Program to check given number is palindrome or not
// let r = 0
// let s = 0
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// let z = n

// while (n != 0) {
//     r = n % 10
//     s = s * 10 + r
//     n = Math.floor(n / 10)
// }

// if (s === z) {
//     console.log(z + " is palindrome number")
// }
// else {
//     console.log(z + " is not palindrome number")
// }

// Program to check given number is armstrong or not
// let r = 0
// let s = 0
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// let z = n

// while (n != 0) {
//     r = n % 10
//     s = s + r ^ 3
//     n = Math.floor(n / 10)
// }

// if (s === z) {
//     console.log(z + " is armstrong number")
// }
// else {
//     console.log(z + " is not armstrong number")
// }

// -----------------------------------------------------------------------------------------------------------------
// Objects
// const profile = {
//     Name: "@krishkhatiwada",
//     isfollow: true,
//     following: 56,
//     followers: 50,
// };
// console.log(profile)

// write a code that gives grades to students according to their scores:

// let score = prompt("Enter marks of a student:")
// let grade

// if (score >= 90 && score <= 100) {
//     grade = "A"
// }
// else if (score >= 70 && score <= 89) {
//     grade = "B"
// }
// else if (score >= 60 && score <= 69) {
//     grade = "C"
// }
// else if (score >= 50 && score <= 59) {
//     grade = "D"
// }
// else if (score >= 0 && score <= 49) {
//     grade = "F"
// }

// console.log("Your grade is:", grade)

// Create a game where you start with any random game number. Ask the user to keep guessing the game number untill the user enters correct value
// let gameNum= 55
// let userNum = prompt("Enter the game number:")

// while(gameNum != userNum){
//     userNum = prompt("You entered the wrong number. Please, Try again:")
// }

// console.log("Congratulations, you entered the right number")

// Strings--------------------------------------------------------->>
// Prompt the user to enter their full name. Generate the username for them based on the input. Start username with @, followed by their full name and ending with  the full length

// let FullName = prompt("Enter your full name:")
// let length = FullName.length

// console.log("Your Username is: @" + FullName + length )

// Arrays----------------------------------------------------------->>

// let marks = [85, 97, 44, 37, 76, 60]
// let length = marks.length
// let sum = 0

// for (let Elements of marks) {
//     sum += Elements
// }

// let Avg = sum/length

// console.log(`Average marks of the class: ${Avg}`)

// Q1. For a given array of five items -> [240, 645, 300, 900, 50] All items have an offer of 10% OFF in them. Change the array to store final price after applying offer.

// let items = [240, 645, 300, 900, 50]

// for (let i = 0; i < items.length; i++) {
//     let Offer = (10 / 100) * items[i]
//     items[i] -= Offer
// }
// console.log(items)

// let items = [240, 645, 300, 900, 50]
// let i= 0

// for(let el of items){
//     console.log(`item of index ${i} = ${el}`)
//     let offer = (10 / 100) * items[i]
//     items[i] -= offer
//     i++
// }
// console.log(items)

// Q2. Create an array to store companies -> Bloomberg, Microsoft, Uber, Google, IBM, Netflix
// a. Remove the first company from the array
// b. remove Uber & Add Ola in its place
// c. Add Amazon in the end 

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// companies.shift()
// console.log(companies)

// companies.splice(1, 1, "Ola")
// console.log(companies)

// companies.push("Amazon")
// console.log(companies)  t
// functions------------------------------------------------------->>
// function sum(x, y) {
//     s = x + y;
//     return s;
// }

// let add = sum(8, 7)
// console.log(add)

// function hello() {
//     console.log("This is console window for js")
// }
// hello();

// // Arrow function------------->
// const Arrowsum = (a, b) => {
//     console.log(a + b);
// }
// Arrowsum(5, 7);

// const multi = (a, b) => {
//     m = a*b;
//     return m;
// }

// let multiplication = multi(8, 7)
// console.log(multiplication)

// Q1. Create a function using the "function" keyword that takes a String as an arguement and returns the number of vowels in the string.

// function countvowels(string) {
//     let count = 0
//     for (const char of string) {
//         // cons ole.log(char);
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++; 
//         }
//     }
//     console.log(count);
// }
// countvowels("pneumonoultramicroscopicsilicavolcanoconiosis")

// const arrow_count_vow = (string) => {
//     let count = 0
//     for (const char of string) {
//         // cons ole.log(char);
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++; 
//         }
//     } f
//     console.log(count);
// }
// arrow_count_vow("pneumonoultramicroscopicsilicavolcanoconiosis")


// ForEach loop
// let fo_ea = [1, 6, 5, 9, 3, 2, 7, 8, 4]

// fo_ea.forEach((num) => {
//     num *= num
//     console.log(num)
// });
// console.log(window)

// DOM===>>Document Object Model-------------------------------------------------------------------->>

// let h1 = document.querySelector("h1")

// h1.addEventListener("click", function () {
//     h1.innerHTML = "Yes sir! I'm tryin to make a proper functioning bulb"
// })

// let bulb = document.querySelector("#bulb")
// let button = document.querySelector("button")

// let click = 0;
// button.addEventListener("click", function () {
//     if (click == 0) {
//         button.innerHTML = "OFF"
//         button.style.backgroundColor = "red"
//         button.style.color = "#000"
//         button.style.cursor = "pointer"
//         bulb.style.backgroundColor = "yellow"
//         click++
//     }
//     else {
//         button.innerHTML = "ON"
//         button.style.backgroundColor = "blue"
//         button.style.color = "#fff"
//         bulb.style.backgroundColor = "transparent"
//         click--
//     }
// })









