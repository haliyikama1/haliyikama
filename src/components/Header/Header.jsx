'use client'
import { useEffect, useState } from "react";
import styles from "./header.module.css";
export default function Header(){
    const [active, setActive] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setActive(true);
            } else {
                setActive (false);
            }
        };
        
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll",handleScroll);
        }
    })
    return(
        <>
            <nav>
                <ul class={active ? `${styles.container} ${styles.active}` : styles.container}>
                <li><a href="/">Anasayfa</a></li>
                <li><a href="#hakkimizda">Hakkımızda</a></li>
                <li><a href="#iletisim">İletişim</a></li>
                </ul>
            </nav>
        </>
    )
}