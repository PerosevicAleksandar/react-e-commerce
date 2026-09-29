import { Link } from "react-router-dom";
import AboutUs from "../components/AboutPage/AboutUs";
import Team from "../components/AboutPage/Team";

function AboutPage() {
    return(
        <div>
            <img src="/images/logo.png" alt="logo" className="absolute hidden lg:block right-10 w-96 opacity-10 pointer-events-none"/>
            <div className="mx-auto px-6 sm:px-10 lg:px-24 py-6">
                <div className="text-md text-secondary">
                    <Link to="/">Home</Link>
                    <span> &gt; </span>
                    <Link to="/about">About</Link>
                </div>
            </div>
            <AboutUs />
            <Team />
        </div>
    )
}

export default AboutPage;