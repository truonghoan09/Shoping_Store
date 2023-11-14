import { useSelector } from 'react-redux';
import styles from './Home.module.scss';
import { IMAGES } from '../../assets';
import { useState } from 'react';
import { useEffect } from 'react';
import AProduct from '../../components/AProductComponent/indexAProductComp';
import { BestSellers, FloralProduct, FreshProduct, WoodyProduct } from '../Product/productManage';
import { Link } from "react-router-dom";
import ScrollToTop from '../../components/ScrollToTopButton/scrollToTopButton';
import QuickShop from '../../components/QuickShop/quickShopIndex';

const HomePage = () => {
    const theme_now = useSelector(state => state.setThemeReducer.theme);

    const [Fresh, setFresh] = useState(true);
    const [Woody, setWoody ] = useState(false);
    const [Smooth, setSmooth ] = useState(false);
    
    const [day, setDay] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const targetDate = new Date('2023-12-31T23:59:59+07:00');


    const showQuickshop = useSelector(state => state.toggleQuickshopReducer.showQuickshop);


    const countDown = () => {
        const interval = setInterval(() => {
            const now = new Date();
            const timeDifferent =  targetDate.getTime() - now.getTime();
            const dayConst = 1000 * 60 * 60 * 24;
            const hourConst = 1000 * 60 * 60;
            const minuteConst = 1000 * 60;
            const secondConst = 1000;
            setDay(Math.floor(timeDifferent / dayConst));
            setHours(Math.floor(timeDifferent % dayConst / hourConst));
            setMinutes(Math.floor(timeDifferent % dayConst % hourConst / minuteConst));
            setSeconds(Math.floor(timeDifferent % dayConst % hourConst % minuteConst / secondConst));
            if (timeDifferent === 0) {
                clearInterval(interval);
            }
        }, 1000)
    }

    useEffect(() => {
        countDown();
    }, [])

    const handleClickSmallMenu = (item) => {
        switch (item) {
            case 'fresh' : {
                setFresh(true);
                setWoody(false);
                setSmooth(false);
                break;
            }
            case 'woody' : {
                setFresh(false);
                setWoody(true);
                setSmooth(false);
                break;
            }
            case 'smooth' : {
                setFresh(false);
                setWoody(false);
                setSmooth(true);
                break;
            }
               
            default:
                break;
        }
    }

    return (
        <>    
            <QuickShop show={showQuickshop}/> 
            <ScrollToTop />
            <div className={`${styles.background} ${styles[theme_now]}`}>
                <div className={styles.countContainer}>
                    <img className={styles.background1} src={IMAGES.Background1} alt="Background1" />
                    <div className={styles.backgroundFillter}>
                        <div className={styles.contentCountContainer}>
                            <div className={styles.leftSide}>
                                <h1>Next launch: Blossoming Spring</h1>
                                <p>A delightful fragrance that embodies the essence of the blooming season with its refreshing and floral notes.</p>
                                <button className={styles.getNotifiedBut}>GET NOTIFIED</button>
                            </div>
                            <span className={styles.middleSpace}></span>
                            <div className={styles.rightSide}>
                                <div className={styles.itemClock}>
                                    <div className={styles.timeNumber}>{day}</div>
                                    <div className={styles.labelDiv}>DAY</div>
                                </div>
                                <div className={styles.borderClock}></div>
                                <div className={styles.itemClock}>
                                    <div className={styles.timeNumber}>{hours}</div>
                                    <div className={styles.labelDiv}>HOURS</div>
                                </div>
                                <div className={styles.borderClock}></div>
                                <div className={styles.itemClock}>
                                    <div className={styles.timeNumber}>{minutes}</div>
                                    <div className={styles.labelDiv}>MINUTES</div>
                                </div>
                                <div className={styles.borderClock}></div>
                                <div className={styles.itemClock}>
                                    <div className={styles.timeNumber}>{seconds}</div>
                                    <div className={styles.labelDiv}>SECONDS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.contaiterBestsellers}>
                    <div className={styles.titleBestsellers}>SHOP BESTSELLERS</div>
                    <div className={styles.containerProductBestSellers}>
                        {BestSellers.map((v,i) => {
                            return (
                                <AProduct 
                                    key={i}
                                    sizeBox = 'bigSize'
                                    data={v}
                                    except={v.type[0]}
                                    />)
                        })}
                    </div>
                </div>

                <div className={styles.containerMadeForYou}>
                    <div className={styles.leftSide}>
                        <h1 className={styles.title}>Made for You</h1>
                        <p className={styles.content}>Perfumers work as ghostwriters chasing after the latest consumer trends. No rules. We are lucky to work with 4 of the leading perfumers in the industry, all basing their work off personal emotion and experience.</p>
                        <Link className={styles.linkPage} to='/'>Read more</Link>
                    </div>
                    <div className={styles.rightSide}>
                        <img className={styles.image} src={IMAGES.Background2}/>
                    </div>
                </div>

                <div className={styles.containerScroll}>
                    {new Array(4).map(() => {
                        return(
                            <div className={styles.item}>High-end luxury fragrance</div>
                        )
                    })}
                </div>
                
                <div className={styles.containerDiscover}>
                    <div className={styles.leftSide}>
                        <img className={styles.image} src={IMAGES.Discover}/>
                    </div>
                    <div className={styles.rightSide}>
                        
                        <div className={styles.title}>Discover</div>
                        <div className={styles.price}>$15.00</div>

                        <div className={styles.inStock}>10 in stock</div>

                        <div className={styles.describe}>This discovery kit will help you explore and test our handcrafted scents on your own skin. This sampler set includes 1.5ml minis of all four scents. Shipping is free and you'll get reimbursed for the sampler kit when you buy a full size bottle!</div>

                        <div className={styles.smallMenu}>
                            <div 
                                className={`${Fresh && styles.menuChoosed} ${styles.menuItem}`}
                                onClick={() => handleClickSmallMenu("fresh")}>
                                    FRESH & FLORAL
                            </div>
                            <div 
                                className={`${Woody && styles.menuChoosed} ${styles.menuItem}`}
                                onClick={() => handleClickSmallMenu("woody")}>
                                    WOODY
                            </div>
                            <div 
                                className={`${Smooth && styles.menuChoosed} ${styles.menuItem}`}
                                onClick={() => handleClickSmallMenu("smooth")}>
                                    SMOOTH
                            </div>
                        </div>
                        <div className={`${styles.contentFreshAndFloral} ${!Fresh && styles.hide}`}>
                            <p>Drawing inspiration from the resurgence of classic gin cocktails, aldehydic top notes shake this clean blend of crisp juniper and Madagascan ginger alive with a freshness that fizzes and excites the senses. Metallic musk unifies a perfectly mixed blend, enhancing each note and complementing the composition.</p>
                            <p>Floral is a more complex, yet playful exploration of light and dark textures that brings a modern twist to classic perfumery notes. A rich base of sumptuous dark leather is punctuated by the elegance of night blooming jasmine. Hidden notes that only emerge as the fragrance dries down surprise you when you think you really know it.</p>
                        </div>
                        <div className={`${styles.contentWoody} ${!Woody && styles.hide}`}>
                            <p>Created to fully harness the power of the olfactory senses, this perfume utilizes the tranquil and nourishing qualities of sandalwood to enhance concentration and awaken intuition. An infusion of lush, effervescent pear at the top adds a distinct uplifting quality and an unmistakably modern appeal.</p>
                        </div>
                        <div className={`${styles.contentSmooth} ${!Smooth && styles.hide}`}>
                            <p>A dreamy blend of the exotic and the familiar. This exceptional perfume uses little tones of sweetness – a bit of vanilla, whisky for warmth, and a rare cannabis accord to accentuate mystical incense notes. Sweet citrus, coffee aromas and edible notes of chocolate and bakery come alive on the skin as the perfume dries.</p>
                        </div>
                        <div className={styles.addToCardBut}>
                            ADD TO CARD
                        </div>
                        <div className={styles.line}></div>
                        <Link className={styles.linkPage2} to={"/product"}>
                            <div>VISIT PRODUCT PAGE</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )}

export default HomePage;