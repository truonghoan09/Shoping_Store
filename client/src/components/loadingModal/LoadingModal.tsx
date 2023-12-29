import React from "react";
import styles from "./LoadingModal.module.scss";

interface Props{
    show: boolean,
}

const LoadingModal : React.FC<Props> = (props: Props) => {
    return (
        <>  
            {props.show ? <div className={styles.containerLoading}>
                <div className={styles.spin}></div>
            </div> : null}
            
        </>
    )
}

export default LoadingModal;