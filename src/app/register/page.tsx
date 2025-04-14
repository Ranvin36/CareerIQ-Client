"use client"

import styles from "../login/login.module.css"
import { useState } from "react"
import { useRouter } from "next/navigation"
import InputField from "../components/InputField"
import { IoArrowBackOutline } from "react-icons/io5";

const Page = () => {
        const router = useRouter()
        const [email,setEmail] = useState("")
        const [password,setPassword] = useState("")
        const [name,setName] = useState("")

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
                        <h1>Unlock More - Register!</h1>
                    </div>
                    <div className={styles.tagLine}>
                        <p>Join our community and discover everything we have to offer. Registering is simple and takes just a moment.</p>
                    </div>
                    <div className={styles.inputs}>
                        <div>
                            <InputField setEmail={setName} label="Full Name"/>
                        </div>
                        <div>
                            <InputField setEmail={setEmail} label="Email Address"/>
                        </div>
                        <div>
                            <InputField setEmail={setEmail} label="Password"/>
                        </div>
                        <div className={styles.forgotPassword}>
                            <a href="/login">Already Have An Account?</a>
                        </div>
                    </div>
                    <div className={styles.btnBg}>
                        <div className={styles.loginBtn}>
                            <a href="">Sign Up Now</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    )
}

export default Page

