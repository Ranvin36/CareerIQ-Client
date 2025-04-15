"use client"

import styles from "../login/login.module.css"
import { useState } from "react"
import { useRouter } from "next/navigation"
import InputField from "../components/InputField"
import { IoArrowBackOutline } from "react-icons/io5";
import axios from "axios"

const Page = () => {
        const router = useRouter()
        const [email,setEmail] = useState("")

        const handleResetPassword = async() => {
            if(email.length > 0){
                try{
                    const data = {email}
                    const response = await axios.post("http://localhost:5100/api/user/forget-password",data)
                    console.log(response.data)                
                }
                catch(error){
                    console.log(error)
                }
            }
        }

    return(
        <div className={styles.login}>
        <div className={styles.loginLayout}>
            <div className={styles.leftFlex}>
                <div style={{maxWidth:800}}>
                    <h1>A few clicks away from achieving your dream job.</h1>
                    <h2>CareerIQ.</h2>
                </div>
            </div>
            <div className={styles.rightFlex}>
                <div className={styles.inputContent}>
                    <div className={styles.loginHeader}>
                        <div className={styles.arrowBg} onClick={()  => router.back()}>
                            <div className={styles.backArrow}>  
                                <IoArrowBackOutline size={20}/>
                            </div>
                        </div>
                        <h1>Forgot Your Password?</h1>
                    </div>
                    <div className={styles.tagLine}>
                        <p>Enter your email address below and we'll send you a link to reset your password.</p>
                    </div>
                    <div className={styles.inputs}>
                        <div>
                            <InputField setInput={setEmail} label="Email Address" email={true}/>
                        </div>
                    </div>
                    <div className={styles.btnBg}>
                        <div className={styles.loginBtn} onClick={handleResetPassword}> 
                            <a href="#">Send Email</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    )
}

export default Page

