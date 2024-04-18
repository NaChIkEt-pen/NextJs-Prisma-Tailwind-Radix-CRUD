import styles from "./page.module.css";

import MyTable from "@/components/Table";

const data = [
  { FullName: "Value 1", Email: "Value 2", Group: "Value 3" },
  { FullName: "Value 4", Email: "Value 5", Group: "Value 6" },
];
export default function Home() {
  return (
    <div className={styles.mainDiv}>
      <MyTable data={data} />
    </div>
  );
}
