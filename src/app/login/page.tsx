"use client"

import { useState } from "react";
import styles from "./login.module.css";
import { IoArrowBackOutline } from "react-icons/io5";
import InputField from "../components/InputField";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const Page:React.FC = () => {
    const router = useRouter()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = async() => {
        if(email.length > 0 && password.length > 0){
            try{
                const data = {email,password}
                const response = await axios.post("http://localhost:5100/api/user/login",data)
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
                            <h1>Welcome Back! Glad To See You</h1>
                        </div>
                        <div className={styles.tagLine}>
                            <p>Ready to dive in? Log in with your credentials to access your personalized account experience.</p>
                        </div>
                        <div className={styles.inputs}>
                            <div>
                                <InputField setInput={setEmail} label="Email Address" email={true}/>
                            </div>
                            <div>
                                <InputField setInput={setPassword} label="Password" password={true}/>
                            </div>
                            <div className={styles.forgotPassword}>
                                <Link href="/forget-password">Forgot Password?</Link>
                            </div>
                        </div>
                        <div className={styles.btnBg}>
                            <div className={styles.loginBtn} onClick={handleLogin}>
                                <a href="#">Login Now</a>
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