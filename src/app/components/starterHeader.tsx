"use client"

import { ReactNode } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import styles from "../login/login.module.css";

interface LoginHeaderProps {
    heading: string;
    subtitle: string;
    showBackButton?: boolean;
}

const StarterHeader: React.FC<LoginHeaderProps> = ({ 
    heading, 
    subtitle,
    showBackButton = true 
}) => {
    const router = useRouter();

    return (
        <>
            <div className={styles.loginHeader}>
                {showBackButton && (
                    <div className={styles.arrowBg} onClick={() => router.back()}>
                        <div className={styles.backArrow}>  
                            <IoArrowBackOutline size={20}/>
                        </div>
                    </div>
                )}
                <h1>{heading}</h1>
            </div>
            <div className={styles.tagLine}>
                <p>{subtitle}</p>
            </div>
        </>
    );
};

export default StarterHeader;