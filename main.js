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
  const container = document.createElement('div');
  const val= input.value
  const li= document.createElement('li')
  const supp=document.createElement('button')
  supp.innerText='supprimer'
  supp.addEventListener('click',()=>{
    li.remove();
    supp.remove()
    check.remove()
  })
  li.innerText= val
  let myToDoArray = []
  myToDoArray.push(val);
  localStorage.setItem(val, JSON.stringify(false))
  const check = document.createElement('input');
  check.setAttribute('type', 'checkbox');
  check.addEventListener('change', () =>{
    if(check.checked){
      li.style.textDecoration = 'line-through';
      localStorage.setItem(myToDoArray, JSON.stringify(true));
    }else{
      li.style.textDecoration = 'none';
      localStorage.setItem(val, JSON.stringify(false));

    }

  })
  container.appendChild(supp)
  container.appendChild(check);
  container.appendChild(li);
  list.appendChild(container);

})



form.appendChild(input)
form.appendChild(button)

app.appendChild(form)
app.appendChild(list)