import { useSelector } from "react-redux";
import styles from "./modalNotice.module.scss";
import { Link } from "react-router-dom";

const ModalNotice = (props) => {
  const theme_now = useSelector(state => state.setThemeReducer.theme);
  return (
        <>
          {props.show ? 
            <>    
              <div className={`${styles.containerNoticeRegisterModal} ${styles[theme_now]}`}>
                <div className={styles.modalBlock}>
                  <div className={styles.header}>{props.severity}
                    {props.type === "Notification Just Noitce" ? <div className={styles.closeIcon} onClick={()=>{props.onHide()}}>&times;</div> : null}
                  </div>
                  <div className={styles.body}>{props.message}
                   {props.type === "Notification Just Noitce" ?
                      <div className={styles.closeBut} onClick={()=>{props.onHide()}}>OK</div> 
                        : 
                      null}
                  {props.type === "Notification to redirect to the Home page" ? 
                    <Link to="/" className={styles.closeBut} onClick={() => props.onHide()}>Về Trang Chủ</Link>
                  : null}  
                  {props.type === "Notification to reset email input" ? 
                    <div className={styles.closeBut} onClick={() => props.onHide()}>Đồng Ý</div> 
                    : null}
                  </div>
                </div>
              </div>
            </> 
              : 
            null }
        </>
      );
}

export default ModalNotice;
