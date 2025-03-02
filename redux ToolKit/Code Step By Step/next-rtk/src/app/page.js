import Image from "next/image";
import styles from "./page.module.css";
import AddUser from "./components/AddUser";
import DisplayUser from "./components/DisplayUser";

export default function Home() {
  return (
    <>
      <h1>main page</h1>
      <AddUser />
      <DisplayUser />
    </>
  );
}
