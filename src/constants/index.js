import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  vercelLogo,
  pineconeLogo,
  amazonLogo,
  supabaseLogo
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [vercelLogo, supabaseLogo, pineconeLogo, amazonLogo, ];

export const scraper4cServices = [
  "Use Dataset API",
  "Advanced Panel",
  "Entity Search",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Data Scraping Service",
    text: "Develop a user-friendly panel allowing users to select websites and categories for data scraping, expanding our dataset continuously.",
    date: "Feb 2024",
    status: "done",
    imageUrl: roadmap3,
    colorful: true,
  },
  {
    id: "1",
    title: "Data Set API",
    text: "Implement an API to provide curated datasets to clients, allowing selection based on categories, price ranges, and custom search parameters.",
    date: "Feb 2024",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Entity Search",
    text: "Develop a search functionality to enable users to find products or services based on specific criteria, utilizing image recognition and similarity comparison algorithms.",
    date: "Mar 2024",
    status: "done",
    imageUrl: roadmap4,
  },
  {
    id: "3",
    title: "Voice Recognition",
    text: "Enable voice commands for searching products or services, enhancing user experience and accessibility.",
    date: "Mar 2024",
    status: "progress",
    imageUrl: roadmap1,
  }
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Mining",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Dataset API",
    description: "Provide firms or individuals with selected datasets, categorized by price range, search parameters, etc., akin to those found on Kaggle, for a fee.",
    price: "9.99",
    features: [
      "Consistent and up-to-date datasets",
      "Manual or regular background service for data control and updates",
      "Transparent data checks and last updated timestamps",
    ],
  },
  {
    id: "2",
    title: "Entity Search",
    description: "Offer a versatile search service enabling users to find similar products or services based on their description, image, or text input.",
    price: "19.99",
    features: [
      "Visual and text-based search functionality",
      "Comparison of similarity ratios between generated images and existing dataset",
      "Results from various datasets such as holiday packages, transportation options, and more",
    ],
  },
  {
    id: "3",
    title: "Data Scrape Panel",
    description: "Empower your users to extract data from any website by selecting their desired category, scraping it, and delivering detailed information and images.",
    price: "39.99",
    features: [
      "Effortless data collection process",
      "Rigorous quality control for consistent and reliable data",
      "Comprehensive dataset classification a wide range of categories from fashion to electronics, travel tickets to holiday packages",
    ],
  },
];


export const benefits = [
  {
    id: "0",
    title: "Streamlined Market Research",
    text: "Accelerate your market research efforts by accessing a vast array of datasets, enabling you to identify trends, understand consumer behavior, and uncover valuable insights with ease.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Customizable Search Parameters:",
    text: "Tailor your data extraction process with customizable search parameters, allowing you to refine results based on specific criteria and extract precisely what you need.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Continuous Data Growth:",
    text: "Expand your dataset effortlessly and continuously, ensuring you always have access to the latest and most comprehensive information across various domains.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "AI-Powered Insights:",
    text: "Gain valuable insights from scraped data through AI-driven analysis, empowering you to make informed decisions and stay ahead of the competition",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Effortless Data Mining:",
    text: "Seamlessly extract valuable data from any website or category with just a few clicks, boosting your efficiency and saving valuable time.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Enhanced Product Recommendations",
    text: "Utilize AI-powered algorithms to analyze user preferences and behavior, providing personalized product recommendations that drive engagement and boost sales.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
