let K = "vague"
let L = 2
console.log(K + L)

const a = {
    name: "hero",
    class: 10,
    section: "D",
    Profession: "Doctor"
}
a["friend"] = "zero"
console.log(a)

const b = 3.14
// b = 3.1415 // b is already decleared

const dict = {
    sierra: "a chain of hills or mountains, the peaks of which suggest the teeth of a saw.",
    hallucinate: " to produce false information contrary to the intent of the user and present it as if true and factual.",
    repudiate: "to reject or refuse to accept something",
    deny: " to say something is not true",
    monkey: "a small to medium-sized primate that typically has a long tail, most kinds of which live in trees in tropical countries."
}

console.log(dict.monkey)
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


//Program to find whether a number is divisible by 2 and 3.

//  let x = prompt("Write a number!!")
// x = Number.parseInt(x)

// if (x%2==0 && x%3==0) {
//     console.log("x is completely divisible by 2 and 3")
// }

// else {
//     console.log("An error occurred!!")
// }

//Program to find whether a number is divisible by 2 or 3.

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



// let age = 18
// let y = age < 18 ? "you cannot drive" : "you can drive"
// console.log(y)

let age = prompt("What is your age?")
age = Number.parseInt(age)
console.log("you", (age < 18 ? "cannot drive" : "can drive"))


