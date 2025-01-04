import 'react'

function TodoInput(props) {

    const {handelAddTodos, todoValue, setTodoValue} = props;

    return (
        <header>
            <input value={todoValue} onChange={(event) => {
                setTodoValue(event.target.value);
            }} placeholder="Enter todo.."/>
            <button onClick={
                () => {
                    handelAddTodos(todoValue)
                    setTodoValue('');
                }
            }>Add</button>
        </header>
    )
}

export default TodoInput
