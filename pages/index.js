import axios from "axios";
import Head from "next/head";
import Feature from "../components/Feature";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Resturant in Comilla</title>
        <meta name="description" content="Best Pizza ordering system in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feature />
      <ProductList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      pizzaList: res.data,
    },
  };
};
