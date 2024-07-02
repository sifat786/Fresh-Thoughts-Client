
# Welcome to Fresh Thoughts

**Live Site URL:** [Fresh Thoughts](https://fresh-thoughts-12a68.web.app)


## Features:

- **Discover Exclusive Blogs with Responsive Design:** Browse exclusive blogs on any device (mobile, laptop, or desktop).
- **Add Blogs:** Using the MongoDB POST method, here users can add their blog.
- **Update Blogs:** Using the MongoDB PUT method, here users can update their own created blogs.
- **Featured Blogs:** Here, users can see top 10 posts in a table.
- **Smooth Animations:** Enhance user experience with smooth animations using framer-motion.
- **Firebase Authentication:** Utilize Firebase Authentication to handle user authentication securely.


## Website Category

- **Blog**

- ## Setup

To setup the project you have to execute the command below:

1. At first you have to install all package. For this you Have to execute the command:

```sh
npm i
```

2. After install all package you need to run your project. But you can't run your project directly. Because I use environment variabel for security purpose. You have to add a `.env` file in your root directory and the a sample code of `.env` file are given below:

```.env
VITE_apiKey=*******************
VITE_authDomain=***************
VITE_projectId=***************
VITE_storageBucket=***************
VITE_messagingSenderId=***************
VITE_appId=***************
```

The first six api key you will get form firebase & and the last api key you will get from ImgBB.

3. After setting environment variable you can run or build your project.

For run your preject you have to execute the commad below:

```sh
npm run dev
```

4. For build your project you can execute the command below:

```sh
npm run build
```

#### Note: Must have installed Git and Nodejs in your system to do it!
