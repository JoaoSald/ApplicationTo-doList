
const formAddTodo = document.querySelector('.form-add-todo')
const ulList = document.querySelector('.todos-container')
const formSearchTodo = document.querySelector('.form-search')

// adiciona novo elemento na lista 
formAddTodo.addEventListener('submit', evento =>
{

  evento.preventDefault()
  const inputValue = evento.target.add.value.trim() 

    if(inputValue.length)
    {
      ulList.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt delete"></i>
      </li> `
      evento.target.reset()
    }
})

ulList.addEventListener('click', evento=>{

  const clickedElement = evento.target
  if(Array.from(clickedElement.classList).includes('delete')){
    clickedElement.parentElement.remove()
  }
})


formSearchTodo.addEventListener('input', evento => {
  const inputValue = evento.target.value.trim()
  Array.from(ulList.children)
  .filter(todo => !todo.textContent.includes(inputValue))
  .forEach(todo => {

    todo.classList.remove('d-flex')
    todo.classList.add('hidden')
  })
  Array.from(ulList.children)
  .filter(todo => todo.textContent.includes(inputValue))
  .forEach(todo => {

    todo.classList.remove('hidden')
    todo.classList.add('d-flex')
  })
})