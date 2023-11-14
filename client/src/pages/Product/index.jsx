import { useSelector } from "react-redux";
import styles from "./Product.module.scss";
import { AllProduct } from "./productManage";
import AProduct from "../../components/AProductComponent/indexAProductComp";
import QuickShop from "../../components/QuickShop/quickShopIndex";
import ScrollToTop from "../../components/ScrollToTopButton/scrollToTopButton";
import { useEffect, useState } from "react";

const Product = () => {
    const theme_now = useSelector(state => state.setThemeReducer.theme);

    const showQuickshop = useSelector(state => state.toggleQuickshopReducer.showQuickshop);
    const [productArr, setProductArr] = useState([]);

    useEffect(() => {
        const Arr = [];
        AllProduct.map((v,i) => {
            v.type.map((vv,_) => {
                Arr.push({data: v, except: vv})
            }) 
        })
        setProductArr(Arr);
    }, [])
    return (
        <>
            <QuickShop show={showQuickshop}/> 
            <ScrollToTop />
            <div className={`${styles.container} ${styles[theme_now]}`}>
                <div className={styles.containerProducts}>
                    {
                        productArr.map((v,i) => {
                            return (
                                <div className={styles.productItem}>
                                    <AProduct 
                                        key={i}
                                        sizeBox = 'bigSize'
                                        data={v.data}
                                        except={v.except}/>
                                </div>
                            )
                        })
                        
                    }
                </div>
            </div>
        </>
    )
}

export default Product;