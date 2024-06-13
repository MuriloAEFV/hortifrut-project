import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/Navbar.module.css'

export default function Navbar() {

return (
    <nav className={styles.navbar}>
    <div className={styles.logo}>
        <Image src="/images/arigato.png"
        width={100}
        height={100}
        alt="HortiFruit"
        />
        <h1>Arigato HortiFruit</h1>
    </div>
    <ul className={styles.link_items}>
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/about">Sobre</Link>
        </li>
    </ul>
    </nav>
    );
}
