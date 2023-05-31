
const TodoItems = ({ el, remove, checkTodo }) => {
    const removeTodo = () => {
        remove(el.id)
    }

    const check = () => {
        checkTodo(el.id)
    }
   
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h1 style={el.isChecked ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{el.value}</h1>
                <button onClick={removeTodo}>remove</button>
                <button onClick={check}>check</button>
            </div>
        </div>
    );
};

export default TodoItems;