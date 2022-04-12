import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Feature from "../components/Feature";
import ProductList from "../components/ProductList";
import styles from "../styles/Home.module.css";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Resturant in Comilla</title>
        <meta name="description" content="Best Pizza ordering system in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Feature />
      {<AddButton setClose={setClose} />}
      <ProductList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}
//ctx  it will use as the funtion parameter in side function.
export const getServerSideProps = async () => {
  // const myCookie = ctx.req?.cookies || "";
  // let admin = false;

  // if (myCookie.token === process.env.TOKEN) {
  //   admin = true;
  // }

  const res = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      pizzaList: res.data,
      // admin,
    },
  };
};
