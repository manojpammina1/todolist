import TodoInput from "../components/TodoInput.jsx";
import TodoList from "../components/TodoList.jsx";
import {useState, useEffect} from "react";

function App() {

    const [todos, setTodos] = useState( [])
    const [todoValue, setTodoValue] = useState('')

    function persistTodos(newTodoList) {
        localStorage.setItem('todos', JSON.stringify(newTodoList))
    }

    function handelAddTodos(newTodo) {
        const newTodoList =[...todos, newTodo]
        persistTodos(newTodoList);
        setTodos(newTodoList)
    }

    function handelDeleteTodo(index) {
        const newTodoList = todos.filter((todo, todoIndex) => {
            return todoIndex !== index
        })
        persistTodos(newTodoList);
        setTodos(newTodoList);
    }
    function handelEditTodo(index) {
        const valueToBeEdited = todos[index]
        setTodoValue(valueToBeEdited)
        handelDeleteTodo(index);
    }

    useEffect(() => {

        if(!localStorage){
            return
        }

        let data = localStorage.getItem('todos');
        if(!data) {
            return
        }
        setTodos(JSON.parse(data))
    }, []);

  return (
    <>
        <TodoInput todoValue = {todoValue} setTodoValue = {setTodoValue} handelAddTodos={handelAddTodos}/>
        <TodoList todos={todos} handelDeleteTodo = {handelDeleteTodo} handelEditTodo={handelEditTodo} />
    </>
  )
}

export default App
