import 'react'

function TodoCard(props) {

    const {children, handelDeleteTodo, index, handelEditTodo } = props;

    return (
        <li className='todoItem'>
            {children}
            <div className="actionsContainer">
                <button onClick={() => {
                    handelEditTodo(index)
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    handelDeleteTodo(index)
                }}>
                    <i className="fa-solid fa-trash" ></i>
                </button>
            </div>
        </li>
    )
}

export default TodoCard
