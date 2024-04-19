"use client";
import styles from "./page.module.css";

import MyTable from "../components/Table";
import CreateComponent from "../components/CreateComponent";

export default function Home() {
  return (
    //<Theme>
    <div className={`${styles.mainDiv} m-10 `}>
      <MyTable />
      <CreateComponent />
    </div>
    //</Theme>
  );
}
