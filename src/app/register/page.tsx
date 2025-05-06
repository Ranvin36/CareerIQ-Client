"use client"

import { useState } from "react";
import styles from "../login/login.module.css";
import InputField from "../components/InputField";
import { useRouter } from "next/navigation";
import Link from "next/link";
import StarterHeader from "../components/starterHeader";
import axios from "axios"
import Link from "next/link"
import { toast, ToastContainer } from "react-toastify"
const Page = () => {
        const router = useRouter()
        const [email,setEmail] = useState("")
        const [password,setPassword] = useState("")
        const [name,setName] = useState("")
        const [error,setError] = useState(0)
        const [errorMessage,setErrorMessage] = useState("")

        const handleRegister = async() => {
            if(name.length > 0 && email.length > 0 && password.length > 0){
                try{
                    const data = {email,password,name}
                    const response = await axios.post("http://localhost:5100/api/user/register",data)
                    console.log(response.data)
                    toast.success("Registration Successfully ✌️")
                    setTimeout(() => {
                        router.push("/login");
                    },3000)
                }
                catch(error:any){
                    setError(error?.response?.status)
                    setErrorMessage(error?.response?.data?.message)
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
                        <StarterHeader 
                            heading="Unlock More - Register!"
                            subtitle="Join our community and discover everything we have to offer. Registering is simple and takes just a moment."
                        />
                        <div className={styles.inputs}>
                            <div>
                                <InputField setInput={setName} label="Full Name"/>
                            </div>
                            <div>
                                <InputField setInput={setEmail} label="Email Address" email={true}/>
                            </div>
                            <div>
                                <InputField setInput={setPassword} label="Password" password={true}/>
                            </div>
                            <div className={styles.forgotPassword}>
                                <a href="/login">Already Have An Account?</a>
                            </div>
                        </div>
                        <h1>Unlock More - Register!</h1>
                    </div>
                    <div className={styles.tagLine}>
                        <p>Join our community and discover everything we have to offer. Registering is simple and takes just a moment.</p>
                    </div>
                    <div className={styles.inputs}>
                        <div>
                            <InputField setInput={setName} label="Full Name"/>
                        </div>
                        <div>
                            <InputField setInput={setEmail} label="Email Address" email={true} errorCode={error == 409} errorMessage={errorMessage}/>
                        </div>
                        <div>
                            <InputField setInput={setPassword} label="Password" password={true} errorCode={error == 422} errorMessage={errorMessage}/>
                        </div>
                        <div className={styles.forgotPassword}>
                            <Link href="/login">Already Have An Account?</Link>
                        </div>
                    </div>
                    <div className={styles.btnBg}>
                        <div className={styles.loginBtn} onClick={handleRegister}>
                            <a href="#">Sign Up Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page

