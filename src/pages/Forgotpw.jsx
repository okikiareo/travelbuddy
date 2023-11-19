import { Form, Link } from "react-router-dom";
import backIcon from "../assets/images/icon-left.svg";
import lock from "../assets/images/lock.png"

const Forgotpw = () => {
return(
    <main className="forgotpw main">
<section className="main_wrapper wrap flex">
              
                <Link className="back_home forgot-head flex" to="/">
                    <img className="back_img forgot-back " src={backIcon} alt="" />
                    <h3>Forgot Password</h3>
                </Link>
                
                <div className="welcome_info forgot-info flex">
                <img src={lock} alt=""/>
                    <p>Please enter your email address to receive a verification code</p>
                </div>
                <Form className="all_form forgot-form">
                <div className="form-field flex">
                        <input className="form-input" type="email" name="email" id="" placeholder="School Email" />
                    </div>
                    </Form>
                <div className="welcome_btn flex">
                    <Link className="login__form-login " to="">Send</Link>
                </div>
</section>
</main>
)
}
export default Forgotpw;