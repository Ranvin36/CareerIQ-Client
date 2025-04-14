import { IoIosCheckmark } from "react-icons/io"
import styles from "../page.module.css"
import React from "react";

type PricingCardProps = {
  item: {
    name: string;
    price: string;
    description: string;
    features: string[];
  };
};


const PricingCard:React.FC<PricingCardProps>= ({item}) => {
  return (
    <div className={styles.pricingCard}>
    <h1>{item.name}</h1>
    <div className={styles.priceText}>
      <h3>{item.price}</h3>
      <p>{item.description}</p>
    </div>
    <div className={styles.purchaseBtn}>
        <a href="">Purchase Plan</a>
    </div>
    <div className={styles.target}>
      <h3>Plan Features:</h3>
      {item.features && item.features.map((item,index) =>{
        return(
            <div className={styles.targetItem} key={index}>
                <IoIosCheckmark size={30}/>
                <p>{item}</p>
            </div>
        )
      })}
    </div>
  </div>
  )
}

export default PricingCard;