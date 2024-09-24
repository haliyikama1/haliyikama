"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

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
      <Head>
        <title>Manisa Koltuk Yıkama | Profesyonel Temizlik Hizmeti</title>
        <meta name="description" content="Manisa&apos;da profesyonel koltuk yıkama hizmeti. Uzman kadro ve kaliteli ekipmanlarla koltuklarınızı ilk günkü haline getiriyoruz." />
        <meta name="keywords" content="Manisa koltuk yıkama, hijyenik koltuk temizliği" />
        <link rel="canonical" href="https://www.ekremkoltukyikama.com.tr/" />
      </Head>

      <main>
        <div className={styles.container}>
          <Image
            src={isMobile ? "/2.jpg" : "/1.jpg"}
            alt="Manisa koltuk yıkama hizmeti"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className={`${styles.header} ${showContent ? styles.slideInLeft : ""}`}>
            <header>
              <h1 className={styles.head1}>Manisa Koltuk Yıkama</h1>
            </header>
          </div>

          <article>
            <p className={`${styles.p1} ${showContent ? styles.slideInRight : ""}`}>
              Profesyonel ekipman ve uzman kadromuzla Manisa&apos;da koltuk yıkama hizmeti sunuyoruz. Yüksek kaliteli temizlik ürünleri kullanarak, koltuklarınızı derinlemesine temizliyor ve hijyenik bir hale getiriyoruz. Müşteri memnuniyetini önceliğimiz olarak belirliyor, her ihtiyaca yönelik özel çözümler sunuyoruz. Koltuklarınızın ilk günkü gibi görünmesi için güvenilir ve etkili bir hizmet sağlıyoruz. Siz de deneyin!
            </p>
          </article>
        </div>

        <section className={styles.contentContainer} id="hakkimizda">
          <div className={styles.h21}>
            <h2>Manisa Koltuk Yıkama Hizmet Detayları</h2>
          </div>
          <div className={styles.h21i}>
            <Image 
              src="/koltuk-yikama-manisa.jpg"
              layout="fill"
              objectFit="cover"
              alt="Manisa&apos;da profesyonel koltuk yıkama hizmeti" 
            />
          </div>
          <div className={styles.h21c}>
            <p>Manisa&apos;da sunduğumuz koltuk yıkama hizmetleri, en son teknoloji ve çevre dostu ürünlerle gerçekleştirilmektedir. Uzman ekibimiz, her türlü kumaş ve dokuya uygun özel temizleme teknikleri kullanarak, koltuklarınızın ömrünü uzatır ve sağlıklı bir yaşam alanı oluşturmanıza yardımcı olur.</p>
          </div>



          <div className={styles.h21}>
            <h2>Koltuk Yıkama Neden Önemli?</h2>
          </div>
          <div className={styles.h21i}>
            <Image 
              src="/3.jpg"
              layout="fill"
              objectFit="cover"
              alt="Koltuk yıkama Manisa" 
            />
          </div>
          <div className={styles.h21c}>
            <p>Koltuk yıkama hizmeti, ev ve işyerlerinde kullanılan koltukların düzenli olarak temizlenmesini sağlar. Bu hizmet, sağlık, hijyen ve görünüm açısından oldukça önemlidir:</p>
  <ul>
    <li><strong>Sağlık</strong>: Koltuklarda zamanla birikebilen toz, deri, döküntüler ve diğer kirleticiler sağlık sorunlarına neden olabilir. Koltuk yıkama, bu tür birikintileri temizleyerek astım, alerjiler ve diğer solunum problemlerinin önlenmesine yardımcı olur.</li>
    <li><strong>Hijyen</strong>: Düzenli koltuk yıkaması, bakterilerin, virüslerin ve diğer mikroorganizmaların koltuk üzerinde çoğalmasını önler. Bu, daha sağlıklı ve hijyenik bir ev ya da iş ortamı sağlar.</li>
    <li><strong>Görünüm</strong>: Temiz ve bakımlı görünen koltuklar, mekanın genel görünümünü de güzelleştirir. Sık yıkanan koltuklar daha iyi bir estetik sunarak mekanın daha modern ve profesyonel bir görünüme kavuşmasına yardımcı olur.</li>
  </ul>
  
          </div>


          <div className={styles.h31}>
            <h2>Neden Bizi Tercih Etmelisiniz?</h2>
          </div>
          <div className={styles.h31i}>
            <Image 
              src="/4.jpg"
              layout="fill"
              objectFit="cover"
              alt="Manisa koltuk yıkama uzman ekibi" 
            />
          </div>
          <div className={styles.h31c}>
            <p><b>Koltuk yıkama hizmeti alırken bizleri tercih etmek için oldukça fazla sebebiniz var. Bu sebeplerden bazılarını sizler için maddeler halinde derledik:</b></p>
            <ul>
              <li>Deneyimli ve profesyonel ekip</li>
              <li>Hızlı ve etkili temizlik</li>
              <li>Uygun fiyat garantisi</li>
              <li>Çevre dostu ürünler</li>
              <li>Müşteri memnuniyeti odaklı hizmet</li>
            </ul>
          </div>
          
          <div className={styles.h31}>
            <h2>Manisa Koltuk Yıkama Fiyatlandırma</h2>
          </div>
          <div className={styles.h31i}>
            <Image 
              src="/5.jpg"
              layout="fill"
              objectFit="cover"
              alt="Koltuk yıkama" 
            />
          </div>
          <div className={styles.h31c}>
        
  <p>Koltuk yıkama hizmetinin fiyatı, koltukların adedi, boyutu ve kullanılan yöntemlere göre değişkenlik gösterir. Daha büyük koltuklar veya daha yoğun kirlenmişlerin temizlenmesi daha yüksek bir ücret gerektirebilir. Ayrıca koltukların koltuk takımı halinde veya tek tek yıkatılması da fiyatlandırmayı etkiler.</p>
  <p>Biz, her bir müşterimizin ihtiyacına uygun, ekonomik ve kaliteli bir koltuk yıkama hizmeti sunmayı hedefliyoruz. Fiyatlarımız hakkında daha detaylı bilgi için lütfen bize ulaşın</p>
          </div>
          
          <div className={styles.h31} id="iletisim">
            <h3>Manisa Koltuk Yıkama İletişim Bilgileri</h3>
            <br />
            <p><b>Hemen <span style={{color: "red"}}><a href="tel:+9055533216882">buraya tıklayarak</a></span> arama yapabilir ve Manisa koltuk yıkama randevunuzu oluşturabilirsiniz.</b></p>
            <br />
            <p><b>Ya da <span style={{color: "red"}}><a href="https://wa.me/+9055533216882">buraya tıklayarak</a></span> WhatsApp üzerinden iletişime geçebilirsiniz.</b></p>
          </div>
        </section>
      </main>
    </>
  );
}
