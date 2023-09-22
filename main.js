const app = document.querySelector('#app')

const div = document.createElement('div')
div.classList.add('container')

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
  const val= document.querySelector('input').value
  alert(val)
})

div.addEventListener('click',()=>{

})

div.appendChild(input)
div.appendChild(button)
app.appendChild(div)