import { ReactNode } from "react";
import styles from "../login/login.module.css";

interface LayoutStarterProps {
    children: ReactNode;
}

const LayoutStarter: React.FC<LayoutStarterProps> = ({ children }) => {
    return (
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
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutStarter; 