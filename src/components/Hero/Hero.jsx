"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./hero.module.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };

    // Set initial size
    handleResize();
    
    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Image
          src={isMobile ? "/2.jpg" : "/1.jpg"}
          alt="manisa koltuk yıkama"
          layout="fill"
          objectFit="cover"
        />
        <div className={`${styles.header} ${showContent ? styles.slideInLeft : ''}`}>
          <header>
            <h1 className={styles.head1}>Manisa Koltuk Yıkama</h1>
          </header>
        </div>
        
        <article>
          <p className={`${styles.p1} ${showContent ? styles.slideInRight : ''}`}>
            Profesyonel ekipman ve uzman kadromuzla Manisa'da koltuk yıkama hizmeti sunuyoruz. Yüksek kaliteli temizlik ürünleri kullanarak, koltuklarınızı derinlemesine temizliyor ve hijyenik bir hale getiriyoruz. Müşteri memnuniyetini önceliğimiz olarak belirliyor, her ihtiyaca yönelik özel çözümler sunuyoruz. Koltuklarınızın ilk günkü gibi görünmesi için güvenilir ve etkili bir hizmet sağlıyoruz. Siz de deneyin!
          </p>
        </article>
      </div>
    </>
  );
}
