import { Form, Link } from "react-router-dom";
import backIcon from "../assets/images/icon-left.svg";
import mail from "../assets/images/mail.png"

const Verifyem = () => {
    return(

        <main className="forgotpw main">
        <section className="main_wrapper wrap flex">
                      
                        <Link className="back_home forgot-head flex" to="/">
                            <img className="back_img forgot-back " src={backIcon} alt="" />
                            <h3>Verify Email</h3>
                        </Link>
                        
                        <div className="welcome_info forgot-info flex">
                        <img src={mail} alt=""/>
                            <p>Please enter the 4 digit code sent to <span id="email">oluwatoyinajayi641@gmail.com</span></p>
                        </div>
                        <div className="welcome_btn flex">
                            <Link className="login__form-login " to="">Verify</Link>
                        </div>
                        <Link className="form-logup">
                       
                        Resend code
                    </Link>
        </section>
        </main>
    )
}
export default Verifyem;