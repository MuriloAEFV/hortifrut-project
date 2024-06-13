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
          <li>
            <h2>{item.name}</h2>
            <p>{item.preco}</p>
            <img src={item.image}/>
            
          </li>
        ))}
      </ul>
    </div>
</>
  );
}