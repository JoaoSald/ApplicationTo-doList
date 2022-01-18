const formAddTodo = document.querySelector('.form-add-todo')
const todosContainer = document.querySelector('.todos-container')

formAddTodo.addEventListener('submit', evento => {
    evento.preventDefault()

    const inputValue = evento.target.add.value.trim() // metodo trim remove espaços em branco no inicio/fim
    if(inputValue.length){
          todosContainer.innerHTML += `  
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${inputValue}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`

  evento.target.reset() //limpa o input
    }
  
})
