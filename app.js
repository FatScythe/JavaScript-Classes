// var age = 30;
// console.log(age);

// age = 25;
// console.log(age);

// age = !true;
// console.log(age);

// Strings
let email = 'holadhayo28@gmail.com';
// console.log(email);

// Concatenation

// let firstName = 'Abdullahi';
// let lastName = 'Fahm';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// getting character on a string
// console.log(fullName[13]);


//string length
// console.log(fullName.length);

// string methods
// console.log(fullName.toUpperCase());
// let lowerCase = fullName.toLowerCase();
// console.log(lowerCase, fullName);

// gets the index of characters in the string
// let index = email.indexOf('8');

// The last of (multiple character) 'o' in holadhayo28@gmail.com is index 19
// let index = email.lastIndexOf('o');

// slices the first 5 character
// let index = email.slice(0,5);

// slices from 3 and gets 5 character of the string
// let index = email.substr(3,5);

// replaces characters in the string
// let index = email.replace('h','q');


let numbers = ['9', '2', '33'];

// for(i = 0; i < numbers.length; i++){
//     console.log('Code is running', i);
// }

// i = 0;
// while(i < numbers.length) {
//     console.log('Code', i);
//     i++;
// }
// i = 1;
// do{
//     console.log("code", i);
//     i++;
// } while(i < numbers.length);

// numbers.sort();
// console.log(numbers[1]); Ans.33

// console.log(index);

// Numbers
// let radius = 2;
// const pi = Math.PI;

// math Operator (+, -, /, *, **, %)

// console.log(radius, pi);

// let likes = 10;
// likes ++
// likes --
// likes = likes + 1;
// likes += 10;
// likes *= 2;
// likes /= 2;
// console.log(likes);

//NaN - not a number
// console.log(5 * 'hello');

// let result = 'The blog has' + ' ' + likes +  ' ' + 'likes';

// Template Strings
// let result = `The blog has ${likes} likes`;
// console.log(result);

// let html = `<h2>Best Reads of 2021</h2>
// <p>By Abdullahi Fahm</p>
// <span>This blog has ${likes} likes</span>`;
// console.log(html);

//Arrays

// let scythe = ['luffy', 'eren', 'tanjiro'];
// console.log(scythe);

// Locating in arrays
// console.log(scythe[1]);

// reassigning in arrays
// scythe[2] = 'ichigo';
// console.log(scythe[2]);

// let random = ['idk', 45, 'y', 6];
// console.log(random[2]);

// let ages = [30, 19, 25];
// console.log(ages.length);

// Array method
// let result = scythe.join('- ');
// let result = scythe.indexOf('luffy');
// let result = scythe.concat(random);
// let result = scythe.concat(['die', 'fight', 'live', 7]);
// destructive value some methods adds to the original array
// let result = scythe.push('ken');
// result = scythe.pop();

// console.log(scythe);
 
// console.log(result);

//Null and Underfined

// undefined
// let nm;

//null 

// let nm = null;

// console.log(nm);

//Boolean
// console.log(true, false, 'true', 'false');


// let result = email.includes('@');

// let array = [ 'arr1', 'arr2', 'arr3'];
// let result = array.includes('arr2');

// console.log(result);

// let age = 22;

// console.log(age == 22);

// console.log(age != 22);
// console.log(age != '22');
// console.log(age !== '22');

// console.log(age <= 22);

// console.log(age == '22');
// console.log(age === '22');

// let name = 'shaun';

// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// console.log(name > 'Shaun');
// console.log(name == 'crystal');
// console.log(name > 'crystal');

// Type Conversion

// String to number
// let score = '100';

// score = Number(score);
// console.log(score, typeof(score) );

// Number to string
// let age = 25;

// age = String(age);
// console.log(age, typeof age)

// let result = Boolean(0); false

// let result = Boolean(-12); //true for any other no. bar zero;

// let result = Boolean('anything');  //true except an empty string

// console.log(result, typeof result);


