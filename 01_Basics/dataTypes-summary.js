// Stack(Primitive) , Heap(Non-Primitive)

let youtubeName = "Goan Avik";
let anotherName = youtubeName;
anotherName = "I am avik.";

console.log(youtubeName);
console.log(anotherName);

let userOne = {

    email: "anupborker@gmail.com",
    upi: "aNUP@ybl"
}

let userTwo = userOne 
userTwo.email = "anup@ANupbk.com"

console.log(userOne);
console.log(userTwo);