import styles from "../login/login.module.css";

type InputFieldProps = {
    setInput: (input:string) => void,
    label:string,
    password?:boolean,
    email?:boolean
}

const InputField:React.FC<InputFieldProps> = ({setInput,label,password,email}) => {
    return(
        <div className={styles.inputContainer}>
        <h3>{label}</h3>
            <div className={styles.inputField}>
                <input type={password ? "password" : email? "email" : "text"} placeholder={`Enter Your ${label}`} onChange={(e) => setInput(e.target.value)}/>
            </div>
        </div>
    )
}

export default InputField