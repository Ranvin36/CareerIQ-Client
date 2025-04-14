import styles from "../login/login.module.css";

type InputFieldProps = {
    setEmail: (email:string) => void,
    label:string
}

const InputField:React.FC<InputFieldProps> = ({setEmail,label}) => {
    return(
        <div className={styles.inputContainer}>
        <h3>{label}</h3>
            <div className={styles.inputField}>
                <input type="text" placeholder={`Enter Your ${label}`} onChange={(e) => setEmail(e.target.value)}/>
            </div>
        </div>
    )
}

export default InputField