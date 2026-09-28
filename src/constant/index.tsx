import React from 'react';
import { ShieldCheck, Landmark, Zap, Rocket, Eye, Award, Coins, Smile, CheckCircle2 } from 'lucide-react';
import { IFeaturesData } from '@src/types';

export const Routes = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Registrations",
        path: "/registrations",
        child: [
            {
                name: "",
                child: [
                    { name: "Trade License", path: "/registrations/trade-license" },
                    { name: "GST Registration", path: "/contact-us" },
                    { name: "LLP Incorporation", path: "/contact-us" },
                    { name: "ESI/PF Registration", path: "/contact-us" },
                    { name: "TG Rera Registration", path: "/contact-us" },
                    { name: "Import Export Code", path: "/contact-us" },
                    { name: "FCRA Registration", path: "/contact-us" },
                    { name: "ICEGATE Registration", path: "/contact-us" },
                    { name: "12A & 80G Registration", path: "/contact-us" },
                    { name: "Design Registration", path: "/contact-us" },
                    { name: "Project Report", path: "/contact-us" }
                ]
            },
            {
                name: "",
                child: [
                    { name: "Labour License", path: "/contact-us" },
                    { name: "Udyam Registration", path: "/contact-us" },
                    { name: "Partnership Firm Registration", path: "/contact-us" },
                    { name: "Professional Tax Registration", path: "/contact-us" },
                    { name: "Trust Registration", path: "/contact-us" },
                    { name: "Digital Signature Certificate", path: "/contact-us" },
                    { name: "Halal License & Registration", path: "/contact-us" },
                    { name: "RCMC Registration", path: "/contact-us" },
                    { name: "Bar Code Registration", path: "/contact-us" },
                    { name: "Copyright Registration", path: "/contact-us" }
                ]
            },
            {
                name: "",
                child: [
                    { name: "Food License", path: "/contact-us" },
                    { name: "Company Registration", path: "/contact-us" },
                    { name: "Trademark Registration", path: "/contact-us" },
                    { name: "Society Registration", path: "/contact-us" },
                    { name: "APEDA Registration", path: "/contact-us" },
                    { name: "Drug License", path: "/contact-us" },
                    { name: "ISO Registration", path: "/contact-us" },
                    { name: "LEI Code", path: "/contact-us" },
                    { name: "BIS Registration", path: "/contact-us" },
                    { name: "Patent Registration", path: "/contact-us" }
                ]
            }
        ]
    },
    {
        name: "Loans",
        path: "/loans",
        child: [
            {
                name: "Individuals",
                child: [
                    { name: "Home Loans", path: "/loans/home-loan" },
                    { name: "Home Loan Balance Transfer & Top-Up", path: "/loans/home-loan-balance-transfer" },
                    { name: "Mortgage / Loan Against Property", path: "/loans/loan-against-property" },
                    { name: "Personal Loans", path: "/loans/personal-loan" },
                ]
            },
            {
                name: "Businesses",
                child: [
                    { name: "Business Loans", path: "/loans/business-loan" },
                    { name: "Working Capital Funding", path: "/loans/working-capital-loan" },
                    { name: "Loan Refinancing / Balance Transfer", path: "/loans/loan-refinancing" },
                    { name: "Corporate Funding Assistance", path: "/loans/corporate-funding" },
                ]
            }
        ]
    },
    {
        name: "Compliance",
        path: "/compliance",
        child: [
            {
                name: "",
                child: [
                    { name: "ITR Filing", path: "/compliance/itr-filing" },
                    { name: "ESI PF Return Filings", path: "/contact-us" },
                    { name: "FDI Filing With RBI", path: "/contact-us" },
                    { name: "GST Notice", path: "/contact-us" },
                    { name: "MOA/AOA Amendments", path: "/contact-us" },
                    { name: "CA Certifications", path: "/contact-us" }
                ]
            },
            {
                name: "",
                child: [
                    { name: "GST Filings", path: "/contact-us" },
                    { name: "ROC Filings", path: "/contact-us" },
                    { name: "Payroll", path: "/contact-us" },
                    { name: "Appeals", path: "/contact-us" },
                    { name: "Winding Up Company", path: "/contact-us" }
                ]
            },
            {
                name: "",
                child: [
                    { name: "TDS Filings", path: "/contact-us" },
                    { name: "15CA & 15CB Filing", path: "/contact-us" },
                    { name: "Income Tax Notice", path: "/contact-us" },
                    { name: "Director Change", path: "/contact-us" },
                    { name: "Winding Up LLP", path: "/contact-us" }
                ]
            }
        ]
    },
    {
        name: "Consultations",
        path: "/consultations",
        child: [
            {
                name: "",
                child: [
                    { name: "Legal Consultation", path: "/contact-us" },
                    { name: "Business Consultation", path: "/contact-us" }
                ]
            },
            {
                name: "",
                child: [
                    { name: "CA Consultation", path: "/contact-us" },
                    { name: "Arbitration Services", path: "/contact-us" }
                ]
            },
            {
                name: "",
                child: [
                    { name: "Architect Consultation", path: "/contact-us" },
                    { name: "Investment Planning", path: "/contact-us" }
                ]
            }
        ]
    },
    {
        name: "IT Solutions",
        path: "/it-solutions",
        child: [
            {
                name: "",
                child: [
                    { name: "Web Solutions", path: "/login" },
                    { name: "Product/Platform Solution", path: "/contact-us" }
                ]
            },
            {
                name: "",
                child: [
                    { name: "Mobile App Solutions", path: "/contact-us" },
                    { name: "Digital Marketing", path: "/contact-us" }
                ]
            },
            {
                name: "",
                child: [
                    { name: "CRM & CMS Solutions", path: "/contact-us" },
                    { name: "IT Consultation", path: "/contact-us" }
                ]
            }
        ]
    },
    {
        name: "Other Services",
        path: "/contact-us"
    },
    {
        name: "Contact",
        path: "/contact-us"
    }
]

export const FooterRoutes = [
    {
        name: "About Us",
        path: "/about-us",
    },
    {
        name: "Contact Us",
        path: "/contact-us"
    },
]

export const TechnologiesData = [
    {
        label: "Front End",
        name: "front-end",
        child: [
            {
                id: 1,
                name: "CSS3",
                image: "/images/techonologies/css3.svg",
            },
            {
                id: 7,
                name: "Tailwind",
                image: "/images/techonologies/tailwind.webp",
            },
            {
                id: 2,
                name: "HTML",
                image: "/images/techonologies/html.svg",
            },
            {
                id: 3,
                name: "JavaScipt",
                image: "/images/techonologies/js.svg",
            },
            {
                id: 4,
                name: "VueJs",
                image: "/images/techonologies/vue.svg",
            },
            {
                id: 5,
                name: "ReactJs",
                image: "/images/techonologies/react.svg",
            },
            {
                id: 6,
                name: "NextJs",
                image: "/images/techonologies/next.png",
            },
            {
                id: 6,
                name: "AngularJs",
                image: "/images/techonologies/angular.png",
            },
        ]
    },
    {
        label: "Back End",
        name: "back-end",
        child: [
            // {
            //     id: 1,
            //     name: "PHP",
            //     image: "/images/techonologies/php.svg",
            // },
            {
                id: 2,
                name: "Python",
                image: "/images/techonologies/python.png",
            },
            {
                id: 3,
                name: "NodeJs",
                image: "/images/techonologies/node.svg",
            },
            {
                id: 3,
                name: "Odoo",
                image: "/images/techonologies/odoo.png",
            },
        ]
    },
    {
        label: "Database",
        name: "Database",
        child: [
            {
                id: 1,
                name: "PostgreSQL",
                image: "/images/techonologies/postgresql.webp",
            },
            {
                id: 2,
                name: "MongoDB",
                image: "/images/techonologies/mongodb.webp",
            },
            {
                id: 3,
                name: "FireBase",
                image: "/images/techonologies/firebase.svg",
            },
            {
                id: 4,
                name: "SQLight",
                image: "/images/techonologies/sqllight.webp",
            },
            {
                id: 5,
                name: "mySQL",
                image: "/images/techonologies/mysql.webp",
            },
        ]
    },
    {
        label: "Mobile App Development",
        name: "mobile-app-development",
        child: [
            {
                id: 1,
                name: "Flutter",
                image: "/images/techonologies/flutter.svg",
            },
            {
                id: 2,
                name: "Android",
                image: "/images/techonologies/android.svg",
            },
            {
                id: 3,
                name: "iOS",
                image: "/images/techonologies/ios.svg",
            },
            {
                id: 4,
                name: "React Native",
                image: "/images/techonologies/reactNative.png",
            },
        ]
    },
]