// CONTROL FLOWS
// LOOPS
// for loops

// for(let i = 0; i < 6; i++){
//     console.log('in loop', i);
// }
//   console.log('out of loop');

// let scythe = ['Abdullahi', 'Fahm', 'Oladayo', 'Babatunde'];

// for(i = 0; i < scythe.length; i++) {
//     let html = `<div>${scythe[i]}</div>`;
//     console.log(html);
// }

// While loop : an alternative to the for loop

// let i = 0;
// while(i < 5){
//     console.log('in the loop', i);
//     i++;
// }

// let i = 0;
// while(i < scythe.length){
//     console.log(scythe[i]);
//     i++;
// }

// Do while loop runs like a loop but can run the code atleast once even if the conditions are met

// i = 1;
// do {
//     console.log('code', i);
//     i++;
// } while(i < scythe.length);

// CONDITIONAL STATEMENT

// IF STATEMENT
// if(scythe[1].includes('Fahm')) {
    // console.log('yes!');
// } 

//ELSE AND ELSE IF
// const userPassword = prompt('What is your password', '');

// if(userPassword.length < 8) {
//     alert('This password is weak Try Again!!!');
// } else if(userPassword.length > 8) {
//     alert('This password is strong')
// } else{
//     console.log('What!');
// }

// LOGICAL OPERATOR AND &&, OR ||

// const password = prompt("What is your password", '');

// if(password.length = 8 && password.includes('@')){
//     console.log('Perfect')
//  }else if(password.length < 8 || password.indexOf('N') == 0){
//     console.log('weak');
// }else {
//     console.log('What!');
// }

//Logical NOT !

// let user = false;

// if(!user){
//     console.log('You are logged in',  !user);
// }


// Break and Continue
// const scores = [30, 20, 0, 90, 100 ,60];

// for(i = 0; i < scores.length; i++){
    // Only skips Zero and iterate the rest
    // if(scores[i] === 0){ 
        // continue;
    // }
    // console.log('your score', scores[i]);
    // Skips everything after 90
    // if(scores[i] === 90){ 
        // console.log('you scored 90');
        // break;
    // }
// }

// Switch Statement

// const grade = 'C';

// switch(grade) {
//     case 'A':
//         console.log('You got A!');
//         break;
//     case 'B':
//         console.log('You got B!');
//         break;
//     case 'C':
//         console.log('You got C!');
//         break;
//     case 'D':
//         console.log('You got D!');
//         break;
//     case 'E':
//         console.log('You got E!');
//         break;
//     case 'F':
//         console.log('You got F!');
//         break;
//     default:
//         console.log('Invalid grade!');
// }

// Variable and Block, local  & global Scope

// NB: var doesnot work for global and local scope also const cannot be reassigned

// let age = 22;

// if(true){
//     let age = 30;
//     let name = 'Fahm'
//     console.log('inside the block', age, name);

//     if(true){
//         age = 34;
//         console.log('nested block', age, name);
//     }    
// }

// console.log('outside the block', age, name)

// FUNCTIONS

// Function declarartion
// NB function declaration is always hoisted to the top i.e it can be invoked or call befor it has been declared

// greet();
// greet();
// greet();

// function greet() {
//     console.log('Good morning');
// }

// Function expression
//speak(); 
//The above cannot work since expression are not hoisted to the top

// speak = function() {
//     console.log('Fahm, How are you?, This fine morning');
// };

// function expression code block always end with ';'

// speak();

// Function Arguments and Parameters

// name and time are the Parameters
// speak = function(name = 'Zorro', time = 'night') {
//     console.log(`${name}, How are you?, This fine ${time}`);
// };

//Fahm and morning are the argument, argument also follow the order of the parameters
// speak('Fahm', 'morning');
// speak();
// speak('Fardah');
// speak(`Furqan`, `${time}`); // time is not defined outside the block scope

// RETURNING VALUES
// let calcArea = function(radius) {
//     return Math.PI * radius ** 2;
// };


