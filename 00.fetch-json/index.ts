import axios from 'axios';


interface Todo {
    id: number,
    title: string,
    completed: boolean;
    xad: "xad";
}

interface Test {
    xad: string;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((res) => {
    const todo = res.data as Todo;

    const ID = todo.id;
    const title = todo.title;
    const finished = todo.completed;

    logTodo(ID, title, finished);

});




const logTodo = (ID: number, title: string, finished: boolean) => {
    console.log(`
    The todo with ID: ${ID}
    Has a title of: ${title}
    Is it finisherd? ${finished}`);
};
