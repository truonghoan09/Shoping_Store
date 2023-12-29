
import React, { useState, useEffect } from 'react';
import styles from './scrollButton.module.scss'

const ScrollToTopBtn : React.FC = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            });
    }

    const [scrollPosition, setScrollPosition] = useState<number>(0);


    // useEffect này là để lắng nghe và cập nhật vị trí scroll của window vào state
    useEffect(() => {
        const handleScrollEvent = () => {
        setScrollPosition(window.scrollY);
        };

        // Lắng nghe sự kiện scroll
        window.addEventListener('scroll', handleScrollEvent);

        // Hủy lắng nghe khi component unmount
        return () => {
        window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []); 
    return (
        <>
            {
                (scrollPosition > 0) && 
                <div className={styles.buttonScroll} onClick={()=>scrollToTop()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up-square" viewBox="0 0 16 16">
                        <path  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                    </svg>
                </div>
            }
        </>
    )
}

export default ScrollToTopBtn;