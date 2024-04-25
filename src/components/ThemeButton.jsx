import moonIcon from '../assets/images/icon-moon.svg';

const ThemeButton = () => {
    return (
        <button className='theme-btn'>
            <img
                className='theme-icon'
                src={moonIcon}
                alt="Moon icon"
            />
        </button>
    );
};

export default ThemeButton;