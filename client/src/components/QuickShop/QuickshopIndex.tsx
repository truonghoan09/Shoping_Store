import styles from  './Quickshop.module.scss';
import { toggleQuickshop } from '../../redux/actions';
import ProductItem from '../../pages/Product/ProductItem/IndexProductItem';
import { useAppDispatch, useAppSelector } from '../../hook';
import React from 'react';

interface Props {
    show: boolean,
}

const QuickShop : React.FC<Props> = (props: Props) => {

    const dispatch = useAppDispatch()
    const dataQuickshop = useAppSelector(state => state.toggleQuickshopReducer.data);

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