export const ServiceData = [
    {
        name: "Website Development",
        details: "We provide Responsive Website Design and Development services that help you achieve higher returns from your digital investment",
        image: "/images/services/web-development.webp"
    },
    {
        name: "Mobile App Development",
        details: "From setting an alarm to playing a favorite tune, users turn to mobile apps for anything and everything. Is your business ready to serve users who live in the mobile world? If not then contact us now.",
        image: "/images/services/mobile-development.webp"
    },
    {
        name: "UI/UX Design",
        details: "UI/UX design services encompass a wide range of creative and visual design work to help individuals and businesses communicate their message, brand, or idea effectively. Here are some common graphic design service.",
        image: "/images/services/graphic-design.webp"
    },
    {
        name: "Software Development",
        details: "Our ERP, CRM Solutions, and custom software development service will help you to obtain the best bespoke software for your business. We develop software solutions as per your requirement.",
        image: "/images/services/software-development.webp"
    },
    // {
    //     name: "Digital Marketing",
    //     details: "Onehub Solution is a digital marketing agency that cares about your business. We deliver inspiring, responsive, eye-catching designs and measurable strategic campaigns that connect with target audiences, boost digital marketing, and encourage business growth.",
    //     image: "/images/services/digital-marketing.webp"
    // },
    {
        name: "Game Development",
        details: "Onehub Solution offers end-to-end game development services at affordable rates. Our team has experience working on the industry’s best games, including hyper-casual games, multi-player RPGs, and VR games.",
        image: "/images/services/game-development.webp"
    },
    {
        name: "Website Hosting",
        details: "Onehub Solution offers end-to-end game development services at affordable rates. Our team has experience working on the industry’s best games, including hyper-casual games, multi-player RPGs, and VR games.",
        image: "/images/services/web-development.webp"
    },
]

export const FeaturesData: IFeaturesData[] = [
    {
        image: "/images/services/software-development.webp",
        name: "Commercial & Business Loans",
        details:
            "Fuel your business growth with tailored financial solutions. From working capital and MSME/CGTMSE schemes to machinery loans, get seamless approvals with competitive interest rates."
    },
    {
        image: "/images/services/web-development.webp",
        name: "Home Loans & LAP",
        details:
            "Unlock the dream of your ideal property or leverage your existing real estate with high-value Loan Against Property (LAP) backed by 30+ leading national banks."
    },
    {
        image: "/images/services/game-development.webp",
        name: "Registrations & Compliance",
        details:
            "Get complete corporate peace of mind. We handle Trade Licenses, GST, Company Incorporation, FSSAI, and annual ITR compliance with total speed and regulatory accuracy."
    }
];

export const StepsData = [
    {
        image: <ShieldCheck className="w-8 h-8 text-gold-500" />,
        title: "Complete Transparency",
        details: "Zero hidden charges, transparent bank margins, and real-time loan file tracking."
    },
    {
        image: <Landmark className="w-8 h-8 text-gold-500" />,
        title: "30+ Banking Partners",
        details: "Direct institutional ties with top national and private banks ensure maximum loan sanction approvals."
    },
    {
        image: <Zap className="w-8 h-8 text-gold-500" />,
        title: "Speedy Processing",
        details: "Swift file preparation, minimal turnaround time, and express disbursement options."
    }
];

export const WhoWeAreData = [
    {
        image: <Smile className="w-8 h-8 text-gold-500" />,
        title: "Customer-Focused Approach",
        details: "We understand each customer's requirement and help identify suitable options while coordinating documentation and service processes where applicable."
    },
    {
        image: <Rocket className="w-8 h-8 text-gold-500" />,
        title: "Multiple Professional Services",
        details: "A comprehensive multi-service firm offering Loans, CIBIL Services, Accounting & Taxation, Demat & Trading, Corporate Banking, and Digital Marketing under one roof."
    },
    {
        image: <CheckCircle2 className="w-8 h-8 text-gold-500" />,
        title: "Assistance from Enquiry to Completion",
        details: "End-to-end coordinated assistance and dedicated advisory support from initial consultation to final paperwork and execution."
    },
    {
        image: <Coins className="w-8 h-8 text-gold-500" />,
        title: "Wide Range of Financial Solutions",
        details: "Extensive institutional financing network providing structured loan and capital options for individuals, entrepreneurs, and corporates."
    },
    {
        image: <ShieldCheck className="w-8 h-8 text-gold-500" />,
        title: "Professional and Transparent Communication",
        details: "Commitment to absolute clarity, transparent guidance, zero hidden surprises, and reliable communication at every stage."
    }
];

export const AboutRulesData = {
    support: {
        name: "Client Commitment",
        child: [
            "Complete confidentiality and data protection for all loan documentation.",
            "Personalized credit analysis matching each applicant to the best bank interest rate.",
            "End-to-end doorstep assistance from file preparation to fund disbursement.",
            "Continuous post-sanction support and advisory for balance transfers."
        ]
    },
    accountability: {
        name: "Transparency & Trust",
        child: [
            "Zero hidden charges or misleading terms.",
            "Accurate pre-eligibility verification before credit bureau submission to safeguard CIBIL score.",
            "Upfront guidance on processing fees, statutory charges, and banking policies.",
            "Clear timelines with regular SMS and WhatsApp milestone updates."
        ]
    },
    excellence: {
        name: "Financial Excellence",
        child: [
            "Highest approval rates through multi-bank strategic underwriting.",
            "Specialized expertise in complex business loans, LAP, and builder tie-ups.",
            "Rigorous legal verification on all commercial & residential property transactions.",
            "Experienced team of ex-bankers, legal experts, and tax consultants."
        ]
    }
};

export const AchievementData = [
    {
        icons: <Coins className="w-10 h-10 text-gold-500" />,
        digit: "₹250+ Cr",
        title: "Loans Disbursed"
    },
    {
        icons: <Landmark className="w-10 h-10 text-gold-500" />,
        digit: "30+",
        title: "Partner Banks"
    },
    {
        icons: <Smile className="w-10 h-10 text-gold-500" />,
        digit: "5,000+",
        title: "Satisfied Clients"
    },
    {
        icons: <CheckCircle2 className="w-10 h-10 text-gold-500" />,
        digit: "99%",
        title: "Sanction Ratio"
    },
];

export const HireDeveloperField = [
    {
        label: "ReactJs Developer",
        value: "reactjs-developer"
    },
    {
        label: "VeuJs Developer",
        value: "veujs-developer"
    },
    {
        label: "AngularJs Developer",
        value: "angularjs-developer"
    },
    {
        label: "NodeJs Developer",
        value: "nodejs-developer"
    },
    {
        label: "MERN Stack Developer",
        value: "mern-stack-developer"
    },
    {
        label: "Python Developer",
        value: "python-developer"
    },
    {
        label: "Odoo Developer",
        value: "odoo-developer"
    },
    {
        label: "Flutter Developer",
        value: "flutter-developer"
    },
    {
        label: "React Native Developer",
        value: "react-native-developer"
    },
    {
        label: "UI/UX Designer",
        value: "ui-ux-designer"
    },
    {
        label: "Game Development",
        value: "game-development"
    },
    {
        label: "SEO Expert",
        value: "seo-expert"
    },
    {
        label: "QA Tester",
        value: "qa-tester"
    },
]

