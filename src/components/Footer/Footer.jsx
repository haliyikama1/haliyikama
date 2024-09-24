import styles from "./footer.module.css";
export default function Header(){
    return(
        <>
        <nav>
            <ul class={styles.container}>
                <li>Ekrem Koltuk Yıkama</li>
                <li>Manisa</li>
                <li>Tüm hakları gizlidir 2024.</li>
            </ul>
        </nav>
        </>
    )
}