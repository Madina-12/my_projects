import Image from "next/image";
import styles from "./Project.module.css";
import Link from "next/link";
const Project = ({
  name,
  description,
  image,
  complexity,
  technologies,
  link,
  externalLink
}) => {
  const color = ["rgb(248, 180, 228)", "aqua", "gold", "rgb(209, 204, 250)"];
  

  let compColor;
  switch (complexity) {
    case "EASY":
      compColor = "yellow";
      break;
    case "INTERMEDIATE":
      compColor = "aqua";
      break;
    case "ADVANCED":
      compColor = "lightgreen";
      break;
    default:
      break;
  }
  const href = externalLink ? externalLink : link;
  const handleClick = (event) => {
    if (externalLink) {
      event.preventDefault();
      window.open(externalLink, '_blank');
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Link href={link} >
        
        <Image
          src={image}
          alt="Picture of the project"
          fill
          sizes="(max-width: 32em) 100vw,
      50vw,"
          style={{ objectFit: "cover" }}
          className={styles.image}
          onClick={handleClick}
        />
        
        </Link>
      </div>
      <div className={styles.details}>
        <Link href={link} className={styles.name} onClick={handleClick} >
          {name}
        </Link>

        <div className={styles.complexity} style={{ color: compColor }}>
          {complexity}
        </div>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <div className={styles.technology} style={{ color: color[index % color.length] }}>{tech}</div>
          ))}
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default Project;
