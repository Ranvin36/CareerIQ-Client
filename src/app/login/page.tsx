"use client"

import { useState } from "react";
import { Slide, ToastContainer, toast } from 'react-toastify';
import { IoArrowBackOutline } from "react-icons/io5";
import styles from "./login.module.css";
import InputField from "../components/InputField";
import { useRouter } from "next/navigation";

import styles from "./login.module.css";
import InputField from "../components/InputField";
import Link from "next/link";
import axios from "axios";
import StarterHeader from "../components/starterHeader";


const Page:React.FC = () => {
    const router = useRouter()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState(0)
    const [errorMessage,setErrorMessage] = useState("")

    const handleLogin = async() => {
        if(email.length > 0 && password.length > 0){
            try{
                const data = {email,password}
                const response = await axios.post("http://localhost:5100/api/user/login",data)
                console.log(response.data)
                toast.success("Login Successfully")
            }
            catch(error:any){
                setError(error?.response?.status)
                setErrorMessage(error?.response?.data?.message)
            }
        }
    }

    return(
        <div className={styles.login}>
            <ToastContainer position="bottom-right" theme="colored" newestOnTop={true}/>
            <div className={styles.loginLayout}>
                <div className={styles.leftFlex}>
                    <div style={{maxWidth:800}}>
                        <h1>A few clicks away from achieving your dream job.</h1>
                        <h2>CareerIQ.</h2>
                    </div>
                </div>
                <div className={styles.rightFlex}>
                    <div className={styles.inputContent}>
                        <StarterHeader 
                            heading="Welcome Back! Glad To See You"
                            subtitle="Ready to dive in? Log in with your credentials to access your personalized account experience."
                        />
                        <div className={styles.inputs}>
                            <div>
                                <InputField setInput={setEmail} label="Email Address" email={true} errorCode={error == 401} errorMessage={errorMessage}/>
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