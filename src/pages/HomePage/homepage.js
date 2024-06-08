import Navbar from "../common/Navbar/navbar";
import "./homepage.css";

const HomePage = (props) => {
    return(
        <div> 
            <Navbar page="home"/>
            <div className="homepage-main-container">
            WELCOME TO THE AI IMAGE GENERATOR
            <br></br><br></br>
            <div className="second">Click login for old user and sign up for new user</div>
            </div>
        </div>
    )
}

export default HomePage;