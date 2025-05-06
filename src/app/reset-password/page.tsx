"use client"

import { useEffect, useState } from "react";
import styles from "../login/login.module.css";
import InputField from "../components/InputField";
import { useRouter, useSearchParams } from "next/navigation";
import StarterHeader from "../components/starterHeader";
import axios from "axios";

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
    const searchParams = useSearchParams();
    const email = searchParams.get("email");

    async function handleResetPassword(){
        if(newPassword.length > 0 && confirmpassword.length> 0){
            if(newPassword === confirmpassword){
                const data = {"token":token,"password":confirmpassword,"email":email}
                try{
                    const response = await axios.post("http://localhost:5100/api/user/reset-password",data)
                    console.log(response.data)
                    router.push("/login")
                }
                catch(error){
                    console.log(error)
                }
            }
        }

    }
    useEffect(() => {
        const token = searchParams.get("token");
        if(token != null){
            setToken(decodeURIComponent(token))
        }
    },[])

    console.log("Decoded token:", decodeURIComponent(searchParams.get("token") || "") + " " + email);
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
                        <StarterHeader 
                            heading="Reset Your Password"
                            subtitle="Enter your new password below to reset your account."
                            showBackButton={false}
                        />
                        <div className={styles.inputs}>
                            <div>
                                <InputField setInput={setnewPassword} label="New Password" password={true}/>
                            </div>
                            <div>
                                <InputField setInput={setConfirmPassword} label="Confirm Password" password={true}/>
                            </div>
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

