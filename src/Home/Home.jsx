import { Helmet } from "react-helmet";
import Navbar from "../Pages/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Home - Clothing Store </title>
            </Helmet>
           <Navbar></Navbar>
        </div>
    );
};

export default Home;