import React, { useState } from 'react';
import styles from './Product.module.scss'
import { addProductToCart, toggleCart, toggleQuickshop } from '../../redux/actions';
import { productsType, typeItem } from '../../pages/Product/ProductManage';
import { useAppDispatch } from '../../hook';

interface Props {
    key : number,
    sizeBox : string,
    data : productsType,
    except : typeItem,
}

const Product : React.FC<Props> = (Props: Props) => {
    const [statusImage, setStatusImage] = useState('inactive')
    const [loadingBtn, setLoadingBtn] = useState(false);
    const data = Props.data
    const except = Props.except

    const dispatch = useAppDispatch();


    const handleClickQuicshopBtn = () => {
        document.body.classList.add('no-scroll');
        dispatch(toggleQuickshop({data: {data, except}, showQuickshop: true}));
    }


    const handleClickAddToCart = (data: productsType, except: typeItem, numbExcept: number) => {
        dispatch(addProductToCart({data: data, except: except, numbExcept: numbExcept}))
        setLoadingBtn(true);
        dispatch(toggleCart(true));
        setTimeout(() => {
            setLoadingBtn(false);
        }, 400);
    }

    return(
        <>
            <div className={`${styles.container} ${styles[Props.sizeBox]}`}>
                <div 
                    className={styles.containerImage} 
                    onMouseOver={() => {setStatusImage('active')}}
                    onMouseOut={() => {setStatusImage('inactive')}}>
                    <img className={styles.image} src={except.image[0]}/>
                    <div className={`${styles.menu} ${styles[statusImage]}`}>
                        <div 
                            className={styles.quickShopBut}
                            onClick={() => handleClickQuicshopBtn()}>
                            QUICKSHOP
                        </div>
                        <span className={styles.centerSpace}/>
                        <div className={styles.addToCardBut}
                            onClick={() => {handleClickAddToCart(data, except, 0)}}
                        >
                            {!loadingBtn ? 'ADD TO CARD' : <div className={styles.circle}/>}
                        </div>
                    </div>
                </div>
                <div className={styles.containerName}>
                    <div className={styles.brand}>{data.brand}</div>
                    <div className={styles.name}>{except.name[0]}</div>
                    <div className={styles.price}>{data.price}</div>
                </div>
            </div>
        </>
    )
}

export default Product;