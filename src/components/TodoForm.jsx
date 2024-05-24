import React, { useState } from 'react';
import { useDataContext } from '../contexts/DataContext';
import NewTodo from './NewTodo';

const TodoForm = () => {
    const { data, setData, newData, setNewData } = useDataContext();

    const handleInputChange = (e) => {
        setData(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.todo.trim() === '') {
            return
        };
        // Example: Adding an ID to the new todo item
        const newTodoItem = { id: newData.length + 1, todo: data.todo, isChecked: false }; 
        setNewData(prevData => [...prevData, newTodoItem]);
        setData({ todo: '' });
    };

    console.log(newData)

    return (
        <form
            className="todo-form"
            onSubmit={handleSubmit}
        >
            <NewTodo
                name='todo'
                value={data.todo}
                onChange={handleInputChange}
            />
        </form>
    );
};

export default TodoForm;