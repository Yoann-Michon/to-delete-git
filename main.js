const app = document.querySelector('#app')

const form = document.createElement('div')
form.classList.add('container')

const list= document.createElement('ul')

const input = document.createElement('input')
input.setAttribute('type', 'text')

const button=document.createElement('button')
button.setAttribute('type', 'button')
button.style.width = '40px';
button.style.height = '15px';

button.addEventListener('click',()=>{
  const val= input.value
  const li= document.createElement('li')
  li.innerText= val
  list.appendChild(li)
})


form.appendChild(input)
form.appendChild(button)

app.appendChild(form)
app.appendChild(list)
