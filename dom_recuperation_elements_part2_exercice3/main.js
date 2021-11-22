// let myDiv = document.querySelector("#content")
// console.log(myDiv);

// let myDiv2 = document.querySelectorAll("div")[0]
// console.log(myDiv2);

// let myLi = document.querySelector(".important")
// console.log(myLi);

// let myLi2 = document.querySelectorAll("li")
// // console.log(myLi2);

// myLi2.forEach(element => {
//     // console.log(element.innerText.toLowerCase());
//     console.log(element.innerText.charAt(element.length -1).toUpperCase());
// });

// let monP = document.getElementById("content")
// monP = document.getElementsByClassName("grandParagraphe")
// console.log(monP);

//#################################################################

//1
let divContent = document.querySelector('#content')
console.log(divContent);

//2
let divContentAll = document.querySelectorAll('#content')
console.log(divContentAll);

//3 
let classImporant = document.querySelector('.important')
console.log(classImporant);

//4
let classImporantAll = document.querySelectorAll('.important')
console.log(classImporantAll);

classImporantAll.forEach(el => {
    let monText = el.textContent
    console.log(
            monText.substring(0, monText.length-1).toLowerCase() 
            + 
            monText.substring(monText.length-1).toUpperCase()
        );

});

//6
let idContent = document.getElementById('content')
console.log(idContent);
let paraGrand = document.getElementsByClassName('grandParagraphe')[0]
console.log(paraGrand);