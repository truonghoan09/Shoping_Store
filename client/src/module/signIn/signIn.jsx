import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import  styles from './signIn.module.scss'
import ModalNotice from '@/components/modalNotice/modalNotice';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsSignIn, signIn } from '../../redux/actions';
import LoadingModal from '@/components/loadingModal/loadingModal';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contentCheckEmail, setContentCheckEmail] = useState('');
    const [contentCheckPassword, setContentCheckPassword] = useState('');
    const [notice, setnotice] = useState({isshow: false, message: "", severity: "",type: ""});
    const [reRenderEmail, setReRenderEmail] = useState(false);
    const [reRenderPassword, setReRenderPassword] = useState(false);
    const [checkDataResponse, setCheckDataRespons] = useState(true);
    const [preData, setPreData] = useState();
    
    const check_email = () => {
        if (reRenderEmail) {
            if (email === '') {
                setContentCheckEmail('This field cannot be left blank.');
            } else {
                if (email.indexOf('@') === -1 && email !== '') setContentCheckEmail(`The email you entered is invalid because it is missing the '@' symbol.`);
                else setContentCheckEmail('');
            }
        } else {
            setReRenderEmail(true);
        }
    }

    useEffect(() => {
        if (contentCheckEmail) {
            check_email();
        } else {
            if (reRenderEmail && !email) {
                setContentCheckEmail('This field cannot be left blank.');
            }
        }
    }, [email])

    const checkValueEmail = () => {
        if(email) {
            setReRenderEmail(true);
            if (!contentCheckEmail) {
                if (email === '') {
                    setContentCheckEmail('This field cannot be left blank.');
                } else {
                    if (email.indexOf('@') === -1 && email !== '') setContentCheckEmail(`The email you entered is invalid because it is missing the '@' symbol.`);
                    else setContentCheckEmail('');
                }
            }
        }
    }

    const check_password = () => {
        if (reRenderPassword) {
            if (password === '') {
                setContentCheckPassword('This field cannot be left blank.');
            } else {
                if ((password.length < 6) && password !== '') setContentCheckPassword('Your password must be at least 6 characters long.');
                else setContentCheckPassword('');
            }
        } else {
            setReRenderPassword(true);
        }
    }
    useEffect(() => {
        if (contentCheckPassword) {
            check_password();
        } else {
            if (reRenderPassword && !password) {
                setContentCheckPassword('This field cannot be left blank.');
            }
        }
    }, [password])

    const checkValuePassword = () => {
        if(password) {
            setReRenderPassword(true);
            if (!contentCheckPassword) {
                if (password === '') {
                    setContentCheckPassword('This field cannot be left blank.');
                } else {
                    if ((password.length < 6) && password !== '') setContentCheckPassword('Your password must be at least 6 characters long.');
                    else setContentCheckPassword('');
                }
            }
        }
    }


    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(checkIsSignIn(localStorage.getItem('token')));
    },[])
    const isSignIn = useSelector(state => state.checkSignInReducer.status);
    const data = useSelector(state => state.signInReducer.data);
    const loading = useSelector(state => state.signInReducer.loading)
    const error = useSelector(state => state.signInReducer.error)

    const handleClickSignInButton = () => {
        const datasend = {
            email: email,
            password: password,
        }
        if (email === '' || password === '') {
            console.log('Click SignIn');
            setnotice({isshow: true, message: "Bạn cần nhập đầy đủ cả 2 ô email và password, vui lòng kiểm tra lại!", severity: "Warning", type: "Notification Just Noitce"})
        } else {
            if (!contentCheckEmail && !contentCheckPassword) {
                //Gửi request
                setCheckDataRespons(true)
                dispatch(signIn(datasend));
            } else {
                setnotice({isshow: true, message: "Vui lòng kiểm tra lại thông tin bạn đã nhập và sửa cho đúng định dạng!", severity: "Warning", type: "Notification Just Noitce"})
            }
        }
    }

    useEffect(() => {
        if (data) {
            if (data.err === 0) {
                setnotice({isshow : true, message: data.message, severity: "Thông báo", type: "Notification to redirect to the Home page"})
                localStorage.setItem('token', data.token);
            } 
            if (data.err === 1) {
                setnotice({isshow: true, message: data.message, severity: "Thông báo", type: "Notification to reset password input"})
                setPassword('');
                setReRenderPassword(false);
            }
            if (data.err === 2) {
                setnotice({isshow: true, message: data.message, severity: "Thông báo", type: "Notification email does not exist"})
                setEmail('');
                setReRenderEmail(false);
            }
        }
        if (error) {
            setnotice({isshow:true, message: error, severity: "Error", type: "Notification Just Noitce"})
        }
    }, [data, error])

    const theme_now = useSelector(state => state.setThemeReducer.theme);
    
    useEffect(() => {
        if (!isSignIn) setnotice({isshow: false});
    }, []);

    return (
        <>
            <LoadingModal show={loading}/>
            <div className={`${styles.containerPage} ${styles[theme_now]}`}>
                   <div className={styles.container} >
                        <div className={styles.contentLeft}>
                                <p className={styles.title}>Please login to your account</p>
                                <div className={styles.containerForm}>
                                    <div className={styles.didFloatingLabelContent}>
                                            <input 
                                                className={styles.didFloatingInput} 
                                                type="text" 
                                                placeholder=" " 
                                                value={email} 
                                                onChange={(e) => setEmail(e.target.value)}
                                                onBlur={() => checkValueEmail()}
                                                />
                                            <label className={!email ? styles.didFloatingLabel : styles.labelTop}>Email Address</label>
                                    <div className={styles.noticeDiv}>{contentCheckEmail}</div> 
                                    </div> 
                                    <div className={styles.container_password_block}>
                                            <div className={styles.didFloatingLabelContentPassword}>
                                            <input 
                                                type={showPassword ? "text" : "password"} 
                                                placeholder=' ' 
                                                className={styles.didFloatingInputPassword}
                                                onChange={(e) => {setPassword(e.target.value)}}
                                                onBlur={() => checkValuePassword()}
                                                />
                                            <span
                                                onClick={() => setShowPassword(!showPassword)}
                                                className={styles.eyeIcon}
                                                >
                                                {showPassword ? 
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                                                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                                                    </svg> : 
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                                    </svg>
                                                }
                                            </span>
                                            <label className={!password ? styles.didFloatingLabelPassword : styles.labelTop}>Password</label>
                                        </div>
                                        <div className={styles.noticeDiv}>{contentCheckPassword}</div> 
                                    </div>
            
                                    
                                    <div className={styles.containerContentBelow}>
                                        <div className={styles.blockSignIn}>
                                            <div className={styles.logInButton} onClick={()=>handleClickSignInButton()}>Log in</div>
                                            <a className={styles.forgotPassword}>Forgot password?</a>
                                        </div>  
                                        <div className={styles.blockSignUp}>
                                            <p className={styles.content}>Don't have an account?</p>
                                            <Link to="/sign-up" className={styles.signUpButton}>Sign up</Link>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className={styles.contentRight}>
                                <div className={styles.textArea}>
                                    <h4 className={styles.title}>Please log in to access all of our features.</h4>
                                    <p className={styles.content}>If you haven't registered for an account, please click on "Sign up" button to create a new account.</p>
                                </div>
                        </div>
                    </div>
                <ModalNotice show={notice.isshow} onHide={()=>setnotice(!notice.isshow)} message={notice.message} severity={notice.severity} type={notice.type}/>
            </div>
        </>
    )
}

export default SignIn;