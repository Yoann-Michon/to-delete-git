const app = document.querySelector('#app')

const div = document.createElement('div')
div.classList.add('container')

const input = document.createElement('input')
input.setAttribute('type', 'text')

const button=document.createElement('button')
button.setAttribute('type', 'button')
button.style.width = '40px';
button.style.height = '15px';

div.addEventListener('click',()=>{

})

div.appendChild(input)
div.appendChild(button)
app.appendChild(div)