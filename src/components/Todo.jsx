import Checkbox from "./Checkbox";

const Todo = () => {
    return (
        <div className="todo">
            <Checkbox />
            <input
                className="todo__placeholder"
                type="text"
                placeholder="Create a new todo..."
            />
        </div>
    );
};

export default Todo;