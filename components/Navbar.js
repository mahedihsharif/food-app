import Image from "next/image";
import styles from "../styles/Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        {/* left part */}

        <div className={styles.item}>
          <div className={styles.iconButton}>
            <Image
              src="/img/telephone.png"
              width="37"
              height="37"
              alt="telephone"
            />
          </div>
          <div className={styles.texts}>
            <h3 className={styles.text}>order now!</h3>
            <h2 className={styles.text}>02 34056</h2>
          </div>
        </div>

        {/* middle part */}

        <div className={styles.item}>
          <ul className={styles.listItem}>
            <li className={styles.list}>Home</li>
            <li className={styles.list}>Products</li>
            <li className={styles.list}>Menu</li>
            <Image src="/img/logo.png" width="120" height="120"alt="cart"/>
            <li className={styles.list}>Events</li>
            <li className={styles.list}>Blog</li>
            <li className={styles.list}>Contact</li>
          </ul>
        </div>

        {/* right part */}

        <div className={styles.item}>
          <Image src="/img/cart.png" width="30" height="30"alt="cart"/> 
          <span className={styles.counter}>2</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
