const app = document.querySelector('#app')

const form = document.createElement('div')
form.classList.add('container')

const list= document.createElement('ul')

const input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('placeholder' , 'Rentre ici ce que tu as à faire !');
input.setAttribute('id', 'myInput');
input.setAttribute('class', 'form__field');

const button=document.createElement('button')
button.setAttribute('type', 'button')
button.setAttribute('class', "glow-on-hover");
button.innerHTML = 'Submit';

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