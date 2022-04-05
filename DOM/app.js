// let div = document.querySelector(".div");


// let paragraphs = document.querySelectorAll("p");

// paragraphs.forEach((paragraph) => {
// 	if(paragraph.textContent.includes("error")){
// 		paragraph.classList.toggle("error");
// 	}else if(paragraph.textContent.includes("success")) {
// 		paragraph.classList.add("success");
// 	}else {
// 		return;
// 	}
// })

// ASSIGNMENT USE ARRAY.CHILDREN TO DO THE ABOVE

// let tags = document.querySelector(".div");

// console.log(tags);

// Array.from(tags.children).forEach((tag) => {
// 	if(tag.textContent.includes("error")){
// 		tag.classList.add("error");
// 	}else if(tag.textContent.includes("success")){
// 		tag.classList.add("success");
// 	}else {
// 		tag.innerHTML += " does not contain success nor error"
// 		return;
// 	}
// })

// let div = document.querySelector('.div');
// console.log(div);

// Array.from(div.children).forEach((divs) => {
// 	if(divs.textContent.includes("red")){
// 		divs.textContent += 'you are red';
// 	}else if(divs.textContent.includes("blue")){
// 		divs.textContent += 'you are blue';
// 	}else {
// 		divs.innerHTML += " does not contain blue nor red"
// 		return;
// 	}
// })

//EVENT LISTENER

// const btn = document.querySelector(".btn");

// Normal Function
// function pressMe() {
// 	alert("\"Hi\"");
// }

// Arrow function
// let pressMe = () => {
// 	alert("\"Hi\"");
// }

// const add = document.querySelector("#demo");

// let pressMe = () => {
// 	add.textContent += " Add me";
// 	// add.innerHTML += "<p>Ipsium</p>"
// }

// btn.addEventListener("click", ()=> {
// 	alert("\"Hi\"");
// })

// function hi() {
// 	alert("\"Hi\"");
// }

// let hi = () => {
// 	alert("\"Hi\"");
// } 

// const h5One = document.querySelector("h5");

// let mouse = () => {
// 	h5One.style.color = "red";
// }

// let mouseOut = () => {
// 	h5One.style.color = "blue";
// }

// let mouseOver = () => {
// 	h5One.classList.add("mouseover");
// }

// let mouseOut = () => {
// 	h5One.classList.add("mouseout");
// }

//Experimenting
// if(h5One === onmouseout) {
// 	h5One.classList.add("mouseover");

// }else (h5One === onmouseover){
// 	h5One.classList.add("mouseout");
// }

// Use addEventListener("click/...") on the above
// Create a form and validate it
// Make a functioning calculator


// Assignment Solution

// let body = document.querySelector('body');

// window.addEventListener(('load'),(e) => {
// 	alert("\"Hi\"");
// })


// const btn = document.querySelector(".btn");

// // btn.addEventListener(('click'),(e) => {
// // 	alert("I've been clicked");
// // })

// btn.addEventListener('click',(e) => {
// 	alert("I've been clicked");
// })

//Test 
const btn = document.querySelector('button');
const ul = document.querySelector('ul');


btn.addEventListener('click', () => {
	let li = document.createElement('li');
	li.textContent = prompt('','Type a to-do item here') ;
	ul.append(li)
});

const items = document.querySelectorAll('ul');

// console.log(items);

items.forEach(item => {
	item.addEventListener('click', (e) => {
		// console.log('clicked');
		// console.log(e.target);
		// console.log(item);
		// e.target.style.textDecoration = 'line-through';
		e.target.remove(item);
	});
});












