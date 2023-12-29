import ChangeThemeButton from '../ChangeThemeButton/ChangeThemeButton';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { checkIsSignIn, toggleMenu, toggleMenuBox } from '../../redux/actions';
import React, { useRef, useState, useEffect, RefObject } from 'react';
import { toggleCart } from '../../redux/actions';
import CartComp from '../Cart/CartIndex';
import { useAppDispatch, useAppSelector } from '../../hook';

const NavBar : React.FC = () => { 
    
    const dispatch = useAppDispatch();
    
    useEffect(()=>{
            const token = localStorage.getItem('token');
            if (token) {
                    dispatch(checkIsSignIn(token));
        }
    }, [])

    const [slideOut, setSlideOut] = useState(false);
    
    const isSignIn = useAppSelector(state => state.checkSignInReducer.status);
    const theme_now = useAppSelector(state => state.setThemeReducer.theme)
    const stateMenu = useAppSelector(state => state.actionMenuReducer.menu) 
    const onMenu = useAppSelector(state => state.actionMenuBoxReducer.onMenu)
    const avatarRef : RefObject<HTMLDivElement> = useRef(null);
    const option_leftRef : RefObject<HTMLDivElement> = useRef(null);
    
    const cartArr = useAppSelector(state => state.actionWithCartReducer.cartData)
    const quantity = useAppSelector(state => state.actionWithCartReducer.quantity)
    
    const [numbProduct, setNumbProduct] = useState(0);
    
    useEffect(() => {
        let sum = 0;
        quantity.forEach(item => {
            sum += item;
        });
        setNumbProduct(sum)
    }, [quantity])


        useEffect(() => {
            const handleOutsideClick = (event: any) => {
                if (stateMenu && avatarRef.current && !avatarRef.current.contains(event.target)) {
                    dispatch(toggleMenu(0))
                }
            };
        
            document.addEventListener('click', handleOutsideClick);
        
            return () => {
            document.removeEventListener('click', handleOutsideClick);};
        }, [stateMenu]);

        useEffect(() => {
            const handleOutsideClick = (event: any) => {
                if (onMenu === 'left_option' && option_leftRef.current && !option_leftRef.current.contains(event.target)) {
                    dispatch(toggleMenuBox(''))
         
            };
       }        
            document.addEventListener('click', handleOutsideClick);
        
            return () => {
            document.removeEventListener('click', handleOutsideClick);};
        }, [onMenu]);

    const handleClickAvatar = (event: React.MouseEvent) => {
        event.stopPropagation();
        if (stateMenu === 2) {
            dispatch(toggleMenu(0));
        } else {
            dispatch(toggleMenu(2));
        }
    }

    const offOptionLeft = () => {
        setSlideOut(true);
        document.body.classList.remove('no-scroll');
        setTimeout(() => {
            dispatch(toggleMenuBox(''));
        }, 400)
    }
    
    const handleChoseOption = (option: number) => {    
        dispatch(toggleMenu(0))
        if(option === 2) {
            if(onMenu !== '') {
                dispatch(toggleMenuBox(''));
            }
            localStorage.removeItem('token');
            location.reload();
        }
    }
    
    const handleClickCart = () => {
        dispatch(toggleMenuBox('cart'));
        document.body.classList.add('no-scroll');
    }
    
    useEffect(() => {
        if(onMenu !== '') {
            document.body.classList.add('no-scroll');
        } else {
            if (onMenu === '') {
                setSlideOut(false);
                document.body.classList.remove('no-scroll');
            }
        }
    },[onMenu])

    const handleClickListIcon = () => {
        dispatch(toggleMenuBox('option_left'));
    }

  return (
    <>
        {onMenu === 'cart' && <CartComp/>}
        <nav className={`${styles.header} ${styles[theme_now]}`}>
            <div className={styles.container_full}>
                <div className={styles.listIcon}>
                    <svg onClick={() => handleClickListIcon()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    {onMenu === 'option_left' &&
                    <div className={`${styles.menuBox} ${slideOut ? styles.inactive : styles.active}`}>
                        <div className={styles.closeIcon} onClick={()=> {offOptionLeft()}}>&times;</div>
                        <Link onClick={() => offOptionLeft()} className={window.location.pathname === '/'  && styles.choose} to="/">HOME</Link>
                        <Link onClick={() => offOptionLeft()} className={window.location.pathname.includes('product')  && styles.choose} to="/product">PRODUCT</Link>
                        <Link onClick={() => offOptionLeft()} className={window.location.pathname.includes('contact')  && styles.choose} to="/contact">CONTACT</Link>
                        {!isSignIn && <Link onClick={() => offOptionLeft()} className={window.location.pathname.includes('sign-in')  && styles.choose} to="/sign-in">SIGN IN</Link>}
                        {!isSignIn && <Link onClick={() => offOptionLeft()} className={window.location.pathname.includes('sign-up')  && styles.choose} to="/sign-up">SIGN UP</Link>}
                        {isSignIn && <div onClick={() => {handleChoseOption(2)}}>LOG OUT</div>}
                    </div>} 
                </div>
                <div className={styles.option_left}>
                    <Link className={window.location.pathname === '/'  && styles.choose} to="/">HOME</Link>
                    <div>|</div>
                    <Link className={window.location.pathname.includes('product')  && styles.choose} to="/product">PRODUCT</Link>
                    <div>|</div>
                    <Link className={window.location.pathname.includes('contact')  && styles.choose} to="/contact">CONTACT</Link>
                </div>
                <h1 className={styles.titleName}>ATLANTIC</h1>
                {!isSignIn ? 
                <div className={styles.option_right}>
                    <Link className={window.location.pathname.includes('sign-in')  && styles.choose} to="/sign-in">SIGN IN</Link>
                    <div>|</div>
                    <Link className={window.location.pathname.includes('sign-up')  && styles.choose} to="/sign-up">SIGN UP</Link>
                </div> : 
                <div className={styles.humanIcon} onClick={handleClickAvatar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                    {
                        stateMenu === 2 ? 
                        <div ref={avatarRef} onClick={() => handleClickAvatar}>
                            <ul className={styles.avatarMenu}>
                                <li onClick={() =>handleChoseOption(1)}>option 1</li>
                                <li onClick={() =>handleChoseOption(2)}>Log Out</li>
                            </ul> 
                        </div>
                        :
                        null
                    }
                    
                </div>}
                <ChangeThemeButton />
                <div className={styles.cartIconBtn}
                    onClick={() => handleClickCart()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    {cartArr.length > 0 && <div className={styles.numbProduct}>
                        {
                            numbProduct
                        }
                    </div>}
                </div>
            </div>
      </nav>
    </>
  );
}

export default NavBar;
