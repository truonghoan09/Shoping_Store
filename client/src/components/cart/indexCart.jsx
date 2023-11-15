import { useDispatch, useSelector } from 'react-redux';
import styles from './cart.module.scss'
import { removeProductFromCart, toggleCart } from '../../redux/actions';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const CartComp = () => {
    const [slideOut, setSlideOut] = useState(false); 
    const [subtotal, setSubtotal] = useState(0);
    const [surplus, setSurplus] = useState(75.0);
    const [percentSurplus, setPercentSurplus] = useState(0);
    const dispatch = useDispatch();



    useEffect(() => {
        setSurplus(75.0 - subtotal);
        setPercentSurplus(subtotal * 100 / 75);
        if (percentSurplus > 100) {setPercentSurplus(100)} 
    }, [subtotal, surplus])

    const handleCloseCart = () => {
        setSlideOut(true);
        document.body.classList.remove('no-scroll');
        setTimeout(() => {
            dispatch(toggleCart(false));
        }, 400)
    }

    const cartArr = useSelector(state => state.actionProductWithCartReducer.cartData)
    const quantity = useSelector(state => state.actionProductWithCartReducer.quantity)

    useEffect(() => {
        let Sum = 0;
        cartArr.map((v,i) => {
            Sum += parseFloat(v.except.price[v.numbExcept].replace("$", "")) * quantity[i];
        })
        if (Sum !== subtotal) {
            setSubtotal(Sum)
        }
    },[quantity, cartArr])

    const handleRemoveProductItem = (i) => {
        dispatch(removeProductFromCart(i));
    }

    return(
        <>
            <div className={styles.container}>
                <div className={`${styles.containerCart} ${slideOut ? styles.inactive : styles.active}`}>
                    <div className={styles.subContent}>
                        Receive 15% off your first purchase
                    </div>
                    <div className={styles.header}>
                        YOUR CART
                        <div className={styles.closeIcon} onClick={()=> {handleCloseCart()}}>&times;</div>
                    </div>
                    
                    <div className={styles.subContent2}>
                        {surplus > 0 ? `You are ${surplus.toFixed(2)} away from free shipping!` : `You are eligible for free shipping!`}
                    </div>
                    <div className={styles.containerProgress}>
                        {[...Array(Math.floor(percentSurplus))].map(() => {
                            return(
                                <>
                                    <div className={styles.percent}></div>
                                </>
                            )
                        })}
                    </div>
                    <div className={styles.containerProduct}>
                    {cartArr.map((v,i) => {
                        let data = v.data;
                        let except = v.except;
                        let numbExcept = v.numbExcept;
                        
                        return(
                            <>
                                <div className={styles.itemContainer}>
                                    <div className={styles.containerImage}>
                                        <img src={except.image[numbExcept]}/>
                                    </div>
                                    <div className={styles.containerName}>
                                        <div className={styles.brand}>{data.brand}</div>
                                        <div className={styles.name}>{except.name[numbExcept]}</div>
                                        <div className={styles.quantity}>Qty: {quantity[i]}</div>
                                        <div className={styles.price}>{except.price[numbExcept]}</div>
                                    </div>
                                    <div className={styles.removeCartBtn} onClick={() => {handleRemoveProductItem(i)}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart-x" viewBox="0 0 16 16">
                                            <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
                                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                        </svg>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                    </div>

                    {(subtotal > 0) ? 
                    <>
                        <div className={styles.containerSubtotal}>
                            <div className={styles.subtotal}>
                                <div className={styles.label}>Subtotal</div>
                                <div className={styles.subtotalNumb}>${subtotal.toFixed(2)}</div>
                            </div>
                            <div className={styles.subContent3}>Taxes and shipping calculated at checkout</div>
                            <div className={styles.button}>
                                <div className={styles.viewCartBut}>
                                        VIEW CART
                                </div>
                                <span className={styles.centerSpace}/>
                                <div className={styles.checkoutBut}>
                                    CHECKOUT
                                </div>
                            </div>
                        </div>  
                    </>:
                    <>
                        <div className={styles.containerShoping}>
                            <div className={styles.subContent4}>You don't have any items in your cart yet.</div>
                            <Link className={styles.shopingBtn} to={"/product"} onClick={() => handleCloseCart()}>CONTINUE SHOPING</Link>
                        </div>
                    </>}

                </div>
            </div>
        </>
    )
}

export default CartComp;