import Head from "next/head";
import Hero from "../components/hero/hero";
import CiudadesGray from "../components/ciudades-gray/ciudades-gray";
import styles from "../styles/page-styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ciudades</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <CiudadesGray />
    </div>
  )
}
