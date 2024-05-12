import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import boy1 from '../../assets/images/boy1.jpg';
import boy2 from '../../assets/images/boy2.jpg';
import girl1 from '../../assets/images/girl1.jpg';
import girl2 from '../../assets/images/girl2.jpg';


const Testimonial = () => {
    return (
        <div className="bg-white dark:bg-gray-900 mt-0 mb-10 md:mt-24 md:mb-10">

            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white lg:text-4xl">What Our <span className="text-red-500">Client</span> Says</h2>

            <div className="carousel w-full mt-3 md:mt-10">
                <div id="slide1" className="carousel-item relative w-full ">

                    <div className="container px-6 mx-auto">
                        <div className="lg:-mx-6 lg:flex lg:items-center">
                            <img className="object-cover lg:w-1/2 lg:mx-6 w-full h-[200px] md:h-96 rounded-lg lg:h-[36rem]" src={girl1}/>

                            <div className="mt-8 lg:w-1/2  px-6 md:px-0 lg:px-6 lg:mt-0 flex flex-col items-center md:block">
                                <p className="text-5xl font-semibold text-red-500 hidden md:block">“</p>

                                <h1 className="text-2xl font-semibold text-center md:text-left text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                                A Must-Read for Quality Content
                                </h1>

                                <p className="max-w-lg mt-6 text-gray-500 text-center md:text-left dark:text-gray-400 ">
                                    I stumbled upon this blog by chance and it&apos;s been a game-changer! The articles are well-researched, insightful, and beautifully written. Can&apos;t recommend it enough!
                                </p>

                                <h3 className="mt-6 text-lg font-medium text-blue-500">Mia Brown</h3>
                                <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Apple</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between md:justify-center lg:justify-end transform md:-translate-y-1/2    left-0 right-0 bottom-[200px] md:left-[520px] md:right-0 lg:left-0  lg:right-[474px] md:bottom-[-20px] lg:bottom-[15px]">
                        <a href="#slide4" className="btn mr-4 md:mr-8 lg:mr-5 opacity-80 hover:bg-red-600 hover:text-white hover:opacity-100 border border-black hover:border-red-600 rounded-full md:w-[50px] md:h-[50px]"><FaArrowLeft className='text-base md:text-xl'/></a> 
                        <a href="#slide2" className="btn opacity-80 hover:bg-red-600 hover:text-white hover:opacity-100 border border-black hover:border-red-600 rounded-full md:w-[50px] md:h-[50px]"><FaArrowRight className='text-base md:text-xl'/></a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full ">

                    <div className="container px-6 mx-auto">
                        <div className="lg:-mx-6 lg:flex lg:items-center">
                            <img className="object-cover lg:w-1/2 lg:mx-6 w-full h-[200px] md:h-96 rounded-lg lg:h-[36rem]" src={boy1}/>

                            <div className="mt-8 lg:w-1/2  px-6 md:px-0 lg:px-6 lg:mt-0 flex flex-col items-center md:block">
                                <p className="text-5xl font-semibold text-red-500 hidden md:block">“</p>

                                <h1 className="text-2xl font-semibold text-center md:text-left text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                                Inspiring and Informative
                                </h1>

                                <p className="max-w-lg mt-6 text-gray-500 text-center md:text-left dark:text-gray-400 ">
                                    This blog is my daily dose of inspiration! The content is consistently engaging and thought-provoking. It&apos;s become a part of my routine to check for new posts regularly.
                                </p>

                                <h3 className="mt-6 text-lg font-medium text-blue-500">Jonathan</h3>
                                <p className="text-gray-600 dark:text-gray-300">Salesman at Techno</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between md:justify-center lg:justify-end transform md:-translate-y-1/2    left-0 right-0 bottom-[200px] md:left-[520px] md:right-0 lg:left-0  lg:right-[474px] md:bottom-[-20px] lg:bottom-[15px]">
                        <a href="#slide1" className="btn mr-4 md:mr-8 lg:mr-5 opacity-80 hover:bg-red-600 hover:text-white hover:opacity-100 border border-black hover:border-red-600 rounded-full md:w-[50px] md:h-[50px]"><FaArrowLeft className='text-base md:text-xl'/></a> 
                        <a href="#slide3" className="btn opacity-80 hover:bg-red-600 hover:text-white hover:opacity-100 border border-black hover:border-red-600 rounded-full md:w-[50px] md:h-[50px]"><FaArrowRight className='text-base md:text-xl'/></a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full ">

                    <div className="container px-6 mx-auto">
                        <div className="lg:-mx-6 lg:flex lg:items-center">
                            <img className="object-cover lg:w-1/2 lg:mx-6 w-full h-[200px] md:h-96 rounded-lg lg:h-[36rem]" src={girl2}/>

                            <div className="mt-8 lg:w-1/2  px-6 md:px-0 lg:px-6 lg:mt-0 flex flex-col items-center md:block">
                                <p className="text-5xl font-semibold text-red-500 hidden md:block">“</p>

                                <h1 className="text-2xl font-semibold text-center md:text-left text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                                Consistently Impressive
                                </h1>

                                <p className="max-w-lg mt-6 text-gray-500 text-center md:text-left dark:text-gray-400 ">
                                    I&apos;ve been following this blog for years and it never disappoints! From informative guides to entertaining stories, there&apos;s something for everyone. Keep up the great work!
                                </p>

                                <h3 className="mt-6 text-lg font-medium text-blue-500">Alexandar</h3>
                                <p className="text-gray-600 dark:text-gray-300">Student of Harvard</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between md:justify-center lg:justify-end transform md:-translate-y-1/2    left-0 right-0 bottom-[200px] md:left-[520px] md:right-0 lg:left-0  lg:right-[474px] md:bottom-[-20px] lg:bottom-[15px]">
                        <a href="#slide2" className="btn mr-4 md:mr-8 lg:mr-5 opacity-80 hover:bg-red-600 hover:text-white hover:opacity-100 border border-black hover:border-red-600 rounded-full md:w-[50px] md:h-[50px]"><FaArrowLeft className='text-base md:text-xl'/></a> 
                        <a href="#slide4" className="btn opacity-80 hover:bg-red-600 hover:text-white hover:opacity-100 border border-black hover:border-red-600 rounded-full md:w-[50px] md:h-[50px]"><FaArrowRight className='text-base md:text-xl'/></a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full ">

                    <div className="container px-6 mx-auto">
                        <div className="lg:-mx-6 lg:flex lg:items-center">
                            <img className="object-cover lg:w-1/2 lg:mx-6 w-full h-[200px] md:h-96 rounded-lg lg:h-[36rem]" src={boy2}/>

                            <div className="mt-8 lg:w-1/2  px-6 md:px-0 lg:px-6 lg:mt-0 flex flex-col items-center md:block">
                                <p className="text-5xl font-semibold text-red-500 hidden md:block">“</p>

                                <h1 className="text-2xl font-semibold text-center md:text-left text-gray-800 dark:text-white lg:text-3xl lg:w-96">
                                Engaging and Enlightening
                                </h1>

                                <p className="max-w-lg mt-6 text-gray-500 text-center md:text-left dark:text-gray-400 ">
                                I&apos;m so glad I found this blog! It&apos;s like having a knowledgeable friend sharing interesting tidbits and advice. It&apos;s become my go-to resource for all things related to [insert your niche].
                                </p>

                                <h3 className="mt-6 text-lg font-medium text-blue-500">Lil Chump</h3>
                                <p className="text-gray-600 dark:text-gray-300">Rapper at Miami</p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between md:justify-center lg:justify-end transform md:-translate-y-1/2    left-0 right-0 bottom-[200px] md:left-[520px] md:right-0 lg:left-0  lg:right-[474px] md:bottom-[-20px] lg:bottom-[15px]">
                        <a href="#slide3" className="btn mr-4 md:mr-8 lg:mr-5 opacity-80 hover:bg-red-600 hover:text-white hover:opacity-100 border border-black hover:border-red-600 rounded-full md:w-[50px] md:h-[50px]"><FaArrowLeft className='text-base md:text-xl'/></a> 
                        <a href="#slide1" className="btn opacity-80 hover:bg-red-600 hover:text-white hover:opacity-100 border border-black hover:border-red-600 rounded-full md:w-[50px] md:h-[50px]"><FaArrowRight className='text-base md:text-xl'/></a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Testimonial;