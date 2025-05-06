"use client"

import { useState } from "react"

import LayoutStarter from "../components/layoutStarter"
import StarterHeader from "../components/starterHeader"
import styles from "./selectPlan.module.css"
import pricingPlan from "../dummyData/pricingPlans.json"
import PlanCard from "../components/planCard"
import InputField from "../components/InputField"

const Page:React.FC = () =>{
    const [email,setEmail] = useState("")
    return(
        <div>
           <LayoutStarter>
        <div className={styles.selectPlanPage}>
            <StarterHeader heading="Select Your Success Package" subtitle="Find the perfect balance of features and value for your career needs. Each plan is crafted to help you achieve your professional milestones" showBackButton={false}/>
            <div className={styles.selectPlan}>
                {pricingPlan.plans && pricingPlan.plans.map((item:any,index:number) =>{
                    return(
                       <PlanCard index={index} item={item}/>
                    )
                })}
            </div>
            <div className={styles.inputs}>
                <div>
                    <InputField setInput={setEmail} label="Name On Card" email={true}/>
                </div>
                <div>
                    <InputField setInput={setEmail} label="Card Number" email={true}/>
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div style={{width:"49%"}}>
                        <InputField setInput={setEmail} label="CVC" email={true}/>
                    </div>
                    <div style={{width:"49%"}}>
                        <InputField setInput={setEmail} label="Expiry Date" email={true}/>
                    </div>
                </div>
            </div>
            <div className={styles.btnBg}>
                            <div className={styles.loginBtn}>
                                <a href="">Purchase Plan</a>
                            </div>
                        </div>
        </div>
           </LayoutStarter>
        </div>
    )
}

export default Page