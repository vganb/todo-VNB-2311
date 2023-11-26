const API_URL = 'https://js1-todo-api.vercel.app/api/todos?apikey=6beacb49-b7de-44c2-bea1-c4e55368c070'
const todoList = document.querySelector('#todo-list')
const todoInput = document.querySelector('#todo-input')
// const todoBtn = document.querySelector('#todo-button')
const errorMessage = document.querySelector('#errorMessage')
const todoForm = document.querySelector('#todo-form')

const getTodoListArray = []

const getTodos = async () => {
    try{
        const res = await fetch(API_URL)
        if(res.status !== 200 ){
            console.log(res)
            throw new Error('Unable to fetch todos')
        }

        const todos = await res.json();
        



    } catch (error) {
    console.error(error.message)
    }
};

console.log(todoInput)

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

    const data = await response.json()
    console.log(data)

    createNewTodoElement()


})

function createNewTodoElement() {
let newListElement = document.createElement('li')
// console.log(newListElement)

newListElement.textContent = todoInput.value

todoList.appendChild(newListElement)
console.log(newListElement)
} 



// DELETE

    
    // const deleteResponse = await fetch(API_URL, {
    //     method:'DELETE',
    // });
    
    // if (deleteResponse.status !== 200) {
    //     // console.log('Unable to delete todo')
    //     console.log(deleteResponse)
    // }
    