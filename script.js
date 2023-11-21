const output = document.querySelector('#out')
const btn = document.querySelector('#btn')
const BASE_URL = 'https://js1-todo-api.vercel.app/api/todos?apikey=6beacb49-b7de-44c2-bea1-c4e55368c070'


const getPost = async () => {
    const res = await fetch(BASE_URL)

    // if(res.status !== 200){
    //     console.log('Errorrr')
    //     return
    // }
    const data = await res.json()


    console.log(res)
    console.log(data)
}
getPost()