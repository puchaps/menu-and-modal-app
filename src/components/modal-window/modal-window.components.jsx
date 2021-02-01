import CustomButton from '../custom-button/custom-button.component';
import CustomForm from '../custom-form/custom-form.component';
import './modal-window.styles.scss';

const ModalWindow = ({ handleToggleModal, toggle }) => {
  return (
    <div className={`modal-window ${toggle ? 'active' : 'hide'}`}>
      <div className="modal-window-block">
        <span className="title">Please sign in</span>
        <span className="subtitle">Signin to manage your account</span>
        <span className="modal-window-close" onClick = {handleToggleModal}>
          &#10006;
        </span>
        <form>
          <CustomForm
            type = 'text'
            placeholder = 'Email'
          />
          <CustomForm
            type = 'password'
            placeholder = 'Password'
          />
          <CustomButton type = 'google'>
            Sign With Google
          </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default ModalWindow