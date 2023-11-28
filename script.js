const API_URL = 'https://js1-todo-api.vercel.app/api/todos?apikey=6beacb49-b7de-44c2-bea1-c4e55368c070'
const todoList = document.querySelector('#todo-list')
const todoInput = document.querySelector('#todo-input')
const errorMessage = document.querySelector('#errorMessage')
const todoForm = document.querySelector('#todo-form')

const getTodoListArray = []

const getTodos = async () => {
    try{
        const response = await fetch(API_URL)
        if(response.status !== 200 ){
            console.log(res)
            throw new Error('Unable to fetch todos')
        }

        const todos = await response.json();
        displayData(todos);


        
    } catch (error) {
        console.error(error.message)
    }
};

function displayData(todos) {
    todoList.innerHTML = ''
    
    todos.forEach(todo => {
        let newListElement = document.createElement('li')
        newListElement.textContent = todo.title

        let iconSpan = document.createElement('span')
        iconSpan.innerHTML = '<i class="fa-solid fa-trash"></i>';

        let deleteButton = document.createElement('button');
        deleteButton.appendChild(iconSpan)
        deleteButton.addEventListener('click', async () => {
            await deleteTodoItem(todo._id)
        })
        
        newListElement.appendChild(deleteButton)
        todoList.appendChild(newListElement)
    })

    async function deleteTodoItem(id){
        const deleteURL = `https://js1-todo-api.vercel.app/api/todos/${id}?apikey=6beacb49-b7de-44c2-bea1-c4e55368c070`
        const deleteResponse = await fetch(deleteURL, {
            method: 'DELETE',
        })
        
        if(deleteResponse.status !== 200) {
            console.log('Unable to delete todo')
            return
        }
        
        const todos = await deleteResponse.json()
        console.log(todos)
    }
    getTodos()
}

// console.log(todoInput)

todoForm.addEventListener('submit', async (event) =>{
    event.preventDefault()

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({title:todoInput.value})
    })
    console.log(response)
    if(response.status !== 201) {
        console.log('Something went wrong', response.status)
        return
    }

    todoInput.value = ''

    const data = await response.json()
    console.log(data)
})



getTodos()