export const TechnologiesPagesData = [
    {
        name: "html",
        label: "HTML",
        details: "HTML (Hypertext Markup Language) is a markup language used to create the structure and layout of web pages. There are several reasons why developers might choose to use HTML for their web development projects:",
        list: [
            {
                title: "Basic building block of web pages:",
                details: "HTML is the basic building block of web pages and provides the structure for text, images, and other media."
            },
            {
                title: "Supported by all web browsers:",
                details: "HTML is supported by all web browsers and can be used to create web pages that can be accessed by anyone with an internet connection."
            },
            {
                title: "Easy to learn and use:",
                details: "HTML is relatively easy to learn and use, even for beginners with no programming experience."
            },
            {
                title: "SEO friendly:",
                details: "Search engines rely on the HTML code of a web page to understand its content, so properly structured HTML can help improve a website's search engine rankings."
            },
            {
                title: "Accessibility:",
                details: "HTML provides a way to create web pages that are accessible to users with disabilities, such as screen readers."
            },
            {
                title: "Interoperability:",
                details: "HTML allows for the interoperability of different platforms, browsers and devices, which means that the website can be accessed from different devices and browsers."
            },
            {
                title: "Consistency:",
                details: "HTML allows for the creation of consistent and standard web pages, this ensures a better user experience for visitors of a website."
            },
            {
                title: "Versatility:",
                details: "HTML can be used to create different types of web pages such as static, dynamic, and responsive web pages."
            },
        ]
    },
    {
        name: "css3",
        label: "CSS",
        details: "CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation and layout of web pages. There are several reasons why developers might choose to use CSS for their web development projects.",
        list: [
            {
                title: "Separation of presentation and content:",
                details: "CSS allows developers to separate the presentation and layout of a web page from its content, which makes it easier to maintain and update the site."
            },
            {
                title: "Consistency across pages and sites:",
                details: "CSS allows developers to create a consistent look and feel across multiple web pages and entire websites."
            },
            {
                title: "Control over layout:",
                details: "CSS gives developers control over the layout of web pages, including the positioning of elements, typography, and spacing."
            },
            {
                title: "Responsive design:",
                details: "CSS can be used to create responsive web pages that adapt to different screen sizes and device types."
            },
            {
                title: "Accessibility",
                details: "CSS can be used to improve the accessibility of web pages for users with disabilities, such as high contrast modes for users with low vision."
            },
            {
                title: "Interactivity",
                details: "CSS can be used to create interactive web pages, using hover and active effects, animations, and transitions."
            },
            {
                title: "Browser compatibility",
                details: "CSS is supported by all modern web browsers, which allows the website to be displayed the same across different browsers."
            },
            {
                title: "Reusability:",
                details: "CSS styles can be reused across multiple web pages, making it easy to maintain and update the site."
            },
            {
                title: "Speed:",
                details: "Using CSS can speed up the loading time of a website, as it reduces the size of the HTML document and allows the browser to cache the styles."
            },
        ]
    },
    {
        name: "tailwind",
        label: "Tailwind CSS",
        details: "Tailwind CSS is a utility-first CSS framework that can be used to quickly and easily create consistent and responsive designs for web pages. There are several reasons why developers might choose to use Tailwind for their web development projects.",
        list: [
            {
                title: "Utility-first:",
                details: "Tailwind is a utility-first framework, which means it provides a set of pre-defined CSS classes that can be used to quickly apply styles to HTML elements. This can save development time and make it easier to create consistent designs"
            },
            {
                title: "Responsive design:",
                details: "Tailwind includes a set of pre-defined responsive utility classes that can be used to easily create designs that adapt to different screen sizes and device types."
            },
            {
                title: "Accessibility:",
                details: "Tailwind provides a set of pre-defined accessibility classes that can be used to improve the accessibility of web pages for users with disabilities."
            },
            {
                title: "Customizable:",
                details: "Tailwind allows developers to customize the default styles and create their own utility classes, this can make it easier to match the design of the website."
            },
            {
                title: "Consistency",
                details: "By using Tailwind, developers can create consistent web pages, this can improve the user experience and make the website easier to maintain."
            },
            {
                title: "Popularity",
                details: "Tailwind is a popular CSS framework, this means there are a lot of resources, tutorials, and examples available to help you build your website."
            },
            {
                title: "Interoperability",
                details: "Tailwind is designed to work with popular front-end frameworks such as React, Vue, and Angular, this means it can be integrated easily with an existing project."
            },
        ]
    },
    {
        name: "reactjs",
        label: "ReactJs",
        details: "React.js is a popular JavaScript library for building user interfaces that can be effective for our website. React provides state-of-the art functionality and is an excellent choice for developers looking for an easy-to-use and highly productive JavaScript framework. Using React, you can build complex UI interactions that communicate with the server in record time with JavaScript driven pages.",
        list: [
            {
                title: "Reusable Components :",
                details: "React.js allows you to create reusable components that can be easily shared across different parts of your website. This can help you maintain consistency and make..."
            },
            {
                title: "Virtual DOM:",
                details: "React.js utilizes a virtual DOM, which optimizes updates and reduces the amount of work the browser needs to do. This can lead to better performance and faster load..."
            },
            {
                title: "Popularity:",
                details: "React.js is widely used by developers, which means there are a lot of resources, tutorials, and libraries available to help you build your website. Flexibility..."
            },
            {
                title: "SEO Friendly:",
                details: "React.js allows you to server- side render your components, this means that the website will be rendered on the server and the browser will just display the rendered HTML..."
            },
        ]
    },
    {
        name: "vuejs",
        label: "VueJs",
        details: "Vue.js is a popular JavaScript framework for building user interfaces that can be effective for your website. Here are a few reasons why Vue.js might be a good fit for our website:",
        list: [
            {
                title: "Lightweight and easy to learn:",
                details: "Vue.js is a lightweight framework that is easy to learn, especially for developers familiar with JavaScript and HTML. This can make it a good choice for small to medium-sized projects."
            },
            {
                title: "Reactive and composable:",
                details: "Vue.js uses a reactive and composable data model, which makes it easy to build complex and dynamic user interfaces."
            },
            {
                title: "Flexibility:",
                details: "Vue.js can be easily integrated with other technologies and can be used for building progressive web apps, mobile apps, and even desktop apps."
            },
            {
                title: "Performance:",
                details: "Vue.js uses a virtual DOM, which optimizes updates and reduces the amount of work the browser needs to do. This can lead to better performance and faster load times for your website."
            },
            {
                title: "Large and active community",
                details: "Vue.js has a large and active community, which means there are a lot of resources, tutorials, and libraries available to help you build your website."
            },
            {
                title: "SEO friendly",
                details: "Vue.js allows you to server-side render your components, this means that the website will be rendered on the server and the browser will just display the rendered HTML. This makes it SEO friendly and provides a better user experience for users coming from search engines."
            },
        ]
    },
    {
        name: "angularjs",
        label: "AngularJs",
        details: "Angular is a popular JavaScript framework for building web applications that can be effective for your website. Here are a few reasons why Angular might be a good fit for our website.",
        list: [
            {
                title: "Component-based architecture:",
                details: "Angular uses a component-based architecture, which allows you to build reusable and modular code. This can help you maintain consistency and make development more efficient."
            },
            {
                title: "Two-way data binding:",
                details: "Angular provides two-way data binding, which automatically synchronizes data between the model and view. This can make it easier to handle updates and user interactions."
            },
            {
                title: "TypeScript:",
                details: "Angular is written in TypeScript, which is a superset of JavaScript. TypeScript provides features such as static typing, classes, and interfaces, which can help you write more robust and maintainable code."
            },
            {
                title: "Large and active community:",
                details: "Angular has a large and active community, which means there are a lot of resources, tutorials, and libraries available to help you build your website."
            },
            {
                title: "Built-in tools and features",
                details: "Angular comes with built-in tools and features such as dependency injection, routing, and form validation, which can save you development time and effort."
            },
            {
                title: "SEO friendly",
                details: "Angular has a built-in feature for server-side rendering, which makes it SEO friendly, and provides a better user experience for users coming from search engines."
            },
        ]
    },
    {
        name: "nodejs",
        label: "NodeJs",
        details: "There are several reasons why developers might choose to use Node.js for their web development projects.",
        list: [
            {
                title: "JavaScript everywhere:",
                details: "Node.js allows developers to use JavaScript on both the front-end and back-end of a web application, which can make development more efficient and reduce the need for different languages and development teams."
            },
            {
                title: "High performance:",
                details: "Node.js uses an event-driven, non-blocking I/O model, which makes it well-suited for building high-performance, scalable web applications."
            },
            {
                title: "Large ecosystem:",
                details: "Node.js has a large ecosystem of modules and packages available through npm, which can help developers add functionality to their web applications quickly and easily.."
            },
            {
                title: "Real-time applications:",
                details: "Node.js is well-suited for building real-time applications such as chats, collaboration tools, and live updates."
            },
            {
                title: "Building APIs",
                details: "Node.js is well-suited for building APIs, it is easy to create and manage routes, handle requests and responses, and interact with a database."
            },
            {
                title: "Cross-platform:",
                details: "Node.js is cross-platform, it can run on Windows, Linux, and MacOS, which can save development time and effort."
            },
            {
                title: "Cost-effective:",
                details: "Node.js is open-source and free to use, this can be cost-effective for small and large-scale projects."
            },
            {
                title: "Popularity:",
                details: "Node.js is widely used by developers and has a large community, this means there are a lot of resources, tutorials, and libraries available to help you build your website."
            },
        ]
    },
    {
        name: "python",
        label: "Python",
        details: "Python is a versatile and widely-used programming language that is popular for a wide range of web development and software development projects.",
        list: [
            {
                title: "Versatility:",
                details: "Python is known for its versatility, allowing developers to use it for web development, data analysis, artificial intelligence, scientific computing, automation, and more."
            },
            {
                title: "Readable syntax:",
                details: "Python's simple and readable syntax makes it easier to learn and write, especially for beginners. This leads to faster development and fewer errors."
            },
            {
                title: "Large standard library:",
                details: "Python comes with a large standard library that provides tools and modules for tasks like handling files, interacting with the OS, and working with data structures, reducing the need for third-party packages."
            },
            {
                title: "Extensive ecosystem:",
                details: "With a large ecosystem of third-party packages and libraries, Python supports a wide range of use cases. Tools like Django, Flask, Pandas, TensorFlow, and PyTorch help with everything from web development to machine learning."
            },
            {
                title: "Cross-platform:",
                details: "Python is a cross-platform language, which means it can run on Windows, macOS, and Linux, making it flexible for different development environments."
            },
            {
                title: "Popular in web development:",
                details: "Frameworks like Django and Flask make Python a popular choice for building web applications, offering simplicity, security, and scalability."
            },
            {
                title: "Community and resources:",
                details: "Python has a large and active community, with extensive documentation, tutorials, and resources available. This makes it easier for developers to find help and support."
            },
            {
                title: "Data science and AI:",
                details: "Python is the go-to language for data science, machine learning, and artificial intelligence due to its powerful libraries such as NumPy, Pandas, Scikit-learn, and TensorFlow."
            },
            {
                title: "Automation and scripting:",
                details: "Python excels at automation tasks and writing scripts to automate repetitive jobs, making it a favorite for DevOps and system administration."
            },
            {
                title: "Cost-effective:",
                details: "Python is open-source and free to use, which makes it a cost-effective option for both small and large-scale projects."
            }
        ]
    },
    {
        name: "odoo",
        label: "Odoo",
        details: "Odoo is a comprehensive suite of business applications designed to streamline and automate various aspects of a company's operations, including sales, accounting, inventory, and human resources.",
        list: [
            {
                title: "All-in-one solution:",
                details: "Odoo provides a wide range of integrated applications (modules) like CRM, eCommerce, accounting, inventory, and HR, which cover most business needs in a single platform."
            },
            {
                title: "Customizability:",
                details: "Odoo is highly customizable, allowing businesses to adapt the software to their specific needs by creating custom modules or modifying existing ones."
            },
            {
                title: "Open-source:",
                details: "Odoo offers both community and enterprise versions, with the community edition being open-source and free to use. This allows companies to get started with minimal cost."
            },
            {
                title: "Scalability:",
                details: "Odoo scales easily with growing businesses. Whether you're a small startup or a large enterprise, Odoo's modular structure allows you to add more functionality as you grow."
            },
            {
                title: "Integration with third-party services:",
                details: "Odoo integrates with numerous third-party services and APIs, such as payment gateways, shipping providers, and other enterprise systems, allowing businesses to streamline their processes."
            },
            {
                title: "User-friendly interface:",
                details: "Odoo features a modern, user-friendly interface that simplifies navigation and usability for both technical and non-technical users."
            },
            {
                title: "Automation:",
                details: "Odoo helps automate repetitive tasks like invoicing, order processing, and inventory management, improving efficiency and reducing manual workload."
            },
            {
                title: "Community and support:",
                details: "Odoo has an active global community and extensive documentation, making it easy to find resources and support for both the community and enterprise editions."
            },
            {
                title: "Cloud or on-premise deployment:",
                details: "Odoo can be deployed in the cloud or hosted on-premise, offering flexibility depending on the organization's infrastructure preferences."
            },
            {
                title: "Cost-effective:",
                details: "Odoo’s modular structure and open-source community edition make it a cost-effective solution for businesses of all sizes, with the option to upgrade to the enterprise version for additional features."
            }
        ]
    },
    {
        name: "flutter",
        label: "Flutter",
        details: "Flutter is an open-source UI software development kit (SDK) created by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.",
        list: [
            {
                title: "Single codebase for multiple platforms:",
                details: "With Flutter, developers can write one codebase and deploy it to multiple platforms, including Android, iOS, web, and desktop, reducing development time and effort."
            },
            {
                title: "Fast development with hot reload:",
                details: "Flutter’s 'hot reload' feature allows developers to instantly see the results of code changes, which speeds up the development process by allowing quick iterations and testing."
            },
            {
                title: "Rich and customizable UI components:",
                details: "Flutter offers a wide variety of pre-designed widgets that are highly customizable, enabling developers to create beautiful, custom interfaces with ease."
            },
            {
                title: "Native performance:",
                details: "Flutter compiles to native ARM code for iOS and Android, which ensures high performance and responsiveness similar to natively developed apps."
            },
            {
                title: "Powered by Dart:",
                details: "Flutter uses Dart as its programming language, which is designed for fast apps on any platform. Dart's features, like a modern syntax and strong typing, help build robust apps."
            },
            {
                title: "Growing ecosystem and community:",
                details: "Flutter’s community is rapidly growing, with a vast ecosystem of plugins and packages available through pub.dev, enabling developers to add functionalities easily."
            },
            {
                title: "Cross-platform consistency:",
                details: "Flutter ensures that your app will look and behave consistently across platforms, eliminating discrepancies that usually arise from platform-specific UI elements."
            },
            {
                title: "Backed by Google:",
                details: "Flutter is backed by Google, meaning it is continuously improved and updated, and offers long-term stability for developers."
            },
            {
                title: "Ideal for MVPs and startups:",
                details: "Flutter is great for building Minimum Viable Products (MVPs) as it reduces time-to-market, making it an attractive choice for startups that need to quickly launch products."
            },
            {
                title: "Open-source and free:",
                details: "Flutter is open-source and free to use, making it accessible for developers and companies of all sizes, from individual freelancers to large enterprises."
            }
        ]
    },
    {
        name: "android",
        label: "Android",
        details: "Android is an open-source mobile operating system developed by Google, widely used for smartphones, tablets, and other devices. It provides a powerful platform for developers to build applications for millions of users globally.",
        list: [
            {
                title: "Open-source platform:",
                details: "Android is open-source, allowing developers and manufacturers to modify and customize the OS for various devices and use cases."
            },
            {
                title: "Wide device compatibility:",
                details: "Android runs on a wide range of devices, from smartphones and tablets to smart TVs, wearables, and even cars, offering developers a vast market."
            },
            {
                title: "Google Play Store access:",
                details: "Android applications can be easily distributed to millions of users through the Google Play Store, giving developers a large audience for their apps."
            },
            {
                title: "Customizable UI:",
                details: "Android allows developers to create highly customizable user interfaces using XML and custom components, enabling tailored user experiences."
            },
            {
                title: "Java and Kotlin support:",
                details: "Android development primarily uses Java and Kotlin, two well-established programming languages, offering developers flexibility and robust tools for building applications."
            },
            {
                title: "Extensive developer resources:",
                details: "Android offers extensive documentation, tutorials, and support from Google and its developer community, making it easier for both new and experienced developers to build apps."
            },
            {
                title: "Native performance and features:",
                details: "Android gives access to native features like GPS, camera, Bluetooth, and sensors, allowing developers to build fully-featured and high-performance apps."
            },
            {
                title: "Large user base:",
                details: "With Android being the most widely used mobile OS globally, developers can reach a massive user base, especially in emerging markets."
            },
            {
                title: "Fragmentation and adaptability:",
                details: "Android’s flexibility allows developers to target different hardware configurations and screen sizes, but it also requires testing across multiple devices due to platform fragmentation."
            },
            {
                title: "Integration with Google services:",
                details: "Android seamlessly integrates with Google services like Google Maps, Google Drive, and Google Assistant, offering added value and functionality to apps."
            }
        ]
    },
    {
        name: "ios",
        label: "iOS",
        details: "iOS is Apple's mobile operating system used for iPhone, iPad, and iPod touch devices. Known for its performance, security, and user experience, iOS provides a robust platform for developers to create apps for millions of users worldwide.",
        list: [
            {
                title: "Seamless integration with Apple ecosystem:",
                details: "iOS allows apps to integrate seamlessly with other Apple services and devices, including Macs, Apple Watch, iCloud, and more, creating a unified experience for users."
            },
            {
                title: "High performance and stability:",
                details: "iOS is known for its optimization and smooth performance, thanks to tight hardware-software integration. It offers developers a stable platform with minimal fragmentation."
            },
            {
                title: "High-quality user experience:",
                details: "iOS is recognized for its consistent and polished user interface, which enables developers to build apps that offer a superior user experience with Apple's Human Interface Guidelines."
            },
            {
                title: "Swift and Objective-C support:",
                details: "iOS development is done using either Swift, a modern, fast, and efficient programming language, or Objective-C, giving developers flexible choices for creating apps."
            },
            {
                title: "App Store access:",
                details: "iOS apps can be distributed through the Apple App Store, one of the most popular app marketplaces globally, providing access to millions of potential users."
            },
            {
                title: "Strong security and privacy features:",
                details: "iOS is built with a strong focus on security and privacy, providing features like app sandboxing, data encryption, and regular security updates, making it a trusted platform for users and developers."
            },
            {
                title: "Optimized for premium hardware:",
                details: "iOS apps are optimized for Apple’s premium hardware, including iPhones, iPads, and the latest M1/M2-powered devices, allowing for enhanced app performance and user experience."
            },
            {
                title: "Developer tools and resources:",
                details: "Apple provides a powerful suite of tools like Xcode, Interface Builder, and TestFlight for building, testing, and distributing iOS apps, along with extensive documentation and support."
            },
            {
                title: "Monetization opportunities:",
                details: "The iOS platform offers developers lucrative monetization options through in-app purchases, subscriptions, and paid apps, especially given iOS users tend to spend more on apps."
            },
            {
                title: "Regular OS updates and device support:",
                details: "Apple provides regular iOS updates and long-term support for older devices, ensuring developers can reach a large user base without worrying about significant fragmentation."
            }
        ]
    },
    {
        name: "reactnative",
        label: "React Native",
        details: "React Native is a popular open-source framework developed by Facebook that allows developers to build mobile applications for both iOS and Android using JavaScript and React. It provides a cross-platform solution, enabling the creation of high-performance, native-like apps with a single codebase.",
        list: [
            {
                title: "Cross-platform development:",
                details: "React Native enables developers to create apps for both iOS and Android from a single codebase, reducing development time and effort."
            },
            {
                title: "JavaScript and React:",
                details: "React Native allows developers to build mobile apps using JavaScript and React, technologies familiar to many web developers, making the learning curve smoother."
            },
            {
                title: "Native-like performance:",
                details: "React Native uses native components under the hood, which allows apps to have near-native performance and provide a smooth user experience."
            },
            {
                title: "Hot Reloading:",
                details: "React Native's hot reloading feature allows developers to see the results of code changes in real-time without rebuilding the entire app, speeding up the development process."
            },
            {
                title: "Large community and ecosystem:",
                details: "React Native has a large and active community, along with a wide ecosystem of libraries and tools that help developers build mobile apps quickly and effectively."
            },
            {
                title: "Reusable components:",
                details: "React Native allows developers to build reusable components, reducing duplication of effort and ensuring consistency across the app."
            },
            {
                title: "Third-party plugin support:",
                details: "React Native offers support for third-party plugins and native modules, allowing developers to integrate device-specific features such as GPS, camera, or push notifications."
            },
            {
                title: "Code sharing with web apps:",
                details: "With some effort, developers can share code between React web applications and React Native apps, reducing duplication and making cross-platform development easier."
            },
            {
                title: "Growing popularity:",
                details: "React Native is widely used by companies like Facebook, Instagram, and Airbnb, making it a trusted framework for developing mobile apps."
            },
            {
                title: "Cost-effective development:",
                details: "By enabling cross-platform development, React Native can save both time and cost, especially for startups or businesses looking to target both iOS and Android platforms."
            }
        ]
    },
    {
        name: "mongodb",
        label: "MongoDB",
        details: "MongoDB is a document-oriented, NoSQL database that is designed to handle large amounts of data across many commodity servers, providing high availability and scalability. There are several reasons why developers might choose to use MongoDB for their data storage needs.",
        list: [
            {
                title: "Document-oriented:",
                details: "MongoDB stores data in a format called BSON (binary JSON), which is similar to JSON and allows for easy and intuitive data modeling."
            },
            {
                title: "High performance:",
                details: "MongoDB is designed to handle large amounts of data and can handle high write and read loads, making it a good choice for high-performance applications."
            },
            {
                title: "Scalability:",
                details: "MongoDB is designed to be horizontally scalable, which means that it can be easily scaled out by adding more commodity servers to the cluster."
            },
            {
                title: "High availability:",
                details: "MongoDB is designed to provide high availability and automatic failover, which means that it can continue to operate even in the event of a server failure."
            },
            {
                title: "Flexibility:",
                details: "MongoDB can be easily integrated with other systems, and it supports various programming languages, making it easy to work with."
            },
            {
                title: "Indexing:",
                details: "MongoDB supports a wide range of indexes, including full-text search and geospatial indexing."
            },
            {
                title: "Aggregation:",
                details: "MongoDB supports advanced aggregation operations, like group by, sorting and match, which can be used to analyze large datasets."
            },
            {
                title: "Community support:",
                details: "MongoDB has a large and active community that contributes to the development of the framework, this means that it is frequently updated with new features and bug fixes."
            },
            {
                title: "Cloud support:",
                details: "MongoDB can be easily deployed on cloud providers like AWS, GCP and Azure."
            },
            {
                title: "MongoDB Atlas:",
                details: "MongoDB Atlas is a cloud-based service that allows to deploy, manage and scale MongoDB on the cloud with ease and without any operational overhead."
            },
        ]
    },
    {
        name: "mysql",
        label: "MySQL",
        details: "MySQL is a widely-used open-source relational database management system (RDBMS) that offers many benefits,",
        list: [
            {
                title: "Scalability:",
                details: "MySQL is highly scalable and can handle databases of all sizes, from small applications to large enterprise solutions."
            },
            {
                title: "Speed:",
                details: "MySQL is known for its fast performance, especially when it comes to read-intensive tasks. It uses indexing and caching techniques to optimize database queries and reduce query response times."
            },
            {
                title: "Security:",
                details: "MySQL provides strong security features, including encryption, authentication, and access control, to ensure the safety of your data."
            },
            {
                title: "High availability:",
                details: "MongoDB is designed to provide high availability and automatic failover, which means that it can continue to operate even in the event of a server failure."
            },
            {
                title: "Flexibility:",
                details: "MySQL is very flexible and can be used with a wide range of programming languages and platforms, including PHP, Java, Python, and many others."
            },
            {
                title: "Reliability:",
                details: "MySQL is a reliable database management system that has been around for over two decades and is used by many large companies around the world"
            },
            {
                title: "Cost-effective:",
                details: "MySQL is open-source software, which means it is free to use, and there are no licensing fees or restrictions on its use."
            },
            {
                title: "Community support:",
                details: "MySQL has a large and active community of developers and users who provide support, share knowledge, and contribute to the development of the software."
            },
        ]
    },
    {
        name: "postgresql",
        label: "PostgreSQL",
        details: "PostgreSQL is an open-source relational database management system that is widely used for web and mobile applications, as well as data warehousing and analytics. There are several reasons why developers and organizations might choose to use PostgreSQL.",
        list: [
            {
                title: "Advanced features:",
                details: "PostgreSQL has a wide range of advanced features like full-text search, spatial data support, and JSON data type. It also supports advanced data modeling and a variety of indexing options, making it a good choice for complex data-driven applications."
            },
            {
                title: "Reliability and performance:",
                details: "PostgreSQL is known for its reliability and performance, it has a robust architecture that can handle high concurrency and large amounts of data."
            },
            {
                title: "Extensibility:",
                details: "PostgreSQL is highly extensible, allowing developers to create custom functions and operators, and to add new data types."
            },
            {
                title: "Open-source:",
                details: "PostgreSQL is an open-source software, which means it's free to use and developers can customize it to meet their needs."
            },
            {
                title: "Strong community:",
                details: "PostgreSQL has a large and active community of developers, which means there are many resources available, including tutorials, documentation, and third-party libraries."
            },
            {
                title: "ACID compliant:",
                details: "PostgreSQL guarantees the Atomicity, Consistency, Isolation, Durability (ACID) properties, which makes it a good choice for applications that require data consistency and integrity."
            },
            {
                title: "Cross-platform:",
                details: "PostgreSQL can run on multiple platforms including Windows, Linux, and macOS."
            },
            {
                title: "Good for analytics:",
                details: "PostgreSQL has built-in support for analytical functions and can handle large datasets and complex queries efficiently, making it a good choice for data warehousing and analytics."
            },
        ]
    },
    {
        name: "sqlite",
        label: "SQLite",
        details: "SQLite is a lightweight, serverless, self-contained relational database management system. It is embedded into applications and is known for its simplicity, making it a popular choice for local databases in mobile, embedded, and desktop applications.",
        list: [
            {
                title: "Serverless architecture:",
                details: "SQLite is serverless, meaning it does not require a separate server process. The database is stored in a single file that can be directly accessed, which simplifies setup and reduces resource overhead."
            },
            {
                title: "Lightweight and fast:",
                details: "SQLite is designed to be lightweight and fast, with minimal configuration, making it ideal for applications where performance and simplicity are critical."
            },
            {
                title: "Self-contained database:",
                details: "The entire database (schema, data, etc.) is stored in a single cross-platform disk file, making SQLite easy to manage, back up, and transfer."
            },
            {
                title: "Zero configuration:",
                details: "Unlike traditional databases, SQLite does not require setup or administration. It can be embedded directly into an application, making it an ideal choice for developers who need a simple and easy-to-use database solution."
            },
            {
                title: "ACID-compliant:",
                details: "SQLite adheres to the principles of ACID (Atomicity, Consistency, Isolation, Durability), ensuring reliable and safe transactions, which makes it suitable for applications that require data integrity."
            },
            {
                title: "Cross-platform compatibility:",
                details: "SQLite works on a wide range of platforms, including Windows, macOS, Linux, iOS, and Android, providing flexibility for developers to use it in various environments."
            },
            {
                title: "Small footprint:",
                details: "SQLite has a very small code footprint (usually less than 1 MB) and can run with minimal memory, making it perfect for mobile and embedded systems."
            },
            {
                title: "Used in mobile apps:",
                details: "SQLite is commonly used as a local database solution for mobile apps on platforms like Android and iOS due to its efficiency and ease of use."
            },
            {
                title: "No external dependencies:",
                details: "Since SQLite is a self-contained library, it does not require any external dependencies, reducing the complexity of deployment."
            },
            {
                title: "Widely adopted:",
                details: "SQLite is one of the most widely used database engines in the world, found in everything from mobile applications to browsers, embedded systems, and more."
            }
        ]
    },
    {
        name: "firebase",
        label: "Firebase",
        details: "Firebase is a platform developed by Google that provides a suite of cloud-based services to help developers build and scale mobile and web applications. It offers a variety of tools for authentication, real-time databases, analytics, cloud storage, and hosting, among others.",
        list: [
            {
                title: "Real-time database:",
                details: "Firebase's real-time database allows data synchronization between users in real-time, making it ideal for building collaborative and live-update applications such as chats or social networks."
            },
            {
                title: "Cloud Firestore:",
                details: "Firestore is Firebase’s scalable NoSQL cloud database that allows developers to store, sync, and query data for both web and mobile apps with real-time listeners."
            },
            {
                title: "Authentication:",
                details: "Firebase Authentication offers secure, easy-to-use sign-in methods, including email/password, Google, Facebook, GitHub, and anonymous logins."
            },
            {
                title: "Cloud Functions:",
                details: "Firebase Cloud Functions lets developers run backend code in response to events triggered by Firebase features and HTTPS requests, without needing to manage servers."
            },
            {
                title: "Cloud Storage:",
                details: "Firebase Cloud Storage provides a simple, powerful, and cost-effective object storage solution for storing user-generated content like images, videos, and documents."
            },
            {
                title: "Firebase Analytics:",
                details: "Firebase Analytics offers free and unlimited app analytics, helping developers understand user behavior and track custom events in real time."
            },
            {
                title: "Push notifications with Firebase Cloud Messaging (FCM):",
                details: "Firebase Cloud Messaging allows developers to send notifications to users across platforms, including iOS, Android, and the web, without worrying about server infrastructure."
            },
            {
                title: "Hosting:",
                details: "Firebase Hosting offers fast and secure static web hosting for developers, with global content delivery networks (CDNs) ensuring content is quickly delivered to users."
            },
            {
                title: "Cross-platform support:",
                details: "Firebase supports Android, iOS, and web apps, enabling developers to build cross-platform applications with a single backend infrastructure."
            },
            {
                title: "Machine learning (ML Kit):",
                details: "Firebase ML Kit provides machine learning capabilities for developers, allowing them to integrate features like image recognition, text extraction, and language translation into their apps."
            }
        ]
    }
]

