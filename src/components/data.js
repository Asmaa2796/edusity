export const programs = [
    {
        id:1,
        img:"../assets/program-1.jpg",
        caption:"Best courses",
        icon:"../assets/icon-1.png"
    },
    {
        id:2,
        img:"../assets/program-2.jpg",
        caption:"Free & paid content",
        icon:"../assets/icon-2.png"
    },
    {
        id:3,
        img:"../assets/program-3.jpg",
        caption:"High certificates",
        icon:"../assets/icon-3.png"
    },
    {
        id:4,
        img:"../assets/program-4.jpg",
        caption:"Programming tutorials",
        icon:"../assets/icon-4.png"
    }
]

export const pricingTable = [
    {
        id:1,
        img:"../assets/pricing-img1.png",
        plan:'STUDENT',
        limit:'Limited users',
        price:'100$',
        per:'Per device/month',
        info:[
            {
                id:1,
                txt:'Can set according to student needs & templates.'
            },
            {
                id:2,
                txt:'1GB of storage,speed of 10MBps,once shared work.'
            },
            {
                id:3,
                txt:'Change the layout template that has been determind.'
            }
        ]
    },
    {
        id:2,
        img:"../assets/1.gif",
        plan:'PRO',
        limit:'Limited users',
        price:'200$',
        per:'Per device/month',
        info:[
            {
                id:1,
                txt:'Can set according to student needs & templates.'
            },
            {
                id:2,
                txt:'10GB of storage,speed of 50MBps,once shared work.'
            },
            {
                id:3,
                txt:'Change the layout template that has been determind.'
            }
        ]
    },
    {
        id:3,
        img:"../assets/pricing-img3.png",
        plan:'COMPANY',
        limit:'Limited users',
        price:'500$',
        per:'Per device/month',
        info:[
            {
                id:1,
                txt:'Can set according to student needs & templates.'
            },
            {
                id:2,
                txt:'1TB storage,speed of 50MBps,once shared work.'
            },
            {
                id:3,
                txt:'Change the layout template that has been determind.'
            }
        ]
    }
]

export const categories = [
    {id:1,categoryName:'All',top:false,img:null},
    {id:2,categoryName:'React js',top:false,img:null},
    {id:3,categoryName:'JavaScript',top:false,img:null},
    {id:4,categoryName:'Angular js',top:false,img:null},
    {id:5,categoryName:'Vue js',top:false,img:null},
    {id:6,categoryName:'Css',top:true,img:'../assets/css-3.png'},
    {id:7,categoryName:'Php',top:true,img:'../assets/php.png'},
    {id:8,categoryName:'Python',top:true,img:'../assets/python.png'},
    {id:9,categoryName:'Bootstrap',top:true,img:'../assets/bootstrap.png'},
]

export const courses = [
    {
        id:1,
        img:'../assets/course-1.jpg',
        title:'Mastering React: Building Dynamic User Interfaces',
        smallDesc:'Dive into the world of modern web development with our React.js course! Learn how to create dynamic, high-performance user interfaces using React, one of the most popular JavaScript libraries.',
        fullDesc:'Unlock the power of React, the popular JavaScript library for building dynamic, high-performance user interfaces. This comprehensive course is designed for developers who want to gain a deep understanding of React and its ecosystem, from the basics to advanced concepts.',
        lectures:"20",
        duration:"3 hours 30 min",
        category:'React js',
        status:'Free',
        price:'0$',
        new:true
    },
    {
        id:2,
        img:'../assets/course-2.jpg',
        title:'Craft Scalable Web Applications',
        smallDesc:'Unlock the power of Angular with our comprehensive course designed for aspiring developers and experienced programmers alike.',
        fullDesc:'Unlock the power of Angular with our comprehensive course designed for aspiring developers and experienced programmers alike. Explore the essentials of Angular, including modules, components, services, and routing, while diving deep into advanced topics like state management and performance optimization. Through practical projects and real-world examples, you’ll gain the skills to build robust, scalable web applications and stay ahead in the evolving landscape of front-end development.',
        lectures:"25",
        duration:"5 hours 15 min",
        category:'Angular js',
        status:'Paid',
        price:'10$',
        new:false
    },
    {
        id:3,
        img:'../assets/course-3.jpg',
        title:'From Basics to Advanced Techniques',
        smallDesc:'Unlock the full potential of web design with our comprehensive CSS course.',
        fullDesc:'Unlock the full potential of web design with our comprehensive CSS course. Whether you are just starting or looking to enhance your skills, this course will guide you through the essentials and advanced features of CSS, empowering you to create visually stunning and responsive websites.',
        lectures:"10",
        duration:"2 hours",
        category:'Css',
        status:'Free',
        price:'0$',
        new:true
    },
    {
        id:4,
        img:'../assets/course-4.jpg',
        title:'From Fundamentals to Advanced Concepts',
        smallDesc:'Dive into the world of JavaScript with our comprehensive course designed for all skill levels. ',
        fullDesc:'Dive into the world of JavaScript with our comprehensive course designed for all skill levels. Whether you are a beginner aiming to learn the basics or an experienced developer looking to refine your skills, this course will equip you with the knowledge and practical experience to master JavaScript and build dynamic web applications.',
        lectures:"35",
        duration:"6 hours 10 min",
        category:'JavaScript',
        status:'Free',
        price:'0$',
        new:false
    },
    {
        id:5,
        img:'../assets/course-5.jpg',
        title:'From Fundamentals to Advanced Concepts.',
        smallDesc:'Explore Python’s built-in data structures including lists, tuples, dictionaries, and sets. Learn how to manipulate and access data efficiently.',
        fullDesc:'Embark on a journey to become a proficient Python developer with our comprehensive course designed for learners at all levels. Whether you’re a complete beginner or looking to deepen your knowledge, this course offers a structured approach to mastering Python and applying it to real-world problems.',
        lectures:"50",
        duration:"20 hours",
        category:'Python',
        status:'Paid',
        price:'30$',
        new:true
    },
    {
        id:6,
        img:'../assets/course-6.jpg',
        title:'Overview of JavaScript as a programming language.',
        smallDesc:'This JavaScript course covers a wide range of topics from the basics of syntax.',
        fullDesc:"This JavaScript course covers a wide range of topics from the basics of syntax and control structures to advanced concepts like asynchronous programming, modern features, and best practices. By the end of the course, students should be comfortable with JavaScript's core concepts and able to build interactive web applications.",
        lectures:"20",
        duration:"5 hours",
        category:'JavaScript',
        status:'Free',
        price:'10$',
        new:true
    },
    {
        id:7,
        img:'../assets/course-7.jpg',
        title:'Basic syntax, including indentation, statements.',
        smallDesc:'This summary outlines the key areas covered in a typical Python course.',
        fullDesc:"This summary outlines the key areas covered in a typical Python course, from foundational knowledge to advanced topics, helping learners build a solid understanding of Python and its applications.",
        lectures:"40",
        duration:"15 hours",
        category:'Python',
        status:'Paid',
        price:'20$',
        new:false
    },
    {
        id:8,
        img:'../assets/course-8.jpg',
        title:'Overview of CSS development from CSS1 to CSS3.',
        smallDesc:'This summary provides an overview of key topics and concepts.',
        fullDesc:"This summary provides an overview of key topics and concepts typically covered in a CSS course, from fundamental styling techniques to advanced layout and design practices.",
        lectures:"10",
        duration:"2 hours",
        category:'Css',
        status:'Free',
        price:'0$',
        new:false
    }
]