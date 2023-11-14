import { Form, Link } from "react-router-dom";
import buddy from "../assets/images/buddy.png";
import backIcon from "../assets/images/icon-left.svg";
const Welcome =() =>{
    return(
<main className="welcome">
<section className="welcome_wrapper wrap flex">
                <Link className="welcome_home flex" to="/">
                    <img className="login_back" src={backIcon} alt="" />
                </Link>
                <div className="welcome_info flex">
                    <img src={buddy} alt=""/>
                    <h2>Welcome</h2>
                    <p>Search, find and connect.</p>
                </div>
                <div className="welcome_btn flex">
                    <Link className="login__form-login white" to="">Sign in</Link>
                    <Link className="login__form-login " to="">Create an account</Link>
                </div>
</section>
</main>
    )
}
export default Welcome;