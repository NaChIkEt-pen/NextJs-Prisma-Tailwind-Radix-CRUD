"use client";

import styles from "./page.module.css";

import MyTable from "../components/Table";

const data = [
  { FullName: "Value 1", Email: "Value 2", Group: "Value 3" },
  { FullName: "Value 4", Email: "Value 5", Group: "Value 6" },
];
export default function Home() {
  return (
    //<Theme>
    <div className={`${styles.mainDiv} m-10 `}>
      <button
        style={{ marginLeft: "500px" }}
        className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Button
      </button>
      <MyTable data={data} />
    </div>
    //</Theme>
  );
}
