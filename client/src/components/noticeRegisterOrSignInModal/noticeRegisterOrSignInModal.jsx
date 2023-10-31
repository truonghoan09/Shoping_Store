import { useDispatch, useSelector } from "react-redux";
import "./noticeRegisterModal.scss"
import { useNavigate } from "react-router-dom";
import { signIn } from "@/redux/actions";
import LoadingModal from "../loadingModal/loadingModal";
import ModalNotice from "../modalNotice/modalNotice";
import { useEffect, useState } from "react";


const NoticeRegisterOrSignInModal = (props) => {
    
    const [notice, setnotice] = useState({isshow: false, message: '', severity: ''});
    const [firstRender, setFirstRender] = useState(true);

    const dispatch = useDispatch();
    if (firstRender) {
        dispatch(signIn(props.user));
        setFirstRender(false);
    }
    const data = useSelector(state => state.signInReducer.data)
    const loading = useSelector(state => state.signInReducer.loading)
    const error = useSelector(state => state.signInReducer.error)

    const navigate = useNavigate();
    
    const handleClickAccept = () => {
        navigate('/');
        window.location.reload();
    } 

    useEffect(() => {
        if (error) {
            setnotice({isshow: true, message: error, severity: "ERROR"})
        }
    }, [error])

    useEffect(() => {
        if (data) {
            localStorage.setItem("token", data.token);
        }
    }, [data])

    return(
        <>
            <LoadingModal show={loading}/>
            <ModalNotice show={notice.isshow} onHide={() => setnotice(!notice.isshow)} message={notice.message} severity={notice.severity}/>
            <div className="containerNoticeRegisterModal">
                <div className="modalBlock">
                    <div className="header">Thông báo
                        <div className="closeBut" onClick={()=>{handleClickAccept()}}>&times;</div>
                    </div>
                    <div className="body">{props.message}
                        <div className="homeBut" onClick={()=>{handleClickAccept()}}>Về trang chủ</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoticeRegisterOrSignInModal;