import { useDispatch, useSelector } from 'react-redux';
import styles from  './quickShop.module.scss';
import { toggleQuickshop } from '../../redux/actions';
import { useEffect } from 'react';
import ProductItem from '../../pages/Product/ProductItem/indexProductItem';

const QuickShop = (props) => {

    const dispatch = useDispatch()
    const dataQuickshop = useSelector(state => state.toggleQuickshopReducer.data);

    const handleCloseQuickShop = () => {
        document.body.classList.remove('no-scroll');
        dispatch(toggleQuickshop({data: {}, showQuickshop: false}));
    }
    
    return(
        <>
            {props.show && 
                <div className={styles.containerQuickShop}>
                    <div className={styles.quickShop} id='quickShop'>
                        <div className={styles.header}>
                            <div className={styles.closeIcon} onClick={()=> handleCloseQuickShop()}>&times;</div>
                        </div>
                        <div className={styles.containerContent}>
                            <ProductItem data={dataQuickshop}/>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default QuickShop;