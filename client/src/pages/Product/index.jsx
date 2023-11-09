import { useSelector } from "react-redux";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";

const Product = () => {
    const theme_now = useSelector(state => state.setThemeReducer.theme);


    return (
        <>
            <div className={`${styles.container} ${styles[theme_now]}`}>
            
            </div>
        </>
    )
}

export default Product;