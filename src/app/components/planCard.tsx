import styles from "../select-plan/selectPlan.module.css"

type PlanCardProps = {
    index:number,
    item:any
}


const PlanCard:React.FC<PlanCardProps> = ({index,item}) =>{
    return(
        <label htmlFor={`${index}`} className={styles.planBg}>
                            <div className={styles.plan}>
                                <div className={styles.planPrice}>
                                    <input type="radio" name="plan" id={`${index}`}/>
                                    <h2>{item.price}/month</h2>
                                </div>
                                <div className={styles.planDescription}>
                                    <p>{item.description}</p>
                                </div>
        
                            </div>
                        </label>
    )
}   

export default PlanCard
