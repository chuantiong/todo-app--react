import Checkbox from "./Checkbox";

const NewTodo = (props) => {
    const { name, value, onChange } = props;

    return (
        <div className="todo">
            <Checkbox />
            <input
                className="todo__placeholder"
                type="text"
                placeholder="Create a new todo..."
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default NewTodo;