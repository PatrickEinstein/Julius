export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Julius was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Julius' expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Julius. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Julius was a pleasure to work with. He understood our requirements perfectly and delivered a webapps that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

const previousprojectsData = [
  {
    id: 0,
    title: "Oryo HeartBeat Sensors Platform",
    description:
      "Tracking Fleet of assets such as Cars, Trailers, Trucks, Amoured Tank, Fuel Logs, Fuel Level Senors in real time",
    subdesc:
      "Built on TypeScript, .NET, C#, Entity framework, Postgres, Redis, Node js, React js, Websocket, Linux VM, VPS, Docker",
    image: "assets/oryo-c.png",
    texture: "/textures/project/oryo-c.mp4",
    tag: ["All", "Web"],
    // gitUrl: "https://github.com/PatrickEinstein/Octave_Payment_Gateway",
    previewUrl: "http://74.50.68.46",
  },
  {
    id: 0,
    title: "Octave Payment Gateway",
    description: "Payment Gateway using Card, USSD and Bank Transfer",
    subdesc:
      "Built as an enterprise solution using .NET, C#, Entity Frame work, and PosreSQL",
    image: "assets/ocpg.png",
    texture: "/textures/project/ocpg.mp4",
    tag: ["All", "Web"],
    // gitUrl: "https://github.com/PatrickEinstein/Octave_Payment_Gateway",
    previewUrl: "http://16.171.137.18:5331/swagger/index.html",
  },
  {
    id: 0,
    title: "Bills Payment Gateway",
    description: "Interractive Test maps",
    subdesc: "Built on Node js",
    image: "assets/ocpg.png",
    texture: "/textures/project/ocpg.mp4",
    tag: ["All", "Web"],
    // gitUrl: "https://github.com/PatrickEinstein/Bills_Server",
    previewUrl: "http://16.171.137.18:4500/api/docs/",
  },
  {
    id: 3,
    title: "PelPay Payment Gateway",
    description:
      "Payment Gateway using Card, USSD and Bank Transfer, Direct Debit and Mandate",
    subdesc:
      "Built as an enterprise solution using .NET, C#, Entity Frame work, and PosreSQL",
    image: "assets/pelpay.png",
    texture: "/textures/project/pelpay.mp4",
    tag: ["All", "Web"],
    // gitUrl: "https://api.pelpay.ng/index.html",
    previewUrl: "https://api.pelpay.ng/index.html",
  },
  {
    id: 0,
    title: "Maps",
    description: "Interractive Test maps",
    subdesc: "Built on HTML, CSS and JavaScript using ol library",
    image: "assets/maps.png",
    texture: "/textures/project/map.mp4",
    tag: ["All", "Web"],
    // gitUrl: "https://github.com/PatrickEinstein/Map",
    previewUrl: "https://map-gilt.vercel.app/",
  },

  {
    id: 3,
    title: "Melody AI Data Analytics DashBoard",
    description: "Analytics Dashboard built for Melody AI/ML",
    subdesc:
      "Built as an affordable data analytical tool for Small and Medium Scale Enterprises. Built on ReCT Js, Nivo Charts, D3 and Python",
    subdesc: "Built on Reactjs, D3 and NIVO charts library",
    image: "assets/melodyai.png",
    texture: "/textures/project/melodyai.mp4",
    tag: ["All", "Web"],
    // gitUrl: "https://github.com/PatrickEinstein/MelodyAi_DataAnalytics",
    previewUrl: "https://melody-ai-data-analytics.vercel.app/",
  },
  {
    id: 5,
    title: "My 3D potfolio",
    description: "3D potfolio with 3D js",
    subdesc: "Built on Three.js, React and React Fibre",
    image: "https://i.ibb.co/6n1k0GS/3dfolio.png",
    texture: "/textures/project/3dpot.mp4",
    tag: ["All", "Web"],
    // gitUrl: "https://github.com/PatrickEinstein/Folio-client/tree/patrick",
    previewUrl: "https://folio-client-blue.vercel.app/",
  },
  {
    id: 6,
    title: "Data Analytics Dashboard",
    description: "Data Analytics Dashboard with live data capture",
    subdesc:
      "A fullsatck dashboard Built on Node js, Nivo Charts, D3 and React",
    image: "assets/patstack.png",
    texture: "/textures/project/patstack.mp4",
    tag: ["All", "Web"],
    // gitUrl: "/",
    previewUrl: "https://patstack.vercel.app/dashboard",
  },
  {
    id: 6,
    title: "Cloned UPS Website",
    description: "Cloned UPS Website to steal credit card information",
    subdesc:
      "Cloned UPS website that steals your credit card info and streams it in real time to an admin dashboard at https://credit-card-logger-admin.vercel.app/.Built on React and Socket.io for real time communication",
    image: "assets/upsc.png",
    texture: "/textures/project/upsc.mp4",
    tag: ["All", "Web"],
    // gitUrl: "https://github.com/PatrickEinstein/Credit-Card-Logger-Client",
    previewUrl: "https://credit-card-logger-client.vercel.app/",
  },
  {
    id: 6,
    title: "Credit Card Logger Admin Dashboard",
    description: "UPS Credit Card stealer Admin Dashboard",
    subdesc:
      "The Credit card details entered at  https://credit-card-logger-client.vercel.app/ is logged on this dashboard, it tracks your browser activity, IP and loading status in realtime. Also built on React and Socket.Io",
    image: "assets/upsa.png",
    texture: "/textures/project/upsa.mp4",
    tag: ["All", "Web"],
    // gitUrl: "https://github.com/PatrickEinstein/Credit-Card-Logger-Admin",
    previewUrl: "https://credit-card-logger-admin.vercel.app/",
  },
  {
    id: 7,
    title: "Retro Investements",
    description: "A USDT investment webapp",
    subdesc:
      "Built as an enterprise solution using Node js, MongoDB and React js",
    image: "assets/retroW.png",
    texture: "/textures/project/retroW.mp4",
    tag: ["All", "Web"],
    // gitUrl: "https://github.com/PatrickEinstein/Retro-Clients",
    previewUrl: "https://retro-clients.vercel.app/",
  },
  {
    id: 8,
    title: "Vote Verse Voiting Platform",
    description: "Vote Verse Voiting Platform",
    subdesc: "Built on Node js, Next Js and Mongo DB",
    image: "assets/vV.png",
    texture: "/textures/project/vV.mp4",
    tag: ["All", "Web"],
    // gitUrl: "/",
    previewUrl: "https://vote-verse.vercel.app/login",
  },

  {
    id: 30,
    title: "List of other projects",
    description: "Test API platform for bills api",
    subdesc: "Built on ranges of stacks",
    image: "assets/allpots.png",
    texture: "/textures/project/allpots.mp4",
    tag: ["All", "Web"],
    // gitUrl: "",
    previewUrl: "https://folio11.vercel.app/",
  },
];

