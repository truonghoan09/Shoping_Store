import React, { useState } from 'react';
import styles from './ProductItem.module.scss'
import { addProductToCart, toggleCart } from '../../../redux/actions';
import { productsType, typeItem } from '../ProductManage';
import { useAppDispatch } from '../../../hook';

interface Props {
    data : {
        data : productsType,
        except: typeItem,
    }
}

const ProductItem : React.FC<Props> = (Props: Props) => {

    const dispatch = useAppDispatch();

    const data = Props.data.data;
    const except = Props.data.except;

    // const numberOption = new Array (data.numberOption);

    const [chooseImg, setChooseImg] = useState(1);
    
    const [chooseOption, setChooseOption] = useState(1);


    const handleClickChooseOption =  (numb : number) => {
        setChooseImg(numb);
        setChooseOption(numb);
    }
    
    const handleClickAddToCart = (data: object, except: object, numbExcept: number) => {
        dispatch(addProductToCart({data: data, except: except, numbExcept: numbExcept-1}))
        dispatch(toggleCart(true));
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
                        <div dangerouslySetInnerHTML={{__html: data.content}}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem;