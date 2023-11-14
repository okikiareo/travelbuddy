import lockIcon from "../assets/images/icon-lock.svg";
import showIcon from "../assets/images/icon-show.svg";
import backIcon from "../assets/images/icon-left.svg";
import { Form, Link } from "react-router-dom";

const Signup = ()=> {
    return(
<main className="signup">
<section className="signup_wrapper wrap flex">
                <Link className="signup_home flex" to="/">
                    <img className="signup_back" src={backIcon} alt="" />
                </Link>
                <Form className="signup__form">
                    <h1 className="signup__form-title">
                        Login
                    </h1>
                    <div className="signup__form-field flex">
                       
                        <input className="signup__form-input" type="email" name="email" id="" />
                    </div>
                    <div className="login__form-inner">
                        <div className="signup__form-field flex">
                           
                            <input className="signup__form-input" type="email" name="email" id="" />
                            <img className="signup__form-pword" src={showIcon} alt="" />
                        </div>
                        <Link className="signup__form-aside" to="">
                            Forgot password
                        </Link>
                    </div>
                    <Link className="signup__form-login" to="">Login</Link>
                    <div className="signup__form-logup">
                        New user?
                        <Link className="signup__form-signu" to="">Sign up</Link>
                    </div>
                </Form>
             
</section>
</main>
    )
}
export default Signup;