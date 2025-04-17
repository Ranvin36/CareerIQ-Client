import styles from "../login/login.module.css";

type InputFieldProps = {
    setInput: (input:string) => void,
    label:string,
    password?:boolean,
    email?:boolean,
    errorCode?:boolean,
    errorMessage?:any
}

const InputField:React.FC<InputFieldProps> = ({setInput,label,password,email,errorCode,errorMessage}) => {
    console.log(errorCode)
    return(
        <div className={styles.inputContainer}>
        <h3>{label}</h3>
            <div className={`${styles.inputField} ${errorCode ? styles.error: ''}`}>
                <input type={password ? "password" : email? "email" : "text"} placeholder={`Enter Your ${label}`} onChange={(e) => setInput(e.target.value)}/>
            </div>
            {errorCode && errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        </div>
    )
}

export default InputField