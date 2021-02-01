import './custom-button.styles.scss';

const CustomButton = ({children, type = '', ...otherProps}) => {
  return (
    <button className={`custom-button ${type}`}{...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;