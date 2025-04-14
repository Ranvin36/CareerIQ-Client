"use client"

import { useState } from "react";
import styles from "./login.module.css";
import { IoArrowBackOutline } from "react-icons/io5";
import InputField from "../components/InputField";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page:React.FC = () => {
    const router = useRouter()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

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
                            <h1>Welcome Back! Glad To See You</h1>
                        </div>
                        <div className={styles.tagLine}>
                            <p>Ready to dive in? Log in with your credentials to access your personalized account experience.</p>
                        </div>
                        <div className={styles.inputs}>
                            <div>
                                <InputField setEmail={setEmail} label="Email Address"/>
                            </div>
                            <div>
                                <InputField setEmail={setPassword} label="Password"/>
                            </div>
                            <div className={styles.forgotPassword}>
                                <a href="">Forgot Password?</a>
                            </div>
                        </div>
                        <div className={styles.btnBg}>
                            <div className={styles.loginBtn}>
                                <a href="">Login Now</a>
                            </div>
                        </div>
                        <div style={{textAlign:"center",marginTop:"10%"}}>
                            <p style={{color:"#ccc"}}>Don't Have An Account?<Link href="/register" style={{color:"#f2f2f2"}}> Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page