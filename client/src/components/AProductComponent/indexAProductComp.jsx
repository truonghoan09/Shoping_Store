import { useState } from 'react';
import styles from './AProductComponent.module.scss'
import { useDispatch } from 'react-redux';
import { toggleQuickshop } from '../../redux/actions';

const AProduct = (props) => {
    const [statusImage, setStatusImage] = useState('inactive')
    const data = props.data
    const except = props.except

    const dispatch = useDispatch();

    
    const handleClickQuicshopBtn = () => {
        document.body.classList.add('no-scroll');
        dispatch(toggleQuickshop({data: {data, except}, showQuickshop: true}));
    }

    return(
        <>
            <div className={`${styles.container} ${styles[props.sizeBox]}`}>
                <div 
                    className={styles.containerImage} 
                    onMouseOver={() => {setStatusImage('active')}}
                    onMouseOut={() => {setStatusImage('inactive')}}>
                    <img className={styles.image} src={except.image[1]}/>
                    <div className={`${styles.menu} ${styles[statusImage]}`}>
                        <div 
                            className={styles.quickShopBut}
                            onClick={() => handleClickQuicshopBtn()}>
                            QUICKSHOP
                        </div>
                        <span className={styles.centerSpace}/>
                        <div className={styles.addToCardBut}>
                            ADD TO CARD
                        </div>
                    </div>
                </div>
                <div className={styles.containerName}>
                    <div className={styles.brand}>{data.brand}</div>
                    <div className={styles.name}>{except.name}</div>
                    <div className={styles.price}>{data.price}</div>
                </div>
            </div>
        </>
    )
}

export default AProduct;