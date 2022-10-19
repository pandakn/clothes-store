import SignInForm from "../../components/sign-in-form/SignInForm.jsx";
import SignUpForm from "../../components/sign-up-form/SignUpForm.jsx";

import './authentication.scss'

const Authentication = () => {
  return (
    <div>
      <div className="auth-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
