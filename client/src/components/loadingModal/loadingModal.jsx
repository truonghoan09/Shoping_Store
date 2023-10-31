import styles from "./loadingModal.module.scss";

const LoadingModal = (props) => {
    return (
        <>  
            {props.show ? <div className={styles.containerLoading}>
                <div className={styles.spin}></div>
            </div> : null}
            
        </>
    )
}

export default LoadingModal;