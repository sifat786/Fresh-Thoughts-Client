import toast from 'react-hot-toast';
import newsLetter from '../../assets/images/newsLetter.jpg';


const NewsLetter = () => {

  const handleNewsLetter = e => {
    e.preventDefault();

    const form = e.target;
    form.reset();

    toast.success('Thank you for subscribing to our newsletter.')
  }

    return (
        <section className='bg-white dark:bg-gray-900'>
            <div className="container px-6 md:py-16 mx-auto">
                <div className="items-center lg:flex flex-row-reverse lg:gap-20">
                    <div className="w-full lg:w-1/2">
                        <div className=" ">
                            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Subscribe To The <span className="text-red-500">Newsletter</span></h1>

                            <p className="mt-3 text-gray-600 dark:text-gray-400">Be the first to knows when our <span className="font-medium text-red-500">Blog</span> is live</p>

                            <form onSubmit={handleNewsLetter} className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                                <input  
                                    type="email" 
                                    placeholder="Email Address"
                                    name='email'
                                    className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" 
                                    required
                                />

                                <input 
                                    type='submit' 
                                    value='Subscribe' 
                                    className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-red-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-red-700 focus:outline-none focus:bg-black cursor-pointer"
                                />
                            </form>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="w-full h-full max-w-md" src={newsLetter} alt="email illustration vector art" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;