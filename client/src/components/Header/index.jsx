import { useSelector, useDispatch } from 'react-redux';
import ChangeThemeButton from '../changeThemeButton/changeThemeButton';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { checkIsSignIn } from '@/redux/actions';
import { useRef, useState, useEffect } from 'react';

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

  return (
      <nav className={`${styles.header} ${styles[theme_now]}`}>
          <div className={styles.container_full}>
              <div className={styles.option_left}>
                  <Link to="/">HOME</Link>
                  <div>|</div>
                  <Link to="/product">PRODUCT</Link>
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
          </div>
      </nav>
  );
}

export default NavBar;
