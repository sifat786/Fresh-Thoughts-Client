import Banner from "../../Components/Banner/Banner";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Testimonial from "../../Components/Testimonial/Testimonial";



const Home = () => {
    return (
        <div className="container">
            <Banner/>
            <Testimonial/>
            <NewsLetter/>
        </div>
    );
};

export default Home;