// console.log(calcArea(5))
// const area = calcArea(5);
// console.log(area);


// let sayPhrase = function(name = 'Fahm') {
//     return `Go rock, ${name}!!!`;
// };

// let sayPhrase = name => `Go rock, ${name}`;

// let phrase = sayPhrase('Fahm');

// console.log(phrase);



//ARROW FUNCTION

// let calcArea = (radius) => {
//     return Math.PI * radius ** 2;
// };

// for only one parameter, we can take the bracket of the parameter i.e
// let calcArea = radius => {
//     return Math.PI * radius ** 2;
// };

// if return is on one line, we can do this
// let calcArea = radius => Math.PI * radius ** 2;

// let area = calcArea(5);

// console.log(area);



// let greet = () => 'hello, world';

// let result = greet();

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i=0; i < products.length; i++){
//         total += products[i] + products[i] + tax;
//     }
//     return total;
// };

// let result = bill([20,60,47], 0.5);
// console.log(result);



// Function vs Method

// Methods are Functions but the differrence is that method are invoked on a datatype e.g string, by using '.' symbols

// let name = 'Fahm' ;

// Function

// let phrase = () => 'Abracadabra';

// let resultOne = phrase();

// console.log(resultOne);

// Method 

// let resultTwo = name.toUpperCase();

// console.log(resultTwo);


// Callbacks $ forEach Method

// Callbacks
// Callback functions are functions that are passsed into another function as an argument

// const myFunc = (callBackFunc) => {
//     let value = 50;
//     callBackFunc(value);
// }


// myFunc(value => {
//     console.log(value);
// });

// ForEach() Method

// let users = ['Fahm', 'Faridah', 'holadhayo28', 'Scythe', 'Phamdeen'];

// let logUser = (user, index) => {
//     console.log(index , user)
// };

// users.forEach(logUser);

// logUser is a callback function

//OR THE EASIER METHOD

// users.forEach((user, index) => {
//     console.log(`${index}- ${user}`)
// })


//MORE forEach() usecase

// let ul = document.querySelector('.users');

// let users = ['Fahm', 'Faridah', 'holadhayo28', 'Scythe', 'Phamdeen'];

// let html = '';

// users.forEach(user => {
    // html += `<li style = "color: purple; font-size: 40px;">${user}</li>`;
//OR
    // ul.innerHTML += `<li style = "color: red; font-size: 40px;">${user}</li>`;
// });

// console.log(html);
// ul.innerHTML += html;




// Function declaration

// speak();

// function speak(){
//     console.log('Hello there!');
// }

// Function expression
// let speak = function() {
//     console.log('Hello there!');   
// };

// Arrow Function
// let speak = () => {
//     console.log('Hello there!');
// }



// let girls = ['Oyinkansola', 'Omolewa', 'Olajumoke', 'Basirah', 'Ajoke'];

// girls.forEach((girl) =>{
//     console.log('The prettiest girl I know!');
// })

// OR

// girls.forEach(function(girl, index){
//     console.log('Beautiful eyes');
// })

// OR

// let logGirls = () => {
//     console.log('Has the best personality')
// }

// girls.forEach(girl => {
//     logGirls();
// })

// OBJECT LITERALS

// const user = {
//     names: ['Fahm', 'Abdullahi', 'Oladayo', 'Babatunde', 'Junior'],
//     age: 30,
//     email: 'holadhayo28@gmail.com',
//     location: 'Lagos',
//     intrests: ['movies', 'games', 'coding', 'food'],
    // logIn: function(){
    //     console.log("You're logged in");
    // },
    //OR
//     logIn(){
//         console.log("You're logged in");
//     },
//     logOut: function(){
//         console.log("You're logged out!");
//     },

//     logIntrest: function(){
//         // console.log(this);
//         console.log('These are some of Fahm intrest:');
//         this.intrests.forEach((intrest) => {
//             console.log(intrest);
//         });
//     }

// };

// console.log(user);
// console.log(user.names[0]);


// console.log(user.age);

// reassigning objects property-value

// user.age = 22;
// we can also access an object like so:

// dot notation
// console.log(user.age);

// square bracket notation
// console.log(user['location']);
 
// console.log(typeof user);

// Adding Methods/ Anonymous function
// user.logIn();
// user.logOut();

// 'this' keyword
// NB: Arrow function cannot be used with the 'this' keyword as it will refer to the windows object i.e
// console.log(this);
    // user.logIntrest();

// Objects in Arrays

// const blogs = [{title: 'Flex vs grid', likes: 5}, 
//               {title: 'Best hosting Platform', likes: 10},
//               {title: 'React vs Vue', likes : 9} ]

// console.log(blogs);

// let news = {
//     author: 'Abdullahi, Fahm Oladayo',
//     blogs: [
//         {title: 'Flex vs grid', likes: 5}, 
//         {title: 'Best hosting Platform', likes: 10},
//         { title: 'React vs Vue', likes : 9} 
//     ],
//     logBlogs(){
//         // console.log(this.blogs);
//         this.blogs.forEach((blog, index) => {
//             // console.log(blog.title);
//             console.log(`${index + 1}. ${blog.title}
//                 likes: ${blog.likes}`);
//         });
//     }
// };

// console.log(`Here are some blogs written by ${news['author']}`);
// news.logBlogs();



// Math Object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.LN2);

// let x = 5.9;
// rounds up and down decimal no.
// console.log(Math.round(x));
// rounds down to its lowest
// console.log(Math.floor(x));
// rounds up to its highest
// console.log(Math.ceil(x));
// Takes away the decimal and leaves the integer
// console.log(Math.trunc(x));

// How to generate random numbers
// let random = Math.random(); // random decimal no. btwn 0 and 1

// console.log(random);

//Random integer btw 0-100
// console.log(Math.round(random * 100));

//Primitive vs Reference type

// Primitive types include :
// numbers
// strings
// Boolean
// null
// undefined
// symbols and are stored in the 'stack' 

// e.g
// let scoreOne = 100;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}, scoreTwo : ${scoreTwo}`);

// scoreOne = 50;
// after reassigning scoretwo remains the same even though scoreone as been changed this is because 
// data for primitive types are stored in the stack seperately

// console.log(`scoreOne: ${scoreOne}, scoreTwo : ${scoreTwo}`);


// Reference type includes all types of objects i.e:
// Array
// function
// Object literal
// dates... and are stored in the 'heap'

// e.g
// let userOne = {
//     name: 'Fahm',
//     age: '22'
// };

// let userTwo = userOne;

// console.log(userOne, userTwo);

// userOne['name'] = 'Qudus';
// userOne.age = 30;
//after reassigning you will notice that unlike the primitive types the data changed thats 
// because the object data was not stored in the stack rather a pointer that acts as referencing 
// for the object data in the stack is stored in the stack, therefore when object is updated the pointers are also updated 
// console.log(userOne, userTwo);



// The Document object model{DOM}

// Query Selector
// const p1 = document.querySelector('p');

// console.log(p1);

// const pTag = document.querySelectorAll('p');

// console.log(pTag);

// Other ways to query the DOM

// get an Elememt by ID
// const demo = document.getElementById('demo');
// console.log(demo);

// get Elements by ClassName
// const headers = document.getElementsByClassName('Heading');
// console.log(headers);

// TagName and ClassName returns an HTML collection which is not suitable for the forEach method unlike the query selector 
// which returns a Nodelist except you use Array.from to convert it to an array

// get elements by their Tag Name

// const pTag = document.getElementsByTagName('p');
// console.log(pTag);

// Adding and Changing a page content

// const pTag = document.querySelectorAll('p');

// pTag.forEach(p => {
//     // console.log('yes!');
//     p.innerText += ' iteration';
// }); 

// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML += `<a href="www.google.com">Added a link tag</a>`

// let people = ['Fahm', 'moon', 'qudus'];

// people.forEach((person, index) => {
//     content.innerHTML += `<p>${index + 1} ${person} </p>`;
// });

// Getting and Setting HTML attributes 

// const link = document.querySelector('a');
// getAttribute('...')
// console.log(link.getAttribute('href'));

// setAttribute('...','...')

// link.setAttribute('href', 'www.suprise.com');

// we can also set atttribute that as not been created in the Html doc

// content.setAttribute('style', 'color: purple; font-size: 30px;');

// content.setAttribute('class', '.empty');


// Changing CSS Styles
//NB: The SetAttribute is not the ideal method to change the style of an element 
// because it overwrites the previous attributes of elements.
//NB: This method is also not efficient, it best to just write styles in the stylesheet and manipulate with JS

// const header = document.querySelector('.h1');

// console.log(header.style);

// header.style.color = 'dodgerblue';

// Properties with '-' are written in camelCase
// header.style.fontSize = '30px';

// to delete a style rep. with an empty string
// header.style.margin = '';



// Adding and Removing Classes

// const pTag = document.querySelector('body > p:nth-child(17)');

// to check the class of an element
// console.log(pTag.classList);

// pTag.classList.add('error');
//Remove
// pTag.classList.remove('error');
//Adding
// pTag.classList.add('sucess');


// Assignment

// const paragraphs = document.querySelectorAll('p');

// console.log(paragraphs);
// NB: innerText only shows the text that are not hidden while textContent shows all. Hence, why its better to use textContent
// paragraphs.forEach(paragraph => {
    // if(paragraph.innerText.includes('error')){
    //     paragraph.classList.add('error');
    // }
//     if(paragraph.textContent.includes('error')){
//         paragraph.classList.add('error');
//     }
//     if(paragraph.textContent.includes('success')) {
//         paragraph.classList.add('success');
//     }
// });

// Toggle a class

// const title = document.querySelector('.title');

//To add a class list you toggle first 
// title.classList.toggle('test');

// To remove the class list you toggle again and so on and so forth
// title.classList.toggle('test');


// Node relations
// Parents, children & siblings

// const article = document.querySelector('article');

// Children
// console.log(article.children);

// Since we can cycle through an html collection we need to convert it into an Array or a node list
// console.log(Array.from(article.children));

// Array.from(article.children).forEach(child => {
//     child.classList.add('article-elements');
// });

// Parent 
// const title = document.querySelector('article h2');
// console.log(title.parentElement);
//Chaining
// console.log(title.parentElement.parentElement);

// Siblings

// next sibling
// console.log(title.nextElementSibling);

//Previous sibling
// console.log(title.previousElementSibling);

// NB: One can also perform complex chaining

// console.log(title.nextElementSibling.parentElement.parentElement.children)

// Event Basics (Click Event)

const button = document.querySelector('aside button');
// console.log(button);

//The event parameter is the browser telling you an event is happening
button.addEventListener('click', () => {
    // alert('Why did you click me?!')
    // console.log(event.target);

    // To create Element
    const li = document.createElement('li');
    li.textContent = 'Hi, there!';
    // to create element under
    ul.append(li);
    //to create element above
    // ul.prepend(li);
});


// Creating and Removing Elements

const ul = document.querySelector('aside ul');
// To remove elements
// ul.remove();

// To create Elements
// const li = document.createElement('li');
// li.textContent = 'Hi, there!';

// to create element under
// ul.append(li);

//to create element above
// ul.prepend(li);





const items = document.querySelectorAll('aside li');
// console.log(items);
// items.forEach(item => {
//     item.addEventListener('click', (e) => {
        // e.target.style.textDecoration = 'line-through';
        // OR
        // e.target is preferred as you might not always be cycling through an array or a node list
        // item.style.textDecoration = 'line-through';
            // console.log('event in li');    
//         e.target.remove();
//     });
// });


// Event Bubbling and Delegation
// Event Bubbling : Basically what this is about is that events in an elements bubbles up to its parents, 
// then its parents and so on and so forth. Example: A <ul/> with an <li/> as its child say the <li/> as 
// a click event and the <ul/> also has a click event, when the <li/> is clicked the <li/> fires its call back function first 
// and its executed b4 the <ul/> callback function is executed and the only way to stop this is by using the method 'stopPropagation()'   



// ul.addEventListener('click', () => {
//     console.log('event in ul');
// });


// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         console.log('event in li');
//         e.stopPropagation(); // Now it will stop firing up events in Ul when it's clicked
//         e.target.remove();
//     });
// });

// Event Delegation
// Notice that on the to do list new items do not deleted when clicked and the way to fix that is by event delegation
// Also it more efficient than the former

ul.addEventListener('click', function(e){
    // console.log(e) // Now search for the tagName under the target and we put a condition
    if(e.target.tagName === 'LI') {
    // Notice the capital letter used for 'li' because that how it's displayed on the browser
       e.target.remove() ;
    }
});

// More DOM Events

// Copy Event

let copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    alert('That paragraph belong to a copyright');
})


