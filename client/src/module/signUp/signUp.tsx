import React, { useState, useEffect } from 'react';
import styles from './signUp.module.scss';
import { Link } from 'react-router-dom';
import ModalNotice from '../../components/ModalNotice/ModalNotice';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import { addUser, signIn } from '../../redux/actions';
import { useAppDispatch, useAppSelector } from '../../hook';
import { stat } from 'fs';


const SignUp : React.FC = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [contentCheckFullname, setContentCheckFullName] = useState('');
    const [contentCheckEmail, setContentCheckEmail] = useState('');
    const [contentCheckPassword, setContentCheckPassword] = useState('');
    const [contentCheckConfirmPassword, setContentCheckConfirmPassword] = useState('');
    const [notice, setnotice] = useState({isshow: false, message: "", severity: "",type: ""});
    const [reRenderFullname, setReRenderFullname] = useState(false);
    const [reRenderEmail, setReRenderEmail] = useState(false);
    const [reRenderPassword, setReRenderPassword] = useState(false);
    const [reRenderConfirmPassword, setReRenderConfirmPassword] = useState(false);

    const check_fullname = () => {
            if (!fullname) {setContentCheckFullName('This field cannot be left blank.');
        } else {
            setContentCheckFullName('');
        }
    }

    useEffect(() => {
        if (reRenderFullname) {
            check_fullname();
        }
    }, [fullname, reRenderFullname])

    const checkValueFullnanme = () => {
        if (fullname) {
            setReRenderFullname(true);
        }
    }

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
    }, [email, reRenderEmail])

    const checkValueEmail = () => {
        if (email) {
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
    }, [password, reRenderPassword])

    const checkValuePassword = () => {
        if (password) {
            setReRenderPassword(true);
            if (!contentCheckPassword) {
                if (password === '') {
                    setContentCheckPassword('This field cannot be left blank.');
                } else {
                    if ((password) && (password.length < 6)) setContentCheckPassword('Your password must be at least 6 characters long.');
                    else setContentCheckPassword('');
                }
            }
        }
    }

    const check_confirm_password = () => {
        if (reRenderConfirmPassword) {
                if (confirmPassword === '') {
                    setContentCheckConfirmPassword('This field cannot be left blank.');
                } else {
                    
                    if (password  && !contentCheckPassword) {
                            if (confirmPassword) {
                                if (confirmPassword.length < 6) {
                                    setContentCheckConfirmPassword('Your password must be at least 6 characters long.')
                                }
                                else {
                                    if (password!==confirmPassword) {
                                        setContentCheckConfirmPassword('Please double-check your confirm password.')
                                    } 
                                    else {
                                        setContentCheckConfirmPassword('');
                                    }
                                }
                            } 
                    }
                    else {
                        setContentCheckConfirmPassword('You need to enter "complete" and "valid" information in your password field first.')
                    }
                }
        } else {
            if (confirmPassword) setReRenderConfirmPassword(true);
        }
    }
    useEffect(() => {
        check_confirm_password();
        if (!contentCheckConfirmPassword) {
            if (reRenderConfirmPassword && !confirmPassword) {
                setContentCheckConfirmPassword('This field cannot be left blank.');
            }
        }
    }, [confirmPassword, password, contentCheckPassword, reRenderConfirmPassword])

    const checkValueConfirmPassword = () => {
        if (confirmPassword!=='') {
            setReRenderConfirmPassword(true);
            if (!contentCheckConfirmPassword) {
                if (confirmPassword === '') {
                    setContentCheckConfirmPassword('This field cannot be left blank.');
                } else {
                    
                    if (password) {
                        if (!contentCheckPassword) {
                            if (confirmPassword) {
                                if (confirmPassword.length < 6) {
                                    setContentCheckConfirmPassword('Your password must be at least 6 characters long.')
                                }
                                else {
                                    if (password!==confirmPassword) {
                                        setContentCheckConfirmPassword('Please double-check your confirm password.')
                                    } 
                                    else {
                                        setContentCheckConfirmPassword('');
                                    }
                                }
                            } 
                        }
                    }
                    else {
                        setContentCheckConfirmPassword('You need to enter "complete" and "valid" information in your password field first.')
                    }
                }
            }
        }
    }

    const dispatch = useAppDispatch();
    const data = useAppSelector(state => state.addUserReducer.data);
    const loading = useAppSelector(state => state.addUserReducer.loading)
    const error = useAppSelector(state => state.addUserReducer.error)

    const dataSignin = useAppSelector(state => state.signInReducer.data);

    const handleClickSignUpButton = () => {
        setReRenderFullname(true);
        setReRenderEmail(true);
        setReRenderPassword(true);
        setReRenderConfirmPassword(true);
        if (!fullname || !email || !password || !confirmPassword) {
            setnotice({isshow : true, message: "Không được để trống thông tin, vui lòng điền đầy đủ vào cả 4 ô", severity: "Cảnh báo", type: "Notification Just Noitce"})
        } else {
            if (!contentCheckFullname && !contentCheckEmail && !contentCheckPassword && !contentCheckConfirmPassword) {
                const dataSend = {
                    fullname: fullname,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword,
                }
                dispatch(addUser(dataSend));
            } else {
                setnotice({isshow : true, message: "Thông tin còn sai, phải sửa lại", severity: "Cảnh báo", type: "Notification Just Noitce"})
            }
        }
    }

    const resetInput = () => {
        setFullname('');
        setReRenderFullname(false);
        setEmail('');
        setReRenderEmail(false);
        setPassword('');
        setReRenderPassword(false);
        setConfirmPassword('');
        setReRenderConfirmPassword(false);
    } 

    useEffect(() => {
        if (dataSignin) {
            if (dataSignin.err === 0) {
                setnotice({isshow : true, message: data.message, severity: "Thông báo", type: "Notification to redirect to the Home page"})
                resetInput();
                localStorage.setItem('token', dataSignin.token)
            } 
        }
    }, [dataSignin])
    useEffect(() => {
        if (data) {
            if (data.err === 0) {
                const dataSend = {
                    fullname: fullname,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword,
                }                
                dispatch(signIn(dataSend))
            } else {
                if (data.err === 1) {
                    setnotice({isshow: true, message: data.message, severity: "Thông báo", type: "Notification to reset email input"})
                    setEmail('');
                    setReRenderEmail(false);
                }
            }
        }
        if (error) {
            setnotice({isshow:true, message: error, severity: "Error", type: "Notification Just Noitce"})
        }
    }, [data, error])

    const theme_now = useAppSelector(state => state.setThemeReducer.theme);

    return (
        <>
            <LoadingModal show={loading}/>
            <div className={`${styles.backGround} ${styles[theme_now]}`}>
                <div className={styles.container}>
                    <div className={styles.title}>
                    Register a new account
                    </div>
                    <div className={styles.didFloatingLabelContent}>
                        <input 
                            className={styles.didFloatingInput} 
                            type="text" 
                            placeholder=" " 
                            value={fullname} 
                            onChange={(e) => setFullname(e.target.value)}
                            onBlur={() => checkValueFullnanme()}
                            />
                        <label className={!fullname ? styles.didFloatingLabel : styles.labelTop}>Fullname</label>
                        <div className={styles.noticeDiv}>{contentCheckFullname}</div>
                    </div>  
                    <div className={styles.didFloatingLabelContent}>
                        <input 
                            className={styles.didFloatingInput} 
                            type="text" 
                            placeholder=" " 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={()=> checkValueEmail()}
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
                                    onBlur={() => {checkValuePassword()}}
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
                    <div className={styles.container_password_block}>
                        <div className={styles.didFloatingLabelContentPassword}>
                        <input 
                            type={showConfirmPassword ? "text" : "password"} 
                                placeholder=' ' 
                                className={styles.didFloatingInputPassword}
                                onChange={(e) => {setConfirmPassword(e.target.value)}}
                                onBlur={() => checkValueConfirmPassword()}
                                />
                        <span
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className={styles.eyeIcon}
                        >
                            {showConfirmPassword ? 
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
                        <label className={!confirmPassword ? styles.didFloatingLabelPassword : styles.labelTop}>Confirm Password</label>
                        </div>
                        <div className={styles.noticeDiv}>{contentCheckConfirmPassword}</div>
                    </div>
                    <div className={styles.containerSignUpButton}>
                        <div className={styles.signUpButton}
                            onClick={() => handleClickSignUpButton()}
                        >Sign Up</div>
                    </div>
                    <div className={styles.supportContent}>
                        Do you have an account?
                        <Link to='/sign-in' className={styles.linkToSignIn}>
                            Log in now
                        </Link>
                    </div>
                </div>
                <ModalNotice show={notice.isshow} onHide={()=>setnotice({isshow: false, severity: '', message: '', type: ''})} message={notice.message} severity={notice.severity} type={notice.type}/>
            </div>
        </>
    )
}

export default SignUp;