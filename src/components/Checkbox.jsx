import React, { useState } from 'react';
import checkIcon from '../assets/images/icon-check.svg';

const Checkbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(prevState => !prevState);
    };

    return (
        <div className="checkbox">
            <span
                className={isChecked ? 'checkbox__checked' : 'checkbox__unchecked'}
                onClick={toggleCheckbox}
            >
                {isChecked ?
                    <span className="checkbox__checked">
                        <img className="checkbox__checked-icon" src={checkIcon} alt="Check icon" />
                    </span>
                : ''}
            </span>
        </div>
    );
};

export default Checkbox;