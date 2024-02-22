import { Helmet } from "react-helmet";
import Navbar from "../Pages/Navbar/Navbar";
import Banner from "../Pages/Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Home - Clothing Store </title>
            </Helmet>
           <Navbar></Navbar>
           <Banner></Banner>
        </div>
    );
};

export default Home;