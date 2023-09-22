const app = document.querySelector('#app')

const div = document.createElement('div')
div.classList.add('container')
div.style.backgroundColor= 'red'
div.innerText = 'Hello World'
div.setAttribute('type, text')

div.addEventListener('click',()=>{
  div.style.backgroundColor = 'blue'
})
app.appendChild(div)