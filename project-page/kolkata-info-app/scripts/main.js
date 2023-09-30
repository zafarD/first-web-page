    //Basic
// const myHeading = document.querySelector("h1");
// myHeading.textContent =  "Hello Zafar!";

// document.querySelector("html").addEventListener("click", 
// function() { // () => {code block}; called a arrow function
//     alert("Ouch! Stop poking me!");
// });

let myBotton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name: ");
    if(!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to Kolkata The city of joy ${myName} !!!`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to Kolkata, The city of joy ${storedName} !!!`;
}

myButton.onclick = () => {
    setUserName();
};
