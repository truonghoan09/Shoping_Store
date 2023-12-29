import styles from "./Product.module.scss";
import { AllProduct, productsType, typeItem } from "./ProductManage";
import Product from "../../components/Product/Product";
import QuickShop from "../../components/QuickShop/QuickshopIndex";
import ScrollToTop from "../../components/ScrollToTopButton/ScrollToTopButton";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hook";

const ProductPage : React.FC = () => {
    const theme_now = useAppSelector(state => state.setThemeReducer.theme);

    const showQuickshop = useAppSelector(state => state.toggleQuickshopReducer.showQuickshop);
    
    interface ProductArr {
        data: productsType,
        except: typeItem,
    }

    const [productArr, setProductArr] = useState<ProductArr[]>([]);


    useEffect(() => {
        const Arr : ProductArr[] = [];
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
                                    <Product 
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

export default ProductPage;