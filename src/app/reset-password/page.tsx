"use client"

import { useEffect, useState } from "react";
import styles from "../login/login.module.css";
import InputField from "../components/InputField";
import { useRouter, useSearchParams } from "next/navigation";
import StarterHeader from "../components/starterHeader";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

interface pageProps {
    params:{
        token:[],
        email:[]
    }
    
}
const Page = ({params}:pageProps) => {
    const router = useRouter()
    const [token,setToken]  = useState("")
    const [newPassword,setnewPassword]  = useState("")
    const [confirmpassword,setConfirmPassword]  = useState("")
    const [error,setError] = useState(0)
    const [errorMessage,setErrorMessage] = useState("")
    const searchParams = useSearchParams();
    const email = searchParams.get("email");

    async function handleResetPassword(){
        if(newPassword.length > 0 && confirmpassword.length> 0){
            if(newPassword === confirmpassword){
                const data = {"token":token,"password":confirmpassword,"email":email}
                try{
                    const response = await axios.post("http://localhost:5100/api/user/reset-password",data)
                    toast.success("Password Reset Successfully 🖐")
                    setTimeout(() => {
                        router.push("/login")
                    },2000)
                    console.log(response.data)
                    router.push("/login")
                }
                catch(error){
                    console.log(error)
                }
            }
            else{
                setError(400)
                setErrorMessage("Password and Confirm Password do not match")
            }
        }

    }
    useEffect(() => {
        const token = searchParams.get("token");
        if(token != null){
            setToken(decodeURIComponent(token))
        }
    },[])
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
                    <div className={styles.loginHeader}>
                        <h1>Forgot Your Password?</h1>
                    </div>
                    <div className={styles.tagLine}>
                        <p>Enter your email address below and we'll send you a link to reset your password.</p>
                    </div>
                    <div className={styles.inputs}>
                        <div>
                            <InputField setInput={setnewPassword} label="New Password" password={true}  errorCode={error == 400}/>
                        </div>
                        <div>
                            <InputField setInput={setConfirmPassword} label="Confirm Password" password={true} errorCode={error == 400} errorMessage={errorMessage}/>
                        </div>
                        <div className={styles.btnBg}>
                            <div className={styles.loginBtn} onClick={handleResetPassword}> 
                                <a href="#">Reset Password</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page

