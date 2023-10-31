import "./noticeEmailExist.scss"


const NoticeEmailExistModal = (props) => {
    return (
        <>
            <div className="containerNoticeRegisterModal">
                <div className="modalBlock">
                    <div className="header">Thông báo
                        <div className="closeBut" onClick={()=>{props.show(false)}}>&times;</div>
                    </div>
                    <div className="body">Email của bạn dùng đã tồn tại trong hệ thống của chúng tôi, vui lòng thử lại với một email khác!
                        <div className="homeBut" onClick={()=>{props.show(false)}}>Đồng ý</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoticeEmailExistModal;