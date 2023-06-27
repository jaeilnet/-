"use client";

import styles from "./page.module.scss";

import Header from "@/components/layout/header";
import SideBar from "@/components/layout/sidebar";
import Calendar from "@/components/template/calendar";
import { DateContext } from "@/context/DateProvider";
import { useContext } from "react";

export default function Home() {
  const { month, year } = useContext(DateContext);

  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.section}>
        <SideBar />
        <Calendar year={year} month={month} />
      </section>
    </main>
  );
}
