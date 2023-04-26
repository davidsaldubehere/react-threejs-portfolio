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
    link: "https://github.com/davidsaldubehere"
  },
  {
    title: "3D Printing Club",
    icon: psu3d,
    link: "https://sites.psu.edu/3dprintingclub/"
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
      "Helped customers complete purchases by moving heavy items, collecting payments, and bagging items.",
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
    company_name: "Sheetz",
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
      "Will be visiting labs to learn more about the equipment and the software used to manage it.",
    ],
  },
];

const competitions = [
  {
    title: "PA TSA Regional Coding Competition",
    description: "I won 1st place in the PA TSA Regional Coding Competition for my antenna controller interface application.",
    date: "February 2020",
    location: "Richland High School",
  },
  {
    title: "PA TSA Regional Animatronics Competition",
    description: "I won 1st place in the PA TSA Regional Animatronics Competition for my fantasy animatronic display.",
    date: "February 2022",
    location: "Richland High School",
  },
  {
    title: "PA TSA Regional Coding Competition",
    description: "I won 1st place in the PA TSA Regional Coding Competition for my Pig Latin translator application.",
    date: "February 2022",
    location: "Richland High School",
  },
  {
    title: "PA TSA State Animatronics Competition",
    description: "I won 1st place in the PA TSA State Animatronics Competition for my improved fantasy animatronic display.",
    date: "May 2022",
    location: "7 Springs Resort",
  },
  {
    title: "PA TSA State Coding Competition",
    description: "I won 5th place in the PA TSA State Coding Competition which included a timed algorithmic problem-solving test.",
    date: "May 2022",
    location: "7 Springs Resort",
  }, 
  {
    title: "Margaret C Miller Scholarship Recipient",
    description: "I was awarded the Margaret C Miller Scholarship for my high school achievements and my future plans to pursue a career in computer science.",
    date: "June 2022",
    location: "Mifflin County High School",
  }, 
];
const coursework = [
  {
    title: "CMPSC 131: Programming and Computation I",
    description: "This course introduces the fundamental concepts and processes of solving computational problems through the design, implementation, testing, and evaluation of efficient and robust computer programs. The concepts include basic computational constructs found in imperative, object-oriented, and functional programming languages such as iteration, conditionals, functions, recursion, and data types. ",
    date: "Fall 2021",
    location: "Penn State University",
  },
  {
    title: "CMPSC 132: Programming and Computation II",
    description: "This course builds upon the foundations of programming and computation by introducing and studying the data structures and programming language features that support the design and construction of large-scale software systems. It introduces the foundations of object-oriented programming, the design and analysis of efficient algorithms using important data structures, and programming techniques that support reusable and modular program components, including data abstraction, polymorphism, and higher-order functions.",
    date: "Fall 2021",
    location: "Penn State University",
  },
  {
    title: "CMPSC 221: Object Oriented Programming",
    description: "The course covers advanced object-oriented principles and their application to web-based, net-centric computing. Major topics include virtual machines, intermediate code generation (Java-specific), graphical user interfaces (GUI) design, event handling, server-side programming with database queries, security, permissions, and file management concepts for client/server systems.",
    date: "Spring 2022",
    location: "Penn State University",
  },
  {
    title: "CMPSC 360: Discrete Mathematics",
    description: "This course covers discrete mathematics and the foundations for modern computer science. Major topics include sets, relations, logic, algorithms, graphs, finite state machines, and regular expressions.",
    date: "Spring 2022",
    location: "Penn State University",
  },
  {
    title: "PHYS 211: General Physics: Mechanics",
    description: "This course covers a calculus-based introduction to classical mechanics, including such topics as measurement, dimensional analysis, motion in one dimension, vectors, motion in 2 and 3 dimensions, relative and circular motion, force and dynamics, Newton's Laws, friction, kinetic energy, work, potential energy, energy conservation, systems of particles, center of mass and momentum calculations, elastic and inelastic collisions, rotation (moments of inertia), rolling motion, torque, angular momentum, static equilibrium, gravitational force and Kepler's laws, gravitational potential energy, oscillations, and waves (transverse and longitudinal, superposition of waves).",
    date: "Spring 2022",
    location: "Penn State University",
  },
  {
    title: "PHYS 212: Electricity and Magnetism",
    description: "This course covers a calculus-based introduction to classical electricity and magnetism, including such topics as, electric charge and electric fields, Gauss's law, electric potential, capacitance, current, resistance, circuits, magnetic fields, fields due to currents, induction and inductance, magnetism of matter, Maxwell's equations, and electromagnetic oscillations.",
    date: "Spring 2022",
    location: "Penn State University",
  },
  {
    title: "MATH 230: Calculus and Vector Analysis",
    description: "This course covers three-dimensional analytic geometry, vectors in space, partial differentiation, double and triple integrals, and integral vector calculus.",
    date: "Spring 2022",
    location: "Penn State University",
  },
  {
    title: "MATH 220: Matrices",
    description: "This course covers systems of linear equations, matrix algebra, eigenvalues and eigenvectors, and linear systems of differential equations.",
    date: "Spring 2022",
    location: "Penn State University",
  },
  {
    title: "MATH 414: Introduction to Probability Theory",
    description: "This course is an introduction to the theory of probability for students in statistics, mathematics, engineering, computer science, and related fields. The course presents students with calculus-based probability concepts, and those concepts can be used to describe the uncertainties present in real applications. Topics include probability spaces, discrete and continuous random variables, transformations, expectations, generating functions, conditional distributions, the law of large numbers, and central limit theorems.",
    date: "Spring 2022",
    location: "Penn State University",
  }
];
const projects = [
  {
    name: "Topian",
    description:
      "I developed this free music streaming app with React Native, Flask, and various Python APIs. The React Native front-end is optimized for iOS and Android, and the back-end was deployed on Pythonanywhere's servers with Flask. The app is still being developed and is not yet available on the App Store.",
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
    asset: "keyboard"
  },
  {
    name: "VR Cam",
    description:
      "I created a robotic arm with an attached camera module that can be controlled by a user's head movement. To accomplish this, I used a Flask server deployed on a Raspberry Pi server in combination with a VR application that would send gyroscope activity to an Arduino that controlled the robotic arm. The Raspberry Pi would then send a real-time image back to the VR application using Open CV4 and the Flask server to complete the cycle.",
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
      "This is my most recent project. I have been developing a mobile application for the Penn State 3D Printing Club to manage their 3D printing services and communicate with members. The app is being developed with React Native, and the back-end is being developed with Django and MySQL. I plan to introduce the app to the club in the Fall of 2023.",
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
