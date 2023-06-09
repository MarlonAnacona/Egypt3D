import styles from "./About.module.css";

export function About() {
  /* Lista de autores */
  const authors = [
    { name: "MARLON ANDRES ANACONA", image: "/images/marlonFondo.jpg", characterImage: "/images/marlon.jpg" },
    { name: "ALEXANDER VALENCIA", image: "/images/pepa.png", characterImage: "/images/pepa2.png" },
    { name: "GABRIEL FRANCO", image: "/images/gabriel.png", characterImage: "/images/gabo2.png" },
    { name: "STEBAN DIAZ", image: "/images/Steban.jpeg", characterImage: "/images/Steban2.jpeg" },
    { name: "JUAN BAILON", image: "/images/Bailon.jpeg", characterImage: "/images/Bailon2.jpeg" },
  ];

  return (
    <div className={styles.inicio}>
      {/* Mapear la lista de autores */}
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
            {author.name}
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
