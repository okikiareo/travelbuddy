import "../css/featureA.css";
import backIcon from "../assets/images/icon-left.svg";
import { Link } from "react-router-dom";

const StepBar = (props) => {
    return (
        <header className="step-header">
            <div className="step-header__wrap wrap flex">
                <Link className="step-header__home" to="">
                    <img className="" src={backIcon} alt="" />
                </Link>
                <div className="step-header__unit">
                    Step {props.index} of 3
                </div>
            </div>
        </header>
    );
}

export default StepBar;