import styles from './about.module.css';

export function About(){
    return (
        <div className={styles.inicio}>
            <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
                <div className={styles.card}>
                    <div className={styles.wrapper}>
                        <img src="https://i.blogs.es/847a54/slides/1366_2000.jpg" 
                             className={styles.coverImage} 
                        />
                    </div>
                    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" 
                         className={styles.title} 
                    />
                    <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" 
                         className={styles.character} 
                    />
                </div>
            </a>

            <a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill" target="_blank">
                <div className={styles.card}>
                    <div className={styles.wrapper}>
                        <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" 
                             className={styles.coverImage} 
                        />
                    </div>
                    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" 
                         className={styles.title} 
                    />
                    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" 
                         className={styles.character} 
                    />
                </div>
            </a>
            
            <a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill" target="_blank">
                <div className={styles.card}>
                    <div className={styles.wrapper}>
                        <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" 
                             className={styles.coverImage} 
                        />
                    </div>
                    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" 
                         className={styles.title} 
                    />
                    <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" 
                         className={styles.character} 
                    />
                </div>
            </a>
        </div>  
    )
}
