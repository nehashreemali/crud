import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "./componenets/Layout/Layout";
import SearchInputs from "./componenets/SearchInputs/SearchInputs";
import CountryTable from "./componenets/CountryTable/CountryTable";

export default function home({ countries }) {
  console.log(countries);
  return <Layout>
  <div className={styles.counts}> Found {countries.length} countrie</div>
  <SearchInputs placeholder="Filter by Name"/>
  <CountryTable country={countries} />
  </Layout>;
}
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v2/all");
  const countries = await res.json();
  return {
    props: { countries },
  };
};
