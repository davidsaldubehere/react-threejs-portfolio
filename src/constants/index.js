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
  topian,
  vrcam,
  autotyper,
  app
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
    id:'works',
    title: "Projects",
  },
  {
    id:"competitions",
    title: "Awards",
  },
  {
    id: "courses",
    title: "Courses",
  },
  {
    id: "resume",
    title: "Resume",
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
    link: "https://github.com/davidsaldubehere"
  },
  {
    title: "3D Printing Club",
    icon: psu3d,
    link: "https://sites.psu.edu/3dprintingclub/"
  },
  {
    title: "Something else",
    icon: creator,
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
    title: "Produce Associate",
    company_name: "Walmart",
    icon: walmart,
    iconBg: "#FFFFFF",
    date: "June 2021 - April 2023",
    points: [
      "Maintained current knowledge of shelf planograms and end caps to merchandise products.",
      "Received and unloaded new items upon delivery and checked products for damage and order accuracy.",
      "Helped customers complete purchases by moving heavy items, collecting payments and bagging items.",
      "Managed a safe, neat, and clean working environment and closely monitored for wet floors or other hazards.",
    ],
  },
  {
    title: "PSU CMPSC 132 Course Grader",
    company_name: "The Pennsylvania State University Computer Science Department",
    icon: psu,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - May 2023",
    points: [
      "Graded exams and homework submissions for Penn State's University Park CMPSC 132 course sections.",
      "Provided feedback to students on their exam and homework submissions.",
      "Debugged student submissions to help them understand the concepts of the course.",
      "In the process of becoming a Learning Assistant for the course's summer session."
      
    ],
  },
  {
    title: "Sheetz Programming Intern",
    company_name: "Shopify",
    icon: sheetz,
    iconBg: "#FFFFFF",
    date: "May 2023 - August 2023",
    points: [
      "Upcoming programming intern at Sheetz.",
      "Will be working on a project to help improve the customer experience at Sheetz.",
      "Project will be using Java and SQL database technologies.",
      "Will be working with a team of other interns to complete the project.",
      "Will be attending networking events to learn more about the company and the industry.", 
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Penn State Office of Research Information Systems",
    icon: psu,
    iconBg: "#FFFFFF",
    date: "May 2023 - August 2023",
    points: [
      "Upcoming software engineering intern at Penn State's Office of Research Information Systems.",
      "Will be working on a project to help improve the management of laboratory equipment at Penn State.",
      "Project will be using C# and Microsoft Server database technologies.",
      "Will be working with a team of other interns to complete the project.",
      "Will be visiting labs to learn more about the equipment and the processes used to manage it.",
    ],
  },
];

const competitions = [
  {
    title: "PA TSA Regional Coding Competition",
    description: "Won F1st place in the PA TSA Regional Coding Competition.",
    date: "February 2020",
    location: "Richland High School",
  },
  {
    title: "PA TSA Regional Animatronics Competition",
    description: "WonS 1st place in the PA TSA Regional Animatronics Competition.",
    date: "February 2022",
    location: "Richland High School",
  },
  {
    title: "PA TSA Regional Coding Competition",
    description: "WonA 1st place in the PA TSA Regional Coding Competition.",
    date: "February 2022",
    location: "Richland High School",
  },
  {
    title: "PA TSA State Animatronics Competition",
    description: "Won s1st place in the PA TSA State Animatronics Competition.",
    date: "May 2022",
    location: "7 Springs Resort",
  },
  {
    title: "PA TSA State Coding Competition",
    description: "Won 5th place in the PA TSA State Coding Competition.",
    date: "May 2022",
    location: "7 Springs Resort",
  }, 
  {
    title: "Margaret C Miller Scholarship Recipient",
    description: "aklsdjfkl asdflkajsdlf asdlkfj asd lflkdsfj lsdjflsd flksdj f lsdjfl",
    date: "June 2022",
    location: "Mifflin County High School",
  }, 
];
const coursework = [
  {
    title: "CMPSC 131: Programming and Computation I",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Fall 2021",
    location: "Penn State University",
  },
  {
    title: "CMPSC 132: Programming and Computation II",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Fall 2021",
    location: "Penn State University",
  },
  {
    title: "CMPSC 221: Object Oriented Programming",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Spring 2022",
    location: "Penn State University",
  },
  {
    title: "CMPSC 360: Discrete Mathematics",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Spring 2022",
    location: "Penn State University",
  },
  {
    title: "PHYS 211: General Physics: Mechanics",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Spring 2022",
    location: "Penn State University",
  },
  {
    title: "PHYS 212: Electricity and Magnetism",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Spring 2022",
    location: "Penn State University",
  },
  {
    title: "MATH 230: Calculus and Vector Analysis",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Spring 2022",
    location: "Penn State University",
  },
  {
    title: "MATH 220: Linear Algebra and Matrices",
    description: "lorem ipsum dolor sit amet,   , incididunt ut=qua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Spring 2022",
    location: "Penn State University",
  },
  {
    title: "MATH 414: Introduction to Probability Theory",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Spring 2022",
    location: "Penn State University",
  }
];
const projects = [
  {
    name: "Topian",
    description:
      "Cross-platform free music streaming app developed with React Native, Flask, Various Python API’s. Currently at pre-release stage of development. React Native frontend optimized for iOS and Android. Backend deployed on pythonanywhere with Flask",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: topian,
    source_code_link: "https://github.com/davidsaldubehere/topianServer",
    asset: "headphones"
  },
  {
    name: "AutoTyper",
    description:
      "Desktop application designed to assist in coding tutorials, classes, and my LA office hours. Prewritten scripts can be customized and automatically typed into a specified area to aid in instruction. Developed in Python, HTML5, CSS, JavaScript, and packaged with pyinstaller.",
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
    asset: "keyboard"
  },
  {
    name: "VR Cam",
    description:
      "Robotic arm with camera module controlled by user's head movement. Uses a Flask server and Open CV4 deployed on a Raspberry Pi to provide a real-time image to a VR headset. Gyroscope activity is sent to the robotic arm controlled by an Arduino with C++ and used to move the camera module.",
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
    asset: "raspberry"
  },
  {
    name: "3D Printing Club Mobile App",
    description:
      "Robotic arm with camera module controlled by user's head movement. Uses a Flask server and Open CV4 deployed on a Raspberry Pi to provide a real-time image to a VR headset. Gyroscope activity is sent to the robotic arm controlled by an Arduino with C++ and used to move the camera module.",
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
    source_code_link: "https://github.com/davidsaldubehere/psu3dprintingappserver",
    asset: "phone"
  },
];

export { services, technologies, experiences, competitions, projects,coursework };