// Mousemove Event

let move = document.querySelector('.box');

move.addEventListener('mousemove', e => {
    // console.log(e.offsetX, e.offsetY);
    move.textContent = `X- position: ${e.offsetX}, Y- position: ${e.offsetY}`
});

// Wheel Event: tell what part of the page you are on scrolling on

// document.addEventListener('wheel', e => {
//     console.log(e.pageX, e.pageY);
// });

// Form Event
// When querying the form to do something, its better to query the <form/> element itself rather than 
// the submit button this is because error shuold be seen b4 info is submit (once the user press enter on an input field all error will show)

// const form = document.querySelector('.signup-form');
// const username = document.querySelector('#uname');

// Submit event fires when the user click submit and when the user click enter of an input field
// form.addEventListener('submit', e => {
// When user clicks the submit button the default action of the browser is to refresh the page to prevent this we use a method on the event
    // e.preventDefault();
    // the value property gets us the data inside an input fiels
  // there a 3 ways to query the input field, the first is by the id
    // console.log(this.uname.value);
    // OR by querying the Dom 
    // console.log(form.username.value)
    //OR by the input name
    // console.log(form.username.value);
// });



// Regular Expression
// ^ - it must be at the start
// $ - it must be at the end

// /^Fahm$/ - i.e it would only accept the word 'Fahm' 

