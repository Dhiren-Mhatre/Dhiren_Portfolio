/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Dhiren's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Dhiren Mhatre Portfolio",
    type: "website",
    url: " ",
  },
};

//Home Page
const greeting = {
  title: "Dhiren Mhatre",
  logo_name: "DhirenMhatre",

  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1IyuPjUd1DteCtmILVFsbZNIFBYGkCPYm/view?usp=sharing",
  portfolio_repository: "https://github.com/Dhiren-Mhatre/Dhiren_Portfolio",
  githubProfile: "https://github.com/Dhiren-Mhatre/",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Dhiren-Mhatre",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dhiren-mhatre/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:kp064669@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/dhiren_741/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive front-ends with React and Redux for smooth user experiences.",

        "⚡ Creating back-end systems with Node.js, Express, and Flask, ensuring efficient performance.",
        "⚡ Developing high-performance applications in Go, ideal for distributed systems.",
        "⚡ Collaborating with Git and GitHub for version control and deployment.",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJs",
          fontAwesomeClassname: "skill-icons:nextjs-light",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "GO",
          fontAwesomeClassname: "skill-icons:golang",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDb",
          fontAwesomeClassname: "skill-icons:mongodb",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Socket.io",
          fontAwesomeClassname: "devicon:socketio",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "skill-icons:aws-dark",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "devicon:git",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "mdi:github",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title:
        "Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIET)",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "sggs.png",
      alt_name: "SGGSIET",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.sggs.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Databases and SQL for Data science with python",
      subtitle:
        "Provides comprehensive training in database fundamentals, SQL querying, and integration with Python for practical datascience application",
      logo_path: "ibm_logo.png",
      certificate_link: "https://www.linkedin.com/in/dhiren-mhatre/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",

  description:
    "I have worked   as a Web Developer and Software Architect, leveraging my expertise in the MERN stack and Next.js to create dynamic and responsive applications. I enjoy working on large-scale projects and improving website performance, which is evident in my roles at T&P Cell and Pragyaa, where I significantly boosted user engagement and satisfaction.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Web Developer",
          company: "T&P Cell, Nanded,",
          company_url:
            "https://www.linkedin.com/company/placementcell-sggsiet?originalSubdomain=in#:~:text=Training%20&%20Placement%20Cell%20SGGSIE&T%20Nanded",
          logo_path: "tnp.png",
          duration: "Jan 2024 - Present",

          description:
            "As a Web Developer at the T&P Cell, I optimized the website design, fixed technical issues, and improved user engagement. I worked on making the site more user-friendly and responsive, while also troubleshooting performance issues.",
          color: "#000000",
        },
        {
          title: "Senior Executive Web Developer",
          company: "Pragyaa",
          company_url: "https://pragyaa.tech/",
          logo_path: "pragyaa.png",
          duration: "June 2024 -present",

          description:
            "At Pragyaa, I developed and maintained the festival website, designed interactive interfaces to enhance user interaction, and ensured a seamless participant experience. I also implemented SEO strategies to improve the website's visibility and traffic.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Dhiren.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dombivli ,Thane,Maharastra,India,421204",
    locality: "Dombivli",
    country: "India",
    region: "Maharastra",
    postalCode: "95129",
    streetAddress: " ",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Dombivli,+Maharashtra/@19.2094775,73.0171809,12z/data=!3m1!4b1!4m6!3m5!1s0x3be7958ef72d8707:0x84bf6ab96e280b08!8m2!3d19.2094006!4d73.0939483!16zL20vMDN2eXp2?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D",
  },
  phoneSection: {
    title: " ",
    subtitle: "kp064669@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
