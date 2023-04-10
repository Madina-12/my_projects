import styles from "../styles/Home.module.css";
import Project from "../components/Project";
const index = () => {
  const projects = [
    {
      link: "",
      externalLink: "https://sherpur-sectionx.up.railway.app/",
      image: "/HomeImages/SectionX.JPG",
      technologies: ["CSS", "NEXTJS", "SPRING", "PRISMA", "NEXTAUTH", "RTK", "RTK QUERY"],
      name: "SectionX",
      description: "You can login, add sections and posts, and perform CRUD operations here. Users can only view their own content.",
      complexity: "ADVANCED",
    },
    {
      link: "",
      externalLink: "https://umar-sherpur-gpt.vercel.app/",
      image: "/HomeImages/GPT.JPG",
      technologies: ["CSS", "NEXTJS"],
      name: "GPT-3",
      description: "I created an attractive website using Next.js and CSS, with a design inspired by Arshakir's Figma design.",
      complexity: "ADVANCED",
    },
    {
      link: "/animations/Creations",
      externalLink: "",
      image: "/HomeImages/Creations.JPG",
      technologies: ["CSS", "NEXTJS", "SPRING"],
      name: "Creations",
      description: "The animation showcases different creatures and their populations, emphasizing ALLAH as the Creator of all things.",
      complexity: "ADVANCED",
    },
    {
      link: "/animations/DragScenery",
      externalLink: "",
      image: "/HomeImages/ISLAMIC_scenery.JPG",
      technologies: ["CSS", "NEXTJS", "SPRING", "GESTURE"],
      name: "Drag Scenery",
      description: "The animation features a scenery that can be dragged and dropped. Note: not compatible with mobile devices.",
      complexity: "ADVANCED",
    },
    {
      link: "/animations/AL_AQSA",
      externalLink: "",
      image: "/HomeImages/AL_AQSA.JPG",
      technologies: ["CSS", "NEXTJS", "SPRING"],
      name: "AL AQSA",
      description: "The animation is a flip-box effect with AL AQSA and AL QUBA. Click to reveal each ISLAMIC PLACE.",
      complexity: "ADVANCED",
    },
    {
      link: "/animations/AppearingBoxes",
      externalLink: "",
      image: "/HomeImages/AppearingBoxes.JPG",
      technologies: ["CSS", "NEXTJS", "SPRING"],
      name: "Appearing Boxes",
      description: "The animation enlarges a clicked box and reveals multiple gradient boxes. Click again to close and shrink all boxes back to original size.",
      complexity: "INTERMEDIATE",
    },
    {
      link: "/animations/DevelopedBy",
      externalLink: "",
      image: "/HomeImages/DevelopedBy.JPG",
      technologies: ["CSS", "NEXTJS", "SPRING"],
      name: "Developed By",
      description: "Clicking anywhere on the screen rotates 'Developed By', bounces 'MUHAMMAD UMAR', and changes the background.",
      complexity: "INTERMEDIATE",
    },
    {
      link: "/styling/rating",
      externalLink: "",
      image: "/HomeImages/rating.JPG",
      technologies: ["CSS", "NEXTJS"],
      name: "Rating Component",
      description: "I practiced CSS by creating a Rating component using Next.js and CSS, inspired by a Frontend Mentor design.",
      complexity: "EASY",
    },
    {
      link: "/styling/nft",
      externalLink: "",
      image: "/HomeImages/nft.JPG",
      technologies: ["CSS", "NEXTJS"],
      name: "NFT Component",
      description: "This easy project uses Next.js and CSS I coded an Equilibrium component based on a Frontend Mentor design, for practicing CSS.",
      complexity: "EASY",
    },
    {
      link: "/styling/qr",
      externalLink: "",
      image: "/HomeImages/qr.JPG",
      technologies: ["CSS", "NEXTJS"],
      name: "QR Component",
      description: "For practicing CSS, I created an Equilibrium component using Next.js and CSS, based on a design from Frontend Mentor.",
      complexity: "EASY",
    },
    {
      link: "/styling/order",
      externalLink: "",
      image: "/HomeImages/order.JPG",
      technologies: ["CSS", "NEXTJS"],
      name: "Order Component",
      description: "With Next.js and CSS, I built an NFT component for practicing CSS, following a design from Frontend Mentor.",
      complexity: "EASY",
    },
  ];
  
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
      {projects.map((project) => (
          <Project
          link={project.link}
          image={project.image}
          technologies={project.technologies}
          name={project.name}
          description={project.description}
          complexity={project.complexity}
          externalLink={project.externalLink}
        />
      ))}
      </div>

      {/* 
          <Link href="/ISM_E_ZAAT_MUBARAK">ISM E ZAAT MUBARAK</Link>
         */}
      {/* <div>
        <Link href="/a_animating_auto">a_Animated Auto</Link>
      </div>

      <div className={styles.screens_display_none}>
        <Link href="/b_card">b_Card</Link>
      </div>

      <div>
        <Link href="/c_chaining_transition_and_a_spring">
          c_chaining transition and a spring
        </Link>
      </div>

      <div>
        <Link href="/d_css_keyframes">d_css keyframes</Link>
      </div>

      <div>
        <Link href="/e_exit_before_enter">e_exit before enter</Link>
      </div>

      <div>
        <Link href="/f_flip_card">f_flip card</Link>
      </div> */}
    </div>
  );
};

export default index;