// / ^[a-zA-Z0-9]{6,10}/ - i.e all letters btw A-z upperCase or lowercase, numbers and a minimum of 6 character and a max of 10

// / ^[a-gJ-Z0-9]{8,16}/ - i.e all letters upperCase btw J-Z or lowercase btw a-g, numbers and a minimum of 8 character and a max of 16

// /^.{6,10}$ / - i.e Anything goes as long as it is between 6 to 10 characters


// testing RegEx

// const name = prompt('', 'What is your name?');
// This condition means it must start at the beginning btw lowercase a-z and no. 0-9 with minimum of 4 character and maximum of infinity and it must be at the end too.
// const pattern = /^[a-z0-9]{4,}$/;

// This condition differs from the above because it means it doesnot have to be at the start and end and you can put in any other character as long as it doesnot break the original rule. 
// const pattern = /[a-z]{4,16}/; 

// To test a RegEx pattern we use the '.test()' method and it gives a boolean (true or false);
// let result = pattern.test(name);

// console.log(result);


// if(result) {
//     console.log('test passed');
// }else {
//     console.log('test failed');
// }

// Search: Unlike the test this search for the position of the regex, if its = -1 then it couldnot find it 
// const name = '';

// let result = name.search(pattern);

// console.log(result);

// Basic Form Validation

