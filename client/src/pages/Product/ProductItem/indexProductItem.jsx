import { useState } from 'react';
import styles from './productItem.module.scss'
import { array } from 'prop-types';
import { useDispatch } from 'react-redux';
import { addProductToCart, toggleCart } from '../../../redux/actions';



const ProductItem = (props) => {

    const dispatch = useDispatch();

    const data = props.data.data;
    const except = props.data.except;

    // const numberOption = new Array (data.numberOption);

    const [chooseImg, setChooseImg] = useState(1);
    
    const [chooseOption, setChooseOption] = useState(1);
    const [loadingBtn, setLoadingBtn] = useState(false);


    const handleClickChooseOption =  (numb) => {
        setChooseImg(numb);
        setChooseOption(numb);
    }
    
    const handleClickAddToCart = (data, except, numbExcept) => {
        dispatch(addProductToCart({data: data, except: except, numbExcept: numbExcept-1}))
        setLoadingBtn(true);
        dispatch(toggleCart(true));
        setTimeout(() => {
            setLoadingBtn(false);
        }, 400);
    }

    return(
        <>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <div className={styles.menuImage}>
                    {except.image.map((_,i) => {
                        return(
                            <>
                                <img key={i} src={except.image[i]} 
                                    className={(chooseImg === i+1) ? styles.imgChoose: null}
                                    onClick={() => setChooseImg(i+1)}
                                    />
                            </>
                        )
                    })}
                    </div>
                    <div className={styles.containerImageBig}>
                        <img src={except.image[chooseImg-1]}/>
                    </div>
                </div>
                <div className={styles.containerText}>
                    <div className={styles.title}>{except.name[0]}</div>
                    <div className={styles.price}>{except.price[chooseOption-1]}</div>
                    {data.optionName !== '' && 
                        <div className={styles.containerMenuOption}>
                            <div className={styles.label}>{data.optionName}</div>
                            <div className={styles.containerOptionMenuItem}>
                                {except.optionItems.map((_,i)=> {
                                    return(
                                        <div key={i} className={`${styles.menuOptionItem} ${(chooseOption === i+1) && styles.optionChoose}`}
                                        onClick={() => {handleClickChooseOption(i+1)}}>
                                            {except.optionItems[i]}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>}
                    <div className={styles.addToCardBut} onClick={() => handleClickAddToCart(data, except, chooseOption)}>
                        ADD TO CARD
                    </div>
                    <div className={styles.textContent}>
                        {data.content}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem;