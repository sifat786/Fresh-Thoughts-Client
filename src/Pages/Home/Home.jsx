import Banner from "../../Components/Banner/Banner";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Question from "../../Components/Question/Question";
import Testimonial from "../../Components/Testimonial/Testimonial";



const Home = () => {
    return (
        <div className="container">
            <Banner/>
            <Testimonial/>
            <Question/>
            <NewsLetter/>
        </div>
    );
};

export default Home;