export const OurTeamData = [
    {
        id: "developer-1",
        name: "Pooja Vaghani",
        image: "/images/female-developer.avif",
        role: "Frontend Developer",
        description: "Passionate MERN Stack Developer with experience in building dynamic web applications. Skilled in React, Node.js, and MongoDB with a strong problem-solving mindset. Adept at creating scalable, high-performance applications with modern web technologies.",
        skills: {
            professionalSkills: ["HTML", "CSS", "JavaScript", "ReactJs", "NextJs", "NodeJs"],
            additionalSkills: ["Communication", "Teamwork", "Problem Solving", "Time Management"]
        },
        languages: [
            //Basic-(50%), Conversational-(75%), Fluent-(90%), Native or Bilingual(100%)
            {
                name: "German",
                level: "Basic",
                percentage: 50
            },
            {
                name: "Turkish",
                level: "Fluent",
                percentage: 90
            },
            {
                name: "English",
                level: "Conversational",
                percentage: 75
            },
            {
                name: "Marathi",
                level: "Conversational",
                percentage: 75
            },
            {
                name: "Hindi",
                level: "Native or Bilingual",
                percentage: 100
            },
            {
                name: "Gujarati",
                level: "Native or Bilingual",
                percentage: 100
            },
        ],
        experience: [
            {
                companyName: "Onehub Solutions",
                startDate: "october, 2022",
                endDate: "Present",
                role: "MERN Stack Developer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                companyName: "Scriptus Solution",
                startDate: "May, 2022",
                endDate: "November, 2022",
                role: "ReactJs Developer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ],
        education: {
            collageName: "Veer Narmad South Gujarat university",
            degree: "Bachelor of Computer Applications",
            startDate: "June, 2021",
            endDate: "April, 2024"
        },
        certifications: [
            {
                id: "dev-1-cer-1",
                title: "Full Stack Web Development",
                image: "/images/certificate.jpg",
                description: "Completed a comprehensive full-stack development course covering MERN stack technologies.",
                organization: "Coursera",
                startDate: "January, 2021",
                endDate: "June, 2021"
            }
        ],
        portfolios: [
            {
                projectName: "E-Commerce Website",
                industry: "Retail",
                url: "https://ecommerce-project.com",
                portfolioImages: [
                    "/images/portfolio-1.jpg",
                    "/images/portfolio-2.jpg",
                    "/images/portfolio-3.jpg",
                    "/images/portfolio-4.jpg",
                    "/images/portfolio-5.jpg",
                    "/images/portfolio-6.jpg",],
                technologies: ["NextJs", "TypeScript", "TailwindCSS", "NodeJs", "MongoDB"],
                description: "Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.",
                role: "MERN Stack Developer",
                startDate: "March, 2023",
                endDate: "February, 2024"
            },
            {
                projectName: "Task Management App",
                industry: "Productivity",
                url: "",
                portfolioImages: [
                    "/images/portfolio-5.jpg",
                    "/images/portfolio-2.jpg",
                    "/images/portfolio-7.jpg",
                    "/images/portfolio-6.jpg",
                    "/images/portfolio-1.jpg",
                    "/images/portfolio-8.jpg",
                ],
                technologies: ["ReactJs", "TailwindCSS", "Redux", "NodeJs", "MongoDB"],
                description: "Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.",
                role: "Full Stack Developer",
                startDate: "",
                endDate: ""
            }
        ]
    },
    {
        id: "developer-2",
        name: "Developer 2",
        image: "/images/female-develoer-2.jpg",
        role: "MERN Stack Developer",
        description: "Passionate MERN Stack Developer with experience in building dynamic web applications. Skilled in React, Node.js, and MongoDB with a strong problem-solving mindset. Adept at creating scalable, high-performance applications with modern web technologies.",
        skills: {
            professionalSkills: ["HTML", "CSS", "JavaScript", "ReactJs", "NextJs", "NodeJs"],
            additionalSkills: ["Communication", "Teamwork", "Problem Solving", "Time Management"]
        },
        languages: [
            //Basic, Conversational, Fluent, Native or Bilingual
            {
                name: "English",
                level: "Conversational",
                percentage: 75
            },
            {
                name: "Hindi",
                level: "Native or Bilingual",
                percentage: 100
            },
            {
                name: "Gujarati",
                level: "Native or Bilingual",
                percentage: 100
            },
        ],
        experience: [
            {
                companyName: "Onehub Solutions",
                startDate: "october, 2022",
                endDate: "Present",
                role: "MERN Stack Developer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                companyName: "Scriptus Solution",
                startDate: "May, 2022",
                endDate: "November, 2022",
                role: "ReactJs Developer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ],
        education: {
            collageName: "Veer Narmad South Gujarat university",
            degree: "Bachelor of Computer Applications (BCA)",
            startDate: "June, 2021",
            endDate: "April, 2024"
        },
        certifications: [],
        portfolios: [
            {
                projectName: "E-Commerce Website",
                industry: "Retail",
                url: "https://ecommerce-project.com",
                portfolioImages: [
                    "/images/portfolio-1.jpg",
                    "/images/portfolio-2.jpg",
                    "/images/portfolio-3.jpg",
                    "/images/portfolio-4.jpg",
                    "/images/portfolio-5.jpg",
                    "/images/portfolio-6.jpg",],
                technologies: ["NextJs", "TypeScript", "TailwindCSS", "NodeJs", "MongoDB"],
                description: "Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.",
                role: "MERN Stack Developer",
                startDate: "March, 2023",
                endDate: "February, 2024"
            },
            {
                projectName: "Task Management App",
                industry: "Productivity",
                url: "",
                portfolioImages: [
                    "/images/portfolio-5.jpg",
                    "/images/portfolio-6.jpg",
                    "/images/portfolio-7.jpg",
                    "/images/portfolio-8.jpg",
                    "/images/portfolio-1.jpg",
                    "/images/portfolio-2.jpg",],
                technologies: ["ReactJs", "TailwindCSS", "Redux", "NodeJs", "MongoDB"],
                description: "Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.",
                role: "Full Stack Developer",
                startDate: "",
                endDate: ""
            }
        ]
    },
    {
        id: "developer-3",
        name: "Developer 3",
        image: "/images/male-avatar.png",
        role: "MERN Stack Developer",
        description: "Passionate MERN Stack Developer with experience in building dynamic web applications. Skilled in React, Node.js, and MongoDB with a strong problem-solving mindset. Adept at creating scalable, high-performance applications with modern web technologies.",
        skills: {
            professionalSkills: ["HTML", "CSS", "JavaScript", "ReactJs", "NextJs", "NodeJs"],
            additionalSkills: ["Communication", "Teamwork", "Problem Solving", "Time Management"]
        },
        languages: [
            //Basic, Conversational, Fluent, Native or Bilingual
            {
                name: "English",
                level: "Conversational",
                percentage: 75
            },
            {
                name: "Hindi",
                level: "Native or Bilingual",
                percentage: 100
            },
            {
                name: "Gujarati",
                level: "Native or Bilingual",
                percentage: 100
            },
        ],
        experience: [
            {
                companyName: "Onehub Solutions",
                startDate: "october, 2022",
                endDate: "Present",
                role: "MERN Stack Developer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                companyName: "Scriptus Solution",
                startDate: "May, 2022",
                endDate: "November, 2022",
                role: "ReactJs Developer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ],
        education: {
            collageName: "Veer Narmad South Gujarat university",
            degree: "Bachelor of Computer Applications",
            startDate: "June, 2021",
            endDate: "April, 2024"
        },
        certifications: [
            {
                id: "dev-3-cer-1",
                title: "Full Stack Web Development",
                image: "/images/certificate.jpg",
                description: "Completed a comprehensive full-stack development course covering MERN stack technologies.",
                organization: "Coursera",
                startDate: "January, 2021",
                endDate: "June, 2021"
            }
        ],
        portfolios: [
            {
                projectName: "E-Commerce Website",
                industry: "Retail",
                url: "https://ecommerce-project.com",
                portfolioImages: [
                    "/images/portfolio-1.jpg",
                    "/images/portfolio-2.jpg",
                    "/images/portfolio-3.jpg",
                    "/images/portfolio-4.jpg",
                    "/images/portfolio-5.jpg",
                    "/images/portfolio-6.jpg",],
                technologies: ["NextJs", "TypeScript", "TailwindCSS", "NodeJs", "MongoDB"],
                description: "Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.",
                role: "MERN Stack Developer",
                startDate: "March, 2023",
                endDate: "February, 2024"
            },
            {
                projectName: "Task Management App",
                industry: "Productivity",
                url: "",
                portfolioImages: [
                    "/images/portfolio-5.jpg",
                    "/images/portfolio-6.jpg",
                    "/images/portfolio-7.jpg",
                    "/images/portfolio-8.jpg",
                    "/images/portfolio-1.jpg",
                    "/images/portfolio-2.jpg",],
                technologies: ["ReactJs", "TailwindCSS", "Redux", "NodeJs", "MongoDB"],
                description: "Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.",
                role: "Full Stack Developer",
                startDate: "",
                endDate: ""
            }
        ]
    },
    {
        id: "developer-4",
        name: "Developer 4",
        image: "/images/female-avatar.png",
        role: "MERN Stack Developer",
        description: "Passionate MERN Stack Developer with experience in building dynamic web applications. Skilled in React, Node.js, and MongoDB with a strong problem-solving mindset. Adept at creating scalable, high-performance applications with modern web technologies.",
        skills: {
            professionalSkills: ["HTML", "CSS", "JavaScript", "ReactJs", "NextJs", "NodeJs"],
            additionalSkills: ["Communication", "Teamwork", "Problem Solving", "Time Management"]
        },
        languages: [
            //Basic, Conversational, Fluent, Native or Bilingual
            {
                name: "English",
                level: "Conversational",
                percentage: 75
            },
            {
                name: "Hindi",
                level: "Native or Bilingual",
                percentage: 100
            },
            {
                name: "Gujarati",
                level: "Native or Bilingual",
                percentage: 100
            },
        ],
        experience: [
            {
                companyName: "Onehub Solutions",
                startDate: "october, 2022",
                endDate: "Present",
                role: "MERN Stack Developer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                companyName: "Scriptus Solution",
                startDate: "May, 2022",
                endDate: "November, 2022",
                role: "ReactJs Developer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ],
        education: {
            collageName: "Veer Narmad South Gujarat university",
            degree: "Bachelor of Computer Applications",
            startDate: "June, 2021",
            endDate: "April, 2024"
        },
        certifications: [
            {
                id: "dev-4-cer-1",
                title: "Full Stack Web Development",
                image: "/images/certificate.png",
                description: "Completed a comprehensive full-stack development course covering MERN stack technologies.",
                organization: "Coursera",
                startDate: "January, 2021",
                endDate: "June, 2021"
            }
        ],
        portfolios: [
            {
                projectName: "E-Commerce Website",
                industry: "Retail",
                url: "https://ecommerce-project.com",
                portfolioImages: [
                    "/images/portfolio-1.jpg",
                    "/images/portfolio-2.jpg",
                    "/images/portfolio-3.jpg",
                    "/images/portfolio-4.jpg",
                    "/images/portfolio-5.jpg",
                    "/images/portfolio-6.jpg",],
                technologies: ["NextJs", "TypeScript", "TailwindCSS", "NodeJs", "MongoDB"],
                description: "Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.",
                role: "MERN Stack Developer",
                startDate: "March, 2023",
                endDate: "February, 2024"
            },
            {
                projectName: "Task Management App",
                industry: "Productivity",
                url: "",
                portfolioImages: [
                    "/images/portfolio-5.jpg",
                    "/images/portfolio-6.jpg",
                    "/images/portfolio-7.jpg",
                    "/images/portfolio-8.jpg",
                    "/images/portfolio-1.jpg",
                    "/images/portfolio-2.jpg",],
                technologies: ["ReactJs", "TailwindCSS", "Redux", "NodeJs", "MongoDB"],
                description: "Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.",
                role: "Full Stack Developer",
                startDate: "",
                endDate: ""
            }
        ]
    },
    {
        id: "developer-5",
        name: "Developer 5",
        image: "/images/male-avatar.png",
        role: "MERN Stack Developer",
        description: "Passionate MERN Stack Developer with experience in building dynamic web applications. Skilled in React, Node.js, and MongoDB with a strong problem-solving mindset. Adept at creating scalable, high-performance applications with modern web technologies.",
        skills: {
            professionalSkills: ["HTML", "CSS", "JavaScript", "ReactJs", "NextJs", "NodeJs"],
            additionalSkills: ["Communication", "Teamwork", "Problem Solving", "Time Management"]
        },
        languages: [
            //Basic, Conversational, Fluent, Native or Bilingual
            {
                name: "English",
                level: "Conversational",
                percentage: 75
            },
            {
                name: "Hindi",
                level: "Native or Bilingual",
                percentage: 100
            },
            {
                name: "Gujarati",
                level: "Native or Bilingual",
                percentage: 100
            },
        ],
        experience: [
            {
                companyName: "Onehub Solutions",
                startDate: "october, 2022",
                endDate: "Present",
                role: "MERN Stack Developer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                companyName: "Scriptus Solution",
                startDate: "May, 2022",
                endDate: "November, 2022",
                role: "ReactJs Developer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ],
        education: {
            collageName: "Veer Narmad South Gujarat university",
            degree: "Bachelor of Computer Applications",
            startDate: "June, 2021",
            endDate: "April, 2024"
        },
        certifications: [],
        portfolios: [
            {
                projectName: "E-Commerce Website",
                industry: "Retail",
                url: "https://ecommerce-project.com",
                portfolioImages: [
                    "/images/portfolio-1.jpg",
                    "/images/portfolio-2.jpg",
                    "/images/portfolio-3.jpg",
                    "/images/portfolio-4.jpg",
                    "/images/portfolio-5.jpg",
                    "/images/portfolio-6.jpg",],
                technologies: ["NextJs", "TypeScript", "TailwindCSS", "NodeJs", "MongoDB"],
                description: "Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.",
                role: "MERN Stack Developer",
                startDate: "March, 2023",
                endDate: "February, 2024"
            },
            {
                projectName: "Task Management App",
                industry: "Productivity",
                url: "",
                portfolioImages: [
                    "/images/portfolio-5.jpg",
                    "/images/portfolio-6.jpg",
                    "/images/portfolio-7.jpg",
                    "/images/portfolio-8.jpg",
                    "/images/portfolio-1.jpg",
                    "/images/portfolio-2.jpg",],
                technologies: ["ReactJs", "TailwindCSS", "Redux", "NodeJs", "MongoDB"],
                description: "Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.",
                role: "Full Stack Developer",
                startDate: "",
                endDate: ""
            }
        ]
    },
    {
        id: "developer-6",
        name: "Developer 6",
        image: "/images/female-avatar.png",
        role: "MERN Stack Developer",
        description: "Passionate MERN Stack Developer with experience in building dynamic web applications. Skilled in React, Node.js, and MongoDB with a strong problem-solving mindset. Adept at creating scalable, high-performance applications with modern web technologies.",
        skills: {
            professionalSkills: ["HTML", "CSS", "JavaScript", "ReactJs", "NextJs", "NodeJs"],
            additionalSkills: ["Communication", "Teamwork", "Problem Solving", "Time Management"]
        },
        languages: [
            //Basic, Conversational, Fluent, Native or Bilingual
            {
                name: "English",
                level: "Conversational",
                percentage: 75
            },
            {
                name: "Hindi",
                level: "Native or Bilingual",
                percentage: 100
            },
            {
                name: "Gujarati",
                level: "Native or Bilingual",
                percentage: 100
            },
        ],
        experience: [
            {
                companyName: "Onehub Solutions",
                startDate: "october, 2022",
                endDate: "Present",
                role: "MERN Stack Developer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                companyName: "Scriptus Solution",
                startDate: "May, 2022",
                endDate: "November, 2022",
                role: "ReactJs Developer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ],
        education: {
            collageName: "Veer Narmad South Gujarat university",
            degree: "Bachelor of Computer Applications",
            startDate: "June, 2021",
            endDate: "April, 2024"
        },
        certifications: [
            {
                id: "dev-6-cer-1",
                title: "Full Stack Web Development",
                image: "/images/certificate.png",
                description: "Completed a comprehensive full-stack development course covering MERN stack technologies.",
                organization: "Coursera",
                startDate: "January, 2021",
                endDate: "June, 2021"
            }
        ],
        portfolios: [
            {
                projectName: "E-Commerce Website",
                industry: "Retail",
                url: "https://ecommerce-project.com",
                portfolioImages: [
                    "/images/portfolio-1.jpg",
                    "/images/portfolio-2.jpg",
                    "/images/portfolio-3.jpg",
                    "/images/portfolio-4.jpg",
                    "/images/portfolio-5.jpg",
                    "/images/portfolio-6.jpg",
                ],
                technologies: ["NextJs", "TypeScript", "TailwindCSS", "NodeJs", "MongoDB"],
                description: "Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.",
                role: "MERN Stack Developer",
                startDate: "March, 2023",
                endDate: "February, 2024"
            },
            {
                projectName: "Task Management App",
                industry: "Productivity",
                url: "",
                portfolioImages: [
                    "/images/portfolio-5.jpg",
                    "/images/portfolio-6.jpg",
                    "/images/portfolio-7.jpg",
                    "/images/portfolio-8.jpg",
                    "/images/portfolio-1.jpg",
                    "/images/portfolio-2.jpg",
                ],
                technologies: ["ReactJs", "TailwindCSS", "Redux", "NodeJs", "MongoDB"],
                description: "Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.",
                role: "Full Stack Developer",
                startDate: "",
                endDate: ""
            }
        ]
    },
    {
        id: "developer-7",
        name: "Developer 7",
        image: "/images/male-avatar.png",
        role: "MERN Stack Developer",
        description: "Passionate MERN Stack Developer with experience in building dynamic web applications. Skilled in React, Node.js, and MongoDB with a strong problem-solving mindset. Adept at creating scalable, high-performance applications with modern web technologies.",
        skills: {
            professionalSkills: ["HTML", "CSS", "JavaScript", "ReactJs", "NextJs", "NodeJs"],
            additionalSkills: ["Communication", "Teamwork", "Problem Solving", "Time Management"]
        },
        languages: [
            //Basic, Conversational, Fluent, Native or Bilingual
            {
                name: "English",
                level: "Conversational",
                percentage: 75
            },
            {
                name: "Hindi",
                level: "Native or Bilingual",
                percentage: 100
            },
            {
                name: "Gujarati",
                level: "Native or Bilingual",
                percentage: 100
            },
        ],
        experience: [
            {
                companyName: "Onehub Solutions",
                startDate: "october, 2022",
                endDate: "Present",
                role: "MERN Stack Developer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                companyName: "Scriptus Solution",
                startDate: "May, 2022",
                endDate: "November, 2022",
                role: "ReactJs Developer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ],
        education: {
            collageName: "Veer Narmad South Gujarat university",
            degree: "Bachelor of Computer Applications",
            startDate: "June, 2021",
            endDate: "April, 2024"
        },
        certifications: [
            {
                id: "dev-7-cer-1",
                title: "Full Stack Web Development",
                image: "/images/certificate.png",
                description: "Completed a comprehensive full-stack development course covering MERN stack technologies.",
                organization: "Coursera",
                startDate: "January, 2021",
                endDate: "June, 2021"
            }
        ],
        portfolios: [
            {
                projectName: "E-Commerce Website",
                industry: "Retail",
                url: "https://ecommerce-project.com",
                portfolioImages: [
                    "/images/portfolio-1.jpg",
                    "/images/portfolio-2.jpg",
                    "/images/portfolio-3.jpg",
                    "/images/portfolio-4.jpg",
                    "/images/portfolio-5.jpg",
                    "/images/portfolio-6.jpg",
                ],
                technologies: ["NextJs", "TypeScript", "TailwindCSS", "NodeJs", "MongoDB"],
                description: "Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.",
                role: "MERN Stack Developer",
                startDate: "March, 2023",
                endDate: "February, 2024"
            },
            {
                projectName: "Task Management App",
                industry: "Productivity",
                url: "",
                portfolioImages: [
                    "/images/portfolio-5.jpg",
                    "/images/portfolio-6.jpg",
                    "/images/portfolio-7.jpg",
                    "/images/portfolio-8.jpg",
                    "/images/portfolio-1.jpg",
                    "/images/portfolio-2.jpg",
                ],
                technologies: ["ReactJs", "TailwindCSS", "Redux", "NodeJs", "MongoDB"],
                description: "Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.",
                role: "Full Stack Developer",
                startDate: "",
                endDate: ""
            }
        ]
    },
    {
        id: "developer-8",
        name: "Developer 8",
        image: "/images/female-avatar.png",
        role: "MERN Stack Developer",
        description: "Passionate MERN Stack Developer with experience in building dynamic web applications. Skilled in React, Node.js, and MongoDB with a strong problem-solving mindset. Adept at creating scalable, high-performance applications with modern web technologies.",
        skills: {
            professionalSkills: ["HTML", "CSS", "JavaScript", "ReactJs", "NextJs", "NodeJs"],
            additionalSkills: ["Communication", "Teamwork", "Problem Solving", "Time Management"]
        },
        languages: [
            //Basic-(50%), Conversational-(75%), Fluent-(90%), Native or Bilingual(100%)
            {
                name: "German",
                level: "Basic",
                percentage: 50
            },
            {
                name: "Turkish",
                level: "Fluent",
                percentage: 90
            },
            {
                name: "English",
                level: "Conversational",
                percentage: 75
            },
            {
                name: "Marathi",
                level: "Conversational",
                percentage: 75
            },
            {
                name: "Hindi",
                level: "Native or Bilingual",
                percentage: 100
            },
            {
                name: "Gujarati",
                level: "Native or Bilingual",
                percentage: 100
            },
        ],
        experience: [
            {
                companyName: "Onehub Solutions",
                startDate: "october, 2022",
                endDate: "Present",
                role: "MERN Stack Developer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                companyName: "Scriptus Solution",
                startDate: "May, 2022",
                endDate: "November, 2022",
                role: "ReactJs Developer",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
        ],
        education: {
            collageName: "Veer Narmad South Gujarat university",
            degree: "Bachelor of Computer Applications",
            startDate: "June, 2021",
            endDate: "April, 2024"
        },
        certifications: [],
        portfolios: [
            {
                projectName: "E-Commerce Website",
                industry: "Retail",
                url: "https://ecommerce-project.com",
                portfolioImages: [
                    "/images/portfolio-1.jpg"
                    , "/images/portfolio-2.jpg"
                    , "/images/portfolio-3.jpg"
                    , "/images/portfolio-4.jpg"
                    , "/images/portfolio-5.jpg"
                    , "/images/portfolio-6.jpg"
                ],
                technologies: ["NextJs", "TypeScript", "TailwindCSS", "NodeJs", "MongoDB"],
                description: "Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.Developed a full-fledged e-commerce platform with product listing, cart, and payment gateway integration.",
                role: "MERN Stack Developer",
                startDate: "March, 2023",
                endDate: "February, 2024"
            },
            {
                projectName: "Task Management App",
                industry: "Productivity",
                url: "",
                portfolioImages: [
                    "/images/portfolio-5.jpg",
                    "/images/portfolio-6.jpg",
                    "/images/portfolio-7.jpg",
                    "/images/portfolio-8.jpg",
                    "/images/portfolio-1.jpg",
                    "/images/portfolio-2.jpg",
                ],
                technologies: ["ReactJs", "TailwindCSS", "Redux", "NodeJs", "MongoDB"],
                description: "Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.Built a task management application with real-time collaboration and notification features.",
                role: "Full Stack Developer",
                startDate: "",
                endDate: ""
            }
        ]
    }
]

export const InformationData = {
    email: "vaishnaviassociates.services@gmail.com",
    address: "Nearby Forum Mall, Kukatpally, PIN - 500085, Hyderabad",
    addressLink: "https://maps.google.com/?q=Forum+Mall+Kukatpally+Hyderabad+Telangana",
    addressIframLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.8876807833075!2d78.4862417751681!3d17.53673518337728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f86f78819ab%3A0x7d6f51cb32b2ef89!2sKompally%2C%20Hyderabad%2C%20Telangana%20500100!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    contactNumber: "+91 92999 99676",
    whatsappNumber: "+91 62818 32385"
}

export const Logos = {
    verticalBlackLogo: "/images/vaishanvias.png",
}