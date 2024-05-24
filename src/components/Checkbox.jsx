import checkIcon from '../assets/images/icon-check.svg';

const Checkbox = (props) => {

    return (
        <div className="checkbox" onClick={props.onClick}>
            <span
                className={props.toggleChecked ? 'checkbox__checked' : 'checkbox__unchecked'}
            >
                {props.toggleChecked ?
                    <span className="checkbox__checked">
                        <img className="checkbox__checked-icon" src={checkIcon} alt="Check icon" />
                    </span>
                : ''}
            </span>
        </div>
    );
};

export default Checkbox;