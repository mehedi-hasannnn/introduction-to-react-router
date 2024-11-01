
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <p>Welcome to the Homepage</p>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;