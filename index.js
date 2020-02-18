// const name = 'Matt';

// console.log(name);

const heading = document.getElementById('heading-one');
// console.log(heading.innerText)
heading.innerText = 'Heading Value Changed';
heading.style.color = 'blue';

const unorderedList = document.querySelector('ul');
// console.log(unorderedList.className);

unorderedList.classList.add('unordered-list');
// console.log(unorderedList.className);

const listItems = document.getElementsByTagName('li')
// console.log(listItems)

const orderedList = document.querySelector('.ordered-list');
// console.log(orderedList)

const orderedItems = document.querySelectorAll('.ordered-items')
console.log(orderedItems)

const inputBox = document.getElementById('input-box')

function handleInput(){
    console.log(inputBox.value)
}

function handleClick(){
    console.log('Button clicked')
}

let inputValue = '';

document.getElementById('input-listener').addEventListener('keypress', function(event){
    inputValue = event.target.value;
    console.log(inputValue)
})

document.querySelector('.child').addEventListener('click', function(event){
    event.stopPropagation()
    console.log('Child clicked')
})

document.getElementById('form-btn').addEventListener('click', function(event){
    event.preventDefault();
    console.log('event prevented');
})

const headingTwo = document.createElement('h2');

headingTwo.innerText = 'I am a new element';

document.body.appendChild(headingTwo);

heading.remove();

const parentClass = document.querySelector('.parent').getAttribute('class');
// console.log(parentClass);

const parent = document.querySelector('.parent');

parent.setAttribute('id', 'parent-id');

console.log(parent.getAttribute('id'));

console.log(parent.parentNode)