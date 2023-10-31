import { useEffect, useState } from "react";
import styles from "./scrollButton.module.scss";

const ScrollButton = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {scrollY > 0 && (
        <div className={styles.scrollButton} onClick={scrollToTop}>
          <div className={styles.arrow}>a</div>
        </div>
      )}
    </>
  );
};

export default ScrollButton;
