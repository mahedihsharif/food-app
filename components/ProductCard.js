import Image from "next/image";
import React from "react";
import styles from "../styles/ProductCard.module.css";
const ProductCard = () => {
  return (
    <div className={styles.container}>
      
        <Image src="/img/pizza.png" alt="" width="500" height="500" />

        <h1 className={styles.title}>Lorem Ipsum</h1>
        <span className={styles.price}>$120</span>
        <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
     
    </div>
  );
};

export default ProductCard;