const form = document.querySelector('.signup-form');
const inputBorder = document.querySelector('.signup-form input');
const feedback = document.querySelector('.feedback');

const pattern = /^[A-Za-z0-9]{6,16}$/

form.addEventListener('submit', e => {
    e.preventDefault();
    let formInput = form.username.value;
    if(pattern.test(formInput)){
        // inputBorder.style.border = '2px solid green';
        feedback.style.display = 'block';
        feedback.textContent = 'The username is valid';
    } else {
        // inputBorder.style.border = '2px solid red';
        feedback.style.display = 'block';
        feedback.textContent = 'The username must contain letters, numbers and be between 6 and 16 character';
    }
})

// Keyboard Event: Live Feedback
// Keyup i.e When a key is released

form.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value);
    if(pattern.test(form.username.value)){
        inputBorder.setAttribute('class', 'formSuccess');
        //setAttribute was used rather than classList.add or toggle in other to completely overwrite the class
    } else {
        inputBorder.setAttribute('class', 'formError');
    }
});



























 // document.getElementById('demo').innerHTML = Date();

 // alert('How are you?');

 // console.log('Hello World');

// console.log("Are you working?");



// function sayHi(name, time) {
// 	console.log(`Hello ${name}, good ${time}`);
// }

// Arrow function

