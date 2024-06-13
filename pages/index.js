import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";


import React from 'react';
import frutas from '../frutas.json';

export default function Home() {
  return (
    <>
    <div className={styles.title_container}>
      <h1 className={styles.title}>
        Fru<span>tas</span></h1>
    </div>
    <div className={styles.frutas_container}>
    <ul>
        {frutas.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.preco}</p>
            <Image src={item.image} alt={item.name} width={250} height={250} />
            
          </li>
        ))}
      </ul>
    </div>
</>
  );
}