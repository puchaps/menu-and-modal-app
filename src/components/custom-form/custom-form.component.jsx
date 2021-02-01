import './custom-from.styles.scss';

const CustomForm = ({...otherProps}) => {
  return (
    <input {...otherProps} />
  );
};

export default CustomForm