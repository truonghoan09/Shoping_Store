import { useSelector } from "react-redux";
import styles from "./ModalNotice.module.scss";
import { Link } from "react-router-dom";
import React from "react";
import { useAppSelector } from "../../hook";

interface Props {
    show: boolean,
    severity: string,
    message: string,
    type: string,
    onHide: () => void,
}

const ModalNotice : React.FC<Props> = ({show, severity, message, type, onHide}) => {
  
  const theme_now = useAppSelector(state => state.setThemeReducer.theme);
  
  return (
        <>
          {show ? 
            <>    
              <div className={`${styles.containerNoticeRegisterModal} ${styles[theme_now]}`}>
                <div className={styles.modalBlock}>
                  <div className={styles.header}>{severity}
                    {type === "Notification Just Noitce" ? <div className={styles.closeIcon} onClick={()=>{onHide()}}>&times;</div> : null}
                  </div>
                  <div className={styles.body}>{message}
                   {type === "Notification Just Noitce" ?
                      <div className={styles.closeBut} onClick={()=>{onHide()}}>OK</div> 
                        : 
                      null}
                  {type === "Notification to redirect to the Home page" ? 
                    <Link to="/" className={styles.closeBut} onClick={() => onHide()}>Về Trang Chủ</Link>
                  : null}  
                  {type === "Notification to reset email input" ? 
                    <div className={styles.closeBut} onClick={() => onHide()}>Đồng Ý</div> 
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
