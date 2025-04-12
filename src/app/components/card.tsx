import styles from "../page.module.css"

type CardProps = {
    item: {
        id: number;
        heading: string;
        description: string;
        icon: React.ElementType;
    };
};
const card:React.FC<CardProps>= ({item}) =>{
    return(
        <div className={styles.card}>
        <div className={styles.cardIcon}>
          <item.icon size={50} color="#fff"/>
        </div>
        <div className={styles.cardTitle}>
          <h2>{item.heading}</h2>
        </div>
        <div>
          <p>{item.description}</p>
        </div>
      </div>
    )
}

export default card;