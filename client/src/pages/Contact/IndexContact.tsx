import React from 'react';
import styles  from './Contact.module.scss';
import {IMAGES} from '../../assets/index';
import ModalNotice from '../../components/ModalNotice/ModalNotice.jsx';
import ScrollToTopBtn from '../../components/ScrollToTopButton/ScrollToTopButton';
import { useAppSelector } from '../../hook';

const Contact : React.FC = () => {

    
    const [name, setName]  =  React.useState<string>('');
    const [email, setEmail]  =  React.useState<string>('');
    const [message, setMessage]  =  React.useState<string>('');
    const [errName, setErrName]  =  React.useState<boolean>(false);
    const [errEmail, setErrEmail]  =  React.useState<boolean>(false);
    const [firstRender, setFirstRender]  =  React.useState<boolean>(true);

    interface noticeState {
        isshow: boolean, 
        message: string, 
        severity: string, 
        type: string
    }

    const theme_now = useAppSelector(state => state.setThemeReducer.theme);

    const [notice, setNotice] = React.useState<noticeState>({isshow: false, message: '', severity: '', type: '',})
    
    const hanleClickSubmitBtn  = () => {
        setFirstRender(false);
        if (name !== '' && email !== '') {
            setNotice({
                isshow: true,
                message: 'Thông tin của bạn đã được gửi! Xin cảm ơn bạn đã quan tâm đến chúng tôi',
                severity: 'Thông Báo',
                type: 'Notification Just Noitce'
            })
            setEmail('');
            setName('');
            setMessage('');
            setFirstRender(true);
        } else {
            setNotice({
                isshow: true,
                message: 'Trường "Name" và "Email" là hai trường không thể bỏ trống!',
                severity: 'Warning',
                type: 'Notification Just Noitce'
            })

        }
    }

    const hideNotice = () => {
        setNotice({
            isshow: false,
            message: '',
            severity: '',
            type: ''
        })
    }

    React.useEffect(() => {
        if(!firstRender) {
            if((!notice.isshow) && (name === '')) {
                setErrName(true);
            } else {setErrName(false)}
            if((!notice.isshow) && (email === '')) {
                setErrEmail(true);
            } else {setErrEmail(false)}
            if(email !== '') {
                setErrEmail(false);
            }
            if(name !== '') {
                setErrName(false);
            }
        }
        }, [notice, email, name])

    return (
        <>
            <ScrollToTopBtn />
            <ModalNotice show={notice.isshow} severity={notice.severity} message={notice.message} type={notice.type} onHide={() => hideNotice()}/>
            <div className={`${styles.container} ${theme_now==='dark' && styles.dark}`} >
                <div className={styles.containerBackground}>
                    <img src={IMAGES.Background3}/>
                    <div className={styles.contentRight}>
                        <div className={styles.title}>Simple is the new bold</div>
                        <div className={styles.content}>We value your input and feedback and would love to hear from you</div>
                    </div>
                </div>
                <div className={styles.containerContact}>
                    <div className={styles.title}>Contact Us</div>
                    <div className={styles.containerForm}>
                        <div className={styles.formItem}>
                            <label>Name</label>
                            <input className={errName && styles.errField} value={name} onChange={(e) => {setName(e.target.value)}}/>
                        </div>
                        <div className={styles.formItem}>
                            <label>Email</label>
                            <input className={errEmail && styles.errField} value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className={styles.formItem}>
                            <label>Message</label>
                            <textarea value={message} onChange={(e) => {setMessage(e.target.value)}}/>
                        </div>
                         <div className={styles.submitBtn} onClick={() => hanleClickSubmitBtn()}>SUBMIT</div>
                    </div>
                </div>
            </div>
         </>
    )
}

export default Contact;