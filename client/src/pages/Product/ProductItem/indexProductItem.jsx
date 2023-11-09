import { useState } from 'react';
import styles from './productItem.module.scss'
import { array } from 'prop-types';



const ProductItem = (props) => {

    const data = props.data.data;
    const except = props.data.except;

    // const numberOption = new Array (data.numberOption);

    const [chooseImg, setChooseImg] = useState(1);
    
    const [chooseOption, setChooseOption] = useState(1);


    const handleClickChooseOption =  (numb) => {
        setChooseImg(numb);
        setChooseOption(numb);
    }
    
    return(
        <>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <div className={styles.menuImage}>
                    {except.image.map((_,i) => {
                        return(
                            <>
                                <img src={except.image[i]} 
                                    className={(chooseImg === i+1) && styles.imgChoose}
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
                    <div className={styles.title}>{except.name}</div>
                    <div className={styles.price}>{except.price[chooseOption-1]}</div>
                    {data.optionName !== '' && 
                        <div className={styles.containerMenuOption}>
                            <div className={styles.label}>{data.optionName}</div>
                            <div className={styles.containerOptionMenuItem}>
                                {except.optionItems.map((_,i)=> {
                                    return(
                                        <div className={`${styles.menuOptionItem} ${(chooseOption === i+1) && styles.optionChoose}`}
                                        onClick={() => {handleClickChooseOption(i+1)}}>
                                            {except.optionItems[i]}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>}
                    <div className={styles.addToCardBut}>
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