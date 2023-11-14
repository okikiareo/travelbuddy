import "../css/featureA.css";
import "./Login.css";

import backIcon from "../assets/images/icon-left.svg";
import mailIcon from "../assets/images/icon-mail.svg";
import lockIcon from "../assets/images/icon-lock.svg";
import showIcon from "../assets/images/icon-show.svg";
// import hideIcon from "../assets/images/icon-hide.svg";

import { Form, Link } from "react-router-dom";

const Login = () => {
    return (
        <main className="login">
            <section className="login__wrapper wrap flex">
                <Link className="login__home flex" to="/">
                    <img className="login__back" src={backIcon} alt="" />
                </Link>
                <Form className="login__form">
                    <h1 className="login__form-title">
                        Login
                    </h1>
                    <div className="login__form-field flex">
                        <label className="login__form-label" htmlFor="">
                            <img src={mailIcon} alt="" />
                        </label>
                        <input className="login__form-input" type="email" name="email" id="" />
                    </div>
                    <div className="login__form-inner">
                        <div className="login__form-field flex">
                            <label className="login__form-label" htmlFor="">
                                <img src={lockIcon} alt="" />
                            </label>
                            <input className="login__form-input" type="password" name="email" id="" />
                            <img className="login__form-pword" src={showIcon} alt="" />
                        </div>
                        <Link className="login__form-aside" to="">
                            Forgot password
                        </Link>
                    </div>
                    <Link className="login__form-login" to="">Login</Link>
                    <div className="login__form-logup">
                        New user?
                        <Link className="login__form-signu" to="">Sign up</Link>
                    </div>
                </Form>
            </section>
        </main>
    );
}

export default Login;