// let sayHi = (name,time) => {
// 	console.log(`Hello ${name}, good ${time}`);
// }

// sayHi("Fahm", "morning");

// let T = new Date() ;
// let hour = T.getHours();
// let min = T.getMinutes();
// let sec = T.getSeconds();

//  function fullTime() {
//      console.log(`The hours is ${hour}, the minute is ${min} and the seconds is ${sec}`);
// }

//  Arrow function

// let fullTime = ( hour, min, sec) => {
//     console.log(`${hour}:${min}:${sec}`);   
// }

// fullTime( hour, min, sec);


// const pi = Math.PI;
// let r = Number(prompt("Enter the radius of the circle", "0"));
// let A = parseInt(2 * pi * Math.pow(r,2)); //convert it to interger and parseFloat converts it into decimal 

// function Area() {
//     console.log(`The area of the cicle is: ${A}`);
// }

// Arrow function

// let Area = (r,pi) => {
//     console.log(`The area of the cicle is: ${A}`)
// }

// Area(r,pi);


// Conditional Statement

    // to grade:

// let score = Number(prompt("What is your score?", "0"));

// if (score >= 70 && score <= 100) {
//     alert("You scored an \"A\"");
// } else if (score >= 60 && score <=69) {
//     alert("You scored \"B\"");
// } else if (score >= 50 && score <=59) {
//     alert("You scored \"C\"");
// } else if (score >= 40 && score <=49) {
//     alert("You scored \"D\"");
// } else if (score <=39 && score >= 0) {
//     alert("You scored \"F\"");
// } else {
//     alert("Enter a valid score for grading");
// }

// To check odd and even number

// let num = Number(prompt("Input your number", "0"));

// if (num % 2 === 0) {
//     alert("This is an even number");
// } else {
//     alert("This is a odd number");
// }

// SWITCH CASE


// For hard coding // let weather = "rainy";

// switch(prompt("What is the weather")) {

//     case "sunny":
//         console.log("Go outside");
//         break;

//     case "windy":
//         console.log("stay indoors");
//         break;

//     case "rainy":
//         console.log("Bring an umbrella");
//         break;

//     default:
//         console.log("Not a valid weather");
//         break;
// }


// Using an array for switch break


// let weather = ["sunny", "rainy", "windy"]; 

// switch("weather[0]") {

//     case "weather[0]":
//         console.log(`Go outside since it is ${weather[0]}`);
//         break;

//     case "weather[1]":
//         console.log(`Bring an umbrella since it is ${weather[1]}`);
//         break;

//     case "weather[2]":
//         console.log(`stay indoors since it is ${weather[2]}`);
//         break;

//     default:
//         console.log("Not a valid weather");
//         break;
// }


// let num = prompt("Enter a number" , "0");

// switch(num) {
//     case "num % 2 == 0":
//     console.log("even number");
//     break;

