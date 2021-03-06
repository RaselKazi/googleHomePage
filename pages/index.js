import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { List } from "../data/electronicsBrandName";
export default function Home() {
  const [brandList, setBrandList] = useState([]);

  //handle the click event of the input button
  const handleChange = (e) => {
    const { value } = e.target;
    if (value === "") {
      setBrandList([]);
    } else {
      const newBrandList = List.filter((brand) =>
        brand.toLowerCase().includes(value.toLowerCase())
      );
      setBrandList(newBrandList);
    }
  };

  return (
    <div classNameName={styles.container}>
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* navbar section */}

        <div className={styles.nav}>
          <a className={styles.navLink} href="#">
            Gmail
          </a>
          <a className={styles.navLink} href="#">
            Images
          </a>
          <img className={styles.navImg} src="img/g-menu.PNG" />
          <button className={styles.navButton}>Sign in</button>
        </div>

        <section className={styles.section1}>
          <img src="img/logo.png" className={styles.logo} />

          {/* search filed section */}

          <form>
            <div className={styles.searchBox}>
              <img src="img/search.svg" className={styles.searchIcon} />
              <input
                onChange={handleChange}
                type="text"
                className={styles.sInput}
              />
              <img src="img/vs.png" className={styles.vsIcon} />

              {brandList.length > 0 && (
                <div className={styles.Dropdown}>
                  <ul>
                    {brandList?.map((brand, indexedDB) => {
                      return (
                        <li className={styles.DropdownItem} key={indexedDB}>
                          <a className={styles.DropdownText} href="#">
                            {brand}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </form>

          {/* search button section */}

          <div className={styles.Box}>
            <button className={styles.sBtn}>Google Search</button>
            <button className={styles.sBtn}>I am Feeling Lucky</button>
          </div>
        </section>

        {/* link button section */}

        <div className={styles.lang}>
          Google offered in:
          <a href="#">Bangladesh</a>
          <a href="#">Dhaka</a>
        </div>
      </main>
    </div>
  );
}
