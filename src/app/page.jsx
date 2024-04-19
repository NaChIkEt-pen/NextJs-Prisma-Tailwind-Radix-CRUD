"use client";

import styles from "./page.module.css";

import MyTable from "../components/Table";
import CreateComponent from "../components/CreateComponent";
const data = [
  { FullName: "Value 1", Email: "Value 2", Group: "Value 3" },
  { FullName: "Value 4", Email: "Value 5", Group: "Value 6" },
];
export default function Home() {
  return (
    //<Theme>
    <div className={`${styles.mainDiv} m-10 `}>
      <MyTable data={data} />
      <CreateComponent />
    </div>
    //</Theme>
  );
}