const transformedProjects = previousprojectsData.map((project) => ({
  title: project.title,
  desc: project.description,
  subdesc: project.subdesc,
  href: project.previewUrl,
  gitRef: project.gitUrl,
  logo: project.image,
  texture: project.texture,
  spotlight: "/assets/spotlight1.png",
  logoStyle: {
    backgroundColor: "#2A1816",
    border: "0.2px solid #36201D",
    boxShadow: "0px 0px 60px 0px #AA3C304D",
  },
  tags: [
    { id: 1, name: "React.js", path: "/assets/react.svg" },
    { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
    { id: 3, name: "TypeScript", path: "/assets/typescript.png" },
    { id: 4, name: "Framer Motion", path: "/assets/framer.png" },
    { id: 4, name: ".NET", path: "/assets/.net.svg" },
    { id: 4, name: ".PGSQL", path: "/assets/pgsql.svg" },
  ],
}));
export const myProjects = [
  ...transformedProjects,

  {
    title: "Podcastr - AI Podcast Platform",
    desc: "Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.",
    href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
    gitRef: "",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "LiveDoc - Real-Time Google Docs Clone",
    desc: "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
    subdesc:
      "With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    gitRef: "",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "CarePulse - Health Management System",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    gitRef: "",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Horizon - Online Banking Platform",
    desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
    subdesc:
      "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
    href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
    gitRef: "",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Imaginify - AI Photo Manipulation App",
    desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
    subdesc:
      "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
    href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
    gitRef: "",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 2, 0]
      : isTablet
      ? [5, 4, 0]
      : [10, 2, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 5, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 2, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-18, -8, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "ChamsSwitch Limited",
    pos: "Software Developer Manager",
    duration: "2023 - Present",
    title:
      "",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "ORYO Limited",
    pos: "Fullstack Software Architect and Developer",
    duration: "2020 - 2022",
    title:
      "",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "GreenBarter",
    pos: "Lead BAckend and Co-founder",
    duration: "2045 - Present",
    title:
      "",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
