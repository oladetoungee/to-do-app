const form = document.getElementById('form')
const input = document.getElementById('input')
const todos = document.getElementById('todos')





form.addEventListener('submit', (e) => {
    e.preventDefault()

    addToDo()
    updateLS()
})

function addToDo() {
    const todoText = input.value

    if (todoText) {
        const todoEl = document.createElement("li");

        todoEl.innerText = todoText
        todos.appendChild(todoEl)

        form.input.value = ''
        updateLS()

        

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')

            updateLS()
        })

       todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
       })

        
    }
   
}
function updateLS() {
    const todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')

        })
    });

    localStorage.setItem('todos', JSON.stringify(todos))
}


  
