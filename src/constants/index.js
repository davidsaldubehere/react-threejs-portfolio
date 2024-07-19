import {
  psu3d,
  creator,
  linkedin,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sheetz,
  walmart,
  psu,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  georouter,
  vrcam,
  autotyper,
  psuwebdevclub,
  app,
  lab,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "competitions",
    title: "Awards",
  },
  {
    id: "courses",
    title: "Courses",
  },
  {
    id: "resume",
    title: "Résumé",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/davidsaldubehere/",
  },
  {
    title: "GitHub",
    icon: github,
    link: "https://github.com/davidsaldubehere",
  },
  {
    title: "3D Printing Club",
    icon: psu3d,
    link: "https://sites.psu.edu/3dprintingclub/",
  },
  {
    title: "Website Development Club",
    icon: psuwebdevclub,
    link: "https://psuwebdevclub.netlify.app/",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Undergraduate Research Assistant",
    company_name: "Almekkawy UIT Lab",
    icon: lab,
    iconBg: "#FFFFFF",
    date: "January 2024 - Present",
    points: [
      "Working on a thesis regarding the enhancement of U-Net models for semantic segmentation under Dr. Almekkawy.",
      "Improvements include integrating vision transformer blocks and state space models (Mamba) to improve the range of features captured by the model.",
      "Designed networks for use on medical imaging datasets with a focus on small sets of MRI and Ultrasound images.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Penn State Office of Research Information Systems",
    icon: psu,
    iconBg: "#FFFFFF",
    date: "May 2023 - Present",
    points: [
      "Software engineering intern at Penn State's Office of Research Information Systems.",
      "Developed a project to drastically reduce deployment time of software releases by adding the capability to hot-reload critical data in all production research applications used by Penn State researchers",
      "Gained valuable experience with C#, SQL Server, Azure CI/CD, ASP .NET Webforms/MVC, and Visual Studio.",
      "Learned how to secure and process large amounts of sensitive data via firewalls, Active Directory, and DB roles.",
    ],
  },
  {
    title: "Sheetz Programming Intern",
    company_name: "Sheetz",
    icon: sheetz,
    iconBg: "#FFFFFF",
    date: "May 2023 - Present",
    points: [
      "Applications and Development intern at Sheetz.",
      "Worked on a project to help monitor competitor pricing of various convenience products.",
      "Software is now in production and is being used by 1000+ corporate and store employees across the U.S.",
      "Designed front-end UIs with React, Remix, Figma, Tailwind CSS, Bootstrap, and Material UI",
      "Gained valuable experience with the Agile development process and technologies such as OpenShift, Docker, Kubernetes, Java, Spring Boot/MVC for the API backend, Hibernate, and GitLab",
      "Attended networking events to learn more about the company and the industry.",
      "Ran penetration tests and patched security vulnerabilities such as XSS, CSRF, and SQL Injections with the Checkmarx security suite",
    ],
  },

  {
    title: "PSU CMPSC 132 Course Grader",
    company_name:
      "The Pennsylvania State University Computer Science Department",
    icon: psu,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - May 2023",
    points: [
      "Graded exams and homework submissions for Penn State's University Park CMPSC 132 course sections.",
      "Provided feedback to students on their exam and homework submissions.",
      "Debugged student submissions to help them understand the concepts of the course.",
    ],
  },
  {
    title: "Produce Associate",
    company_name: "Walmart",
    icon: walmart,
    iconBg: "#FFFFFF",
    date: "June 2021 - April 2023",
    points: [
      "Maintained current knowledge of shelf planograms and end caps to merchandise products.",
      "Received and unloaded new items upon delivery and checked products for damage and order accuracy.",
      "Helped customers complete purchases by moving heavy items, collecting payments, and bagging items.",
      "Managed a safe, neat, and clean working environment and closely monitored for wet floors or other hazards.",
    ],
  },
];

