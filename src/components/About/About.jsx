import styles from "./about.module.css";

export function About() {
  //...

  const authors = [
    { name: "MARLON ANDRES ANACONA", image: "/images/marlonFondo.jpg", characterImage: "/images/marlon.jpg" },
    { name: "ALEXANDER VALENCIA", image: "/images/pepa.png", characterImage: "/images/pepa2.png" },
    { name: "GABRIEL FRANCO", image: "/images/gabriel.png", characterImage: "/images/gabo2.png" },
    { name: "STEBAN DIAZ", image: "/images/gabriel.png", characterImage: "/images/gabo2.png" },
    { name: "JUAN BAILON", image: "/images/gabriel.png", characterImage: "/images/gabo2.png" },
  ];

  return (
    <div className={styles.inicio}>
      {authors.map((author, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.wrapper}>
            <img
              src={author.image}
              alt="No Disponible"
              className={styles.coverImage}
            />
          </div>
          <div className={styles.title + " " + styles.authorTitle}>
            {author.name}{" "}
          </div>

          <img
            src={author.characterImage}
            alt="No Disponible"
            className={styles.character}
          />
        </div>
      ))}
    </div>
  );
}
