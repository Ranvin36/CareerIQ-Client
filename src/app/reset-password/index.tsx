"use client"

import { useRouter } from "next/navigation";
import styles from "../../login/login.module.css";
import { IoArrowBackOutline } from "react-icons/io5";
import InputField from "@/app/components/InputField";
import { useState } from "react";
interface pageProps {
    params:{
        token:[]
    }
    
}
const Page = ({params}:pageProps) => {
    const [email,setEmail]  = useState("")
    const router = useRouter()
    console.log(params.token.join('/') ," PARAMS")

    function handleResetPassword(){
        


    }
    return(
        <div className={styles.login}>
        <div className={styles.loginLayout}>
            <div className={styles.leftFlex}>
                <div style={{maxWidth:800}}>
                    <h1>A few clicks away from achieving your  job.</h1>
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
                            <InputField setInput={setEmail} label="New Password" email={true}/>
                        </div>
                        <div>
                            <InputField setInput={setEmail} label="Confirm Password" email={true}/>
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

export default Page;


type props ={
    params:{
        token:string
    }
}
