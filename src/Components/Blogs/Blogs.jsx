import { Card } from "flowbite-react";


const Blogs = () => {
  return (
    <div id="blog" className="mt-0 mb-10 md:my-[60px] lg:my-[110px]">

        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white lg:text-4xl">Our Recent <span className="text-red-500">Blogs</span></h2>
        <p className="w-auto md:w-[580px] text-center mx-auto mt-4 mb-8 text-neutral-600 dark:text-gray-600">Stay up to date with our latest blog posts! Discover insightful articles, helpful tips, and engaging stories on a variety of topics. Explore our most recent content below and dive into the world of inspiration and knowledge.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-10">
            <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://i.ibb.co/s3Y1rWM/oil.webp"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so
                far, in reverse chronological order.
                </p>
            </Card>
        </div>

    </div>
  );
};

export default Blogs;
