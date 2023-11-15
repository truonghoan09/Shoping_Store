import { useSelector, useDispatch } from 'react-redux';
import ChangeThemeButton from '../changeThemeButton/changeThemeButton';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { checkIsSignIn } from '@/redux/actions';
import { useRef, useState, useEffect } from 'react';
import { toggleCart } from '../../redux/actions';
import CartComp from '../cart/indexCart';

const NavBar = () => { 
    useEffect(()=>{
        dispatch(checkIsSignIn(localStorage.getItem('token')));
    }, [])
    const dispatch = useDispatch();
    const isSignIn = useSelector(state => state.checkSignInReducer.status);
    const theme_now = useSelector(state => state.setThemeReducer.theme)
    const [avatarMenu, setAvatarMenu] = useState(false);
    const [themMenuIsOpen ,setThemeMenuIsOpen] = useState(false);
    const [canOpenThemeMenu ,setCanOpenThemeMenu] = useState(true);
    const avatarRef = useRef(null);

    const cartArr = useSelector(state => state.actionProductWithCartReducer.cartData)
    const quantity = useSelector(state => state.actionProductWithCartReducer.quantity)

    const [numbProduct, setNumbProduct] = useState(0);

    useEffect(() => {
        let sum = 0;
        quantity.forEach(item => {
            sum += item;
        });
        setNumbProduct(sum)
    }, [quantity])


        useEffect(() => {
            const handleOutsideClick = (event) => {
                if (avatarMenu && avatarRef.current && !avatarRef.current.contains(event.target)) {
                    setAvatarMenu(false);
                }
            };
        
            document.addEventListener('click', handleOutsideClick);
        
            return () => {
            document.removeEventListener('click', handleOutsideClick);};
        }, [avatarMenu]);

    const handleClickAvatar = () => {
        event.stopPropagation();
        setAvatarMenu(!avatarMenu);
        if(themMenuIsOpen) {
            setCanOpenThemeMenu(false);
            setThemeMenuIsOpen(false);
        }
    }

    const handleChoseOption = (option) => {    
        setAvatarMenu(false);
    }
    const tonggleThemeChangeStatus = () => {
            if (!themMenuIsOpen) {
                setAvatarMenu(false);
                setThemeMenuIsOpen(true);
                setCanOpenThemeMenu(true);
            } else {
                setThemeMenuIsOpen(false);
            }
    }

    const handleClickCart = () => {
        dispatch(toggleCart(true));
        document.body.classList.add('no-scroll');
    }
    
    // document.body.classList.remove('no-scroll');
    
    
    const showCart = useSelector(state => state.toggleCartReducer.showCart)
    
    useEffect(() => {
        if(showCart) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    },[showCart])

  return (
    <>
        {showCart && <CartComp />}
        <nav className={`${styles.header} ${styles[theme_now]}`}>
            <div className={styles.container_full}>
                <div className={styles.option_left}>
                    <Link className={window.location.pathname === '/'  && styles.choose} to="/">HOME</Link>
                    <div>|</div>
                    <Link className={window.location.pathname.includes('product')  && styles.choose} to="/product">PRODUCT</Link>
                </div>
                <h1 className={styles.titleName}>ATLANTIC</h1>
                {!isSignIn ? 
                <div className={styles.option_right}>
                    <Link to="/sign-in">SIGN IN</Link>
                    <div>|</div>
                    <Link to="/sign-up">SIGN UP</Link>
                </div> : 
                <div className={styles.humanIcon} onClick={handleClickAvatar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                    {
                        avatarMenu ? 
                        <ul ref={avatarRef} className={styles.avatarMenu}>
                            <li onClick={() =>handleChoseOption(1)}>option 1</li>
                            <li onClick={() =>handleChoseOption(2)}>option 2</li>
                        </ul> :
                        null
                    }
                    
                </div>}
                <ChangeThemeButton isOpen={tonggleThemeChangeStatus} canOpen={canOpenThemeMenu}/>
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