const competitions = [
  {
    title: "PA TSA Regional Coding Competition",
    description:
      "I won 1st place in the PA TSA Regional Coding Competition for my antenna controller interface application.",
    date: "February 2020",
    location: "Richland High School",
  },
  {
    title: "PA TSA Regional Animatronics Competition",
    description:
      "I won 1st place in the PA TSA Regional Animatronics Competition for my fantasy animatronic display.",
    date: "February 2022",
    location: "Richland High School",
  },
  {
    title: "PA TSA Regional Coding Competition",
    description:
      "I won 1st place in the PA TSA Regional Coding Competition for my Pig Latin translator application.",
    date: "February 2022",
    location: "Richland High School",
  },
  {
    title: "PA TSA State Animatronics Competition",
    description:
      "I won 1st place in the PA TSA State Animatronics Competition for my improved fantasy animatronic display.",
    date: "May 2022",
    location: "7 Springs Resort",
  },
  {
    title: "PA TSA State Coding Competition",
    description:
      "I won 5th place in the PA TSA State Coding Competition which included a timed algorithmic problem-solving test.",
    date: "May 2022",
    location: "7 Springs Resort",
  },
  {
    title: "Margaret C Miller Scholarship Recipient",
    description:
      "I was awarded the Margaret C Miller Scholarship for my high school achievements and my future plans to pursue a career in computer science.",
    date: "June 2022",
    location: "Mifflin County High School",
  },
];
const coursework = [
  {
    title: "CMPSC 221: Object Oriented Programming",
    description:
      "The course covers advanced object-oriented principles and their application to web-based, net-centric computing. Major topics include virtual machines, intermediate code generation (Java-specific), graphical user interfaces (GUI) design, event handling, server-side programming with database queries, security, permissions, and file management concepts for client/server systems.",
    date: "Spring 2022",
    location: "Penn State University",
  },
  {
    title: "CMPSC 311: Systems Programming",
    description:
      "This course covers the principles of C systems programming in a Unix environment. Topics include shell scripting, file systems, processes, signals, inter-process communication, network programming, and memory management.",
    date: "Fall 2022",
    location: "Penn State University",
  },
  {
    title: "CMPSC 465: Data Structures and Algorithms",
    description:
      "This course covers the design and analysis of algorithms and data structures. Topics include algorithm analysis, sorting, searching, graph algorithms, and data structures such as heaps, hash tables, and trees.",
    date: "Fall 2023",
    location: "Penn State University",
  },
  {
    title: "CMPSC 497: Deep Learning for Computer Vision",
    description:
      "This course covers the fundamentals of deep learning and its applications in computer vision. Topics include convolutional neural networks, recurrent neural networks, generative adversarial networks, transformers, classification, object detection, segmentation, and image generation.",
    date: "Spring 2024",
    location: "Penn State University",
  },
  {
    title: "CMPSC 448: Machine Learning",
    description:
      "This course covers the fundamentals of machine learning and its applications in data analysis. Topics include linear regression, logistic regression, support vector machines, decision trees, random forests, k-means clustering, principal component analysis, and more.",
    date: "Fall 2024",
    location: "Penn State University",
  },
  {
    title: "CMPEN 331: Computer Organization and Design",
    description:
      "This course covers the fundamentals of computer organization and design. Topics include digital logic, assembly language programming, CPU components, memory hierarchy, pipelining, and extensive Verilog programming.",
    date: "Spring 2024",
    location: "Penn State University",
  },
  {
    title: "MATH 414: Introduction to Probability Theory",
    description:
      "The course presents students with calculus-based probability concepts, and those concepts can be used to describe the uncertainties present in real applications. Topics include probability spaces, discrete and continuous random variables, transformations, expectations, generating functions, conditional distributions, the law of large numbers, and central limit theorems.",
    date: "Spring 2022",
    location: "Penn State University",
  },
];
const projects = [
  {
    name: "3D Printing Club Mobile App",
    description:
      "I developed a mobile application for the Penn State 3D Printing Club to organize their 3D printers, schedule maintenance, and communicate with members. The app uses React Native for the front-end, and the back-end was developed with Django and MySQL. The app is now live on the App Store and the Play Store and is being used by club members",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "django",
        color: "pink-text-gradient",
      },
    ],
    image: app,
    source_code_link:
      "https://github.com/davidsaldubehere/psu3dprintingappfrontend/",
    asset: "phone",
  },
  {
    name: "GeoRouter",
    description:
      "GeoRouter is a python library that provides a highly customizable offline routing engine that allows users to find routes based on scenery and other typical navigation preferences. In addition, GeoRouter provides powerful tools for OSM (OpenStreetMap) and SRTM (Shuttle Radar Topography Mission) data manipulation and visualization. User's can easily get accurate elevation data by simply providing a latitude and longitude bounding box.",
    tags: [
      {
        name: "graph theory",
        color: "blue-text-gradient",
      },
      {
        name: "big data",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: georouter,
    source_code_link: "https://github.com/davidsaldubehere/georouter/",
    asset: "headphones",
  },
  {
    name: "AutoTyper",
    description:
      "This desktop application was designed to assist in coding tutorials, classes, and my LA office hours. Prewritten scripts can be customized and automatically typed into a specified area to provide a seamless mode of instruction. I developed the front-end with HTML5, CSS, and JavaScript, and I used Python to create the back-end. The application was packaged with Pyinstaller, and the release for Windows is available for download on my GitHub.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: autotyper,
    source_code_link: "https://github.com/davidsaldubehere/auto-typer",
    asset: "keyboard",
  },
  {
    name: "VR Cam",
    description:
      "I created a robotic arm with an attached camera module that can be controlled by a user's head movement. To accomplish this, I used a Flask server deployed on a Raspberry Pi in combination with a VR application that would send gyroscope activity to an Arduino that controlled the robotic arm. The Raspberry Pi would then send a real-time image back to the VR application using Open CV4 and the Flask server to complete the cycle.",
    tags: [
      {
        name: "microcontrollers",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: vrcam,
    source_code_link: "https://github.com/davidsaldubehere/vrCam",
    asset: "raspberry",
  },
];

export {
  services,
  technologies,
  experiences,
  competitions,
  projects,
  coursework,
};
