

const Banner = () => {
    return (
            <div className="lg:flex mb-12 md:mb-10 lg:my-12">
            <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
                <div className="max-w-xl">
                    <h2 className="text-2xl md:text-3xl font-semibold font-sifu text-gray-800 dark:text-white lg:text-4xl">Welcome to Our <span className="text-red-500 dark:text-blue-400">Blog</span></h2>

                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 md:text-base">Discover the latest insights, tips, and stories from our team of experts. Explore a wide range of topics including technology, travel, lifestyle, and more.</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        <button className="w-fit py-[5px] px-[10px] md:py-2 md:px-5 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-red-600 via-red-400 to-red-200 rounded-[5px] text-white text-sm md:text-lg md:font-medium">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                <div className="w-full h-full bg-cover rounded-lg" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80)'}}>
                    <div className="w-full h-full bg-black opacity-25 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;