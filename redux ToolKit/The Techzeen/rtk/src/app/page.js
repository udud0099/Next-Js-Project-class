// import Image from "next/image";
// import styles from "./page.module.css";
import AddEmployees from "./components/AddEmployees";
import ShowEmployees from "./components/ShowEmployees";

export default function Home() {
  return (
    <>
      <h1>main</h1>
      <AddEmployees />
      <ShowEmployees />
    </>
  );
}
