
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();

    console.log(location);
    return (
        <div>
            <Header></Header>
            <div>
                <p>Welcome to the Homepage</p>
            </div>
            {
                navigation.state === "loading" ? <p>Loading...</p> : <Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Home;