//     default: 
//     console.log("odd number");
//     break;
// }


// FOR LOOP

// for(let g=0 ; g < 10; g++) {
//     console.log(g);
// }


// let weather = ["sunny", "rainy", "windy"]; 

// for(let f=0 ; f < weather.length; f++) {
//     console.log(weather[f]);
// }

// let result = 1;

// for(let i=0; i < 10; i++ ) {
//     result *= 2; 
// } 
// console.log(result);


// let weather = ["sunny", "rainy", "windy"]; 
// for(let f=0 ; f < weather.length; f++) {
//     if (weather[f] === "windy") {
//         continue;
//     }
//     console.log(weather[f]);
// }

// ASSIGNMENT ELOQUENT JS
// let hash = "#";
// for(h=0; h<7; h++) {
//     hash += "#"
//     if(hash === #######) {
//         continue;
//     }
// }
// console.log(hash);



// ASSIGNMENT

// for(let g = 2 ; g <= 10; g++) {
//     if(g % 2 === 0) {
//         console.log(`Even number: ${g}`);
//     }
// }

// for(let g=10; g > 0; g--) {
//     console.log(g);
// }

// for(let hash = "#" ; hash <= "#"; hash += "#") {
//         console.log(hash);
// }


// let input = [1,2,3,4,5,6,7,8,9,10];
// for(let g = input.length - 1; g >= 10; g--) {
//     console.log(g);
// }
//     console.log(g);


const h1One = document.querySelector("body > div:nth-child(4) > h1");
const h2One = document.querySelector("body > div:nth-child(4) > h2");
const pOne = document.querySelector("body > div:nth-child(4) > p:nth-child(3)");
const pTwo = document.querySelector("body > div:nth-child(4) > p:nth-child(4)");
const pThree = document.querySelector("#p3");
const pFour = document.querySelector("body > div:nth-child(4) > p:nth-child(6)");
const pFive = document.querySelector(".p5");

// h1One.innerHTML += `<span>Hi</span>`

// pOne.innerHTML = `<h1>Not the father</h1>`;

// pTwo.innerHTML = `<iframe src="index.html"></iframe>`;

// pThree.innerHTML = `<img src="lock.png" alt="image" height="30px" width="30px">`;

// pFour.textContent += "Overstackers";

// pFive.innerHTML = `<h2>Overstackers</h2>`;

// h2One.innerHTML = `<a href="http://google.com">Google.com</a>`;

// pOne.textContent = "Overstackers";
// pOne.innerText = "Not the father";

// console.log(h1One);



// DOM Manipulation


// let people = ["fahm", "moon", "qudus", "jum", "scythe"];

// let list = document.querySelector(".people");

// people.forEach((person, index ="a") => {
//     list.innerHTML +=`<li>${index}.${person}</li>`
// })


// const link = document.querySelector(".link");

// console.log(link.getAttribute("href"));

// console.log(link.setAttribute("href","http://www.yahoo.com"));


const css = document.querySelector("body > p");

css.setAttribute("class", "error");


let pSeven = document.querySelector(".p7");

pSeven.setAttribute("class", "success");

let h5One = document.querySelector("h5");

// h5One.classList.add("error");

// h5One.classList.remove("error");

//On and Off toggle

// h5One.classList.toggle("error");

// h5One.classList.toggle("error");

document.querySelector(".dead").style.background = "green";

document.querySelector(".dead").style.height = "50px";

document.querySelector(".dead").style.color = "white";

document.querySelector(".dead").style.fontSize = "2rem";

let div = document.querySelector(".div");

// console.log(div.children);

// console.log(h1One.parentElement);

// console.log(div.firstElementChild);

// console.log(div.lastElementChild);

// console.log(h1One.nextElementSibling);

// console.log(h1One.previousElementSibling);

Array.from(div.children).forEach((div) => {
    div.textContent += "Add me";
    div.classList.add("Sect");
})
