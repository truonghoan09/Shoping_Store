import styles from './Footer.module.scss'
import React from 'react';
import { useAppSelector } from '../../hook';

const Footer: React.FC = () => {
    const theme_now = useAppSelector(state => state.setThemeReducer.theme)
    return(
        <>
            <div className={`${styles.container_grid} ${styles[theme_now]}`}>
                <div className={styles.info}>
                    <div className={styles.title}>
                    THÔNG TIN LIÊN HỆ
                    </div>
                    <div className={styles.emailBlock}>
                        <div>Email:</div>
                        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" className={styles.email}>demo@gmail.com</a>
                    </div>
                    <div className={styles.phoneNumberBlock}>
                        <div>Phone: 01234567891</div>
                    </div>
                    <div className={styles.add}>Address: 123, Trần Văn A, Phường 70, quận 80, TP.A</div>
                </div>
                <div className={styles.payment}>
                    <div className={styles.title}>
                    THANH TOÁN
                    </div>
                    <ul className={styles.paymentlist}>
                        <li className={styles.icon}>
                            <a rel="noopener noreferrer">
                                <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="logo"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a rel="noopener noreferrer">
                                <img src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16" alt="logo"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                <img src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08" alt="logo"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                <img src="https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c" alt="logo"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                <img src="https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281" alt="logo"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                <img src="https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09" alt="logo"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                <img src="https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06" alt="logo"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                <img src="https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492" alt="logo"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div  className={styles.express}>
                    <div className={styles.title}>
                        ĐƠN VỊ VẬN CHUYỂN
                    </div>
                    <ul className={styles.expresslist}>
                        <li className={styles.icon}>
                            <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                <img src="https://down-vn.img.susercontent.com/file/5e7282bd0f7ee0872fdb0bd1d40fbe9e" alt="logo"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                <img src="https://down-vn.img.susercontent.com/file/d10b0ec09f0322f9201a4f3daf378ed2" alt="logo"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                <img src="https://down-vn.img.susercontent.com/file/77bf96a871418fbc21cc63dd39fb5f15" alt="logo"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                <img src="https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f" alt="logo"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                <img src="https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c" alt="logo"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                <img src="https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63" alt="logo"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                <img src="https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5" alt="logo"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                <img src="https://down-vn.img.susercontent.com/file/6e3be504f08f88a15a28a9a447d94d3d" alt="logo"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                <img src="https://down-vn.img.susercontent.com/file/b8348201b4611fc3315b82765d35fc63" alt="logo"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a target="_blank" rel="noopener noreferrer" className="_2pbE-b">
                                <img src="https://down-vn.img.susercontent.com/file/0b3014da32de48c03340a4e4154328f6" alt="logo"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`${styles.infoDev} ${styles[theme_now]}`}>
                <div>© 2023 - Trang web được phát triển bởi Lê Trường Hoan</div>
            </div>
        </>
    )
}

export default Footer;