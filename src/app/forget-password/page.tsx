"use client"

import styles from "../login/login.module.css"
import { useState } from "react"
import { useRouter } from "next/navigation"
import InputField from "../components/InputField"
import StarterHeader from "../components/starterHeader"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
const Page = () => {
        const router = useRouter()
        const [email,setEmail] = useState("")
        const [error,setError] = useState(0)
        const [errorMessage,setErrorMessage] = useState("")

        const handleForgetPassword = async() => {
            if(email.length > 0){
                try{
                    const data = {email}
                    const response = await axios.post("http://localhost:5100/api/user/forget-password",data)
                    console.log(response.data)           
                    toast.success("Password Reset Link Email Sent 👉")     
                    setError(0)
                    setErrorMessage("")
                    setEmail("")
                }
                catch(error:any){
                    setError(error?.response?.status)
                    setErrorMessage(error?.response?.data?.message)
                }
            }
        }

    return(
        <div className={styles.login}>
        <ToastContainer position="bottom-right" theme="dark" newestOnTop={true}/>
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
                        heading="Forgot Your Password?"
                        subtitle="Enter your email address below and we'll send you a link to reset your password."
                    />
                    <div className={styles.inputs}>
                        <div>
                            <InputField setInput={setEmail} label="Email Address" email={true} errorCode={error == 400} errorMessage={errorMessage}/>
                        </div>
                    </div>
                    <div className={styles.btnBg}>
                        <div className={styles.loginBtn} onClick={handleForgetPassword}> 
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

