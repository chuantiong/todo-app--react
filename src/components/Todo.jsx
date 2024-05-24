import React, { useState } from 'react';
import { useDataContext } from '../contexts/DataContext';
import Checkbox from "./Checkbox";
import closeIcon from "../assets/images/icon-cross.svg";

const Todo = (props) => {
    const { id, text, isChecked } = props;
    const [toggleChecked, setToggleChecked] = useState(isChecked);
    const [closeTodo, setCloseTodo] = useState(false);
    const { newData, setNewData } = useDataContext();

    const toggleCheckbox = () => {
        setToggleChecked(prevState => !prevState);
        setNewData(prevData =>
            prevData.map(item =>
                item.id === id ? { ...item, isChecked: !toggleChecked } : item
            )
        );
    };

    const handleCloseClick = () => {
        setNewData(prevData => prevData.filter(item => item.id !== id));
        setCloseTodo(true);
    };

    return (
        <>
            <div className={closeTodo ? 'todo hide' : 'todo'}>
                <Checkbox toggleChecked={toggleChecked} onClick={toggleCheckbox}/>
                <div
                    className="todo__label"
                    onClick={toggleCheckbox}
                >{text}</div>
                <img
                    className='todo__close-icon'
                    src={closeIcon}
                    alt="Close icon"
                    onClick={handleCloseClick}
                />
            </div>
            {newData.length > 1 ? <hr /> : ''}
        </>
    );
};

export default Todo;