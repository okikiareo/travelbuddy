import "../css/featureA.css";
import "./Steps.css";
import StepBar from "../components/StepBar";
import Contact from "../assets/images/icon-contact.svg";

const StepA = () => {
    return (
        <>
            <StepBar index={1} />
            <main className="">
                <section className="wrap">
                    <div className="">
                        <img src={Contact} alt="" />
                        <div className="">
                            <h1 className="">
                                Upload NIN
                            </h1>
                            <p className="">
                                Uploading your NIN will help us confirm your personal information. All data is held securely and used for verification purposes only. 
                            </p>
                        </div>
                        <input type="file" name="" id="" />
                    </div>
                </section>
            </main>
        </>
    )
}

export default StepA;