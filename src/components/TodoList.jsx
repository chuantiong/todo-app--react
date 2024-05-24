import { useDataContext } from "../contexts/DataContext";
import Todo from "./Todo";

const TodoList = () => {
    const { newData } = useDataContext();

    return (
        <div className="todo-list">
            {newData.map(item => (
                <Todo
                    key={item.id}
                    id={item.id}
                    text={item.todo}
                    isChecked={item.isChecked}
                />
            ))}
        </div>
    );
};

export default TodoList;