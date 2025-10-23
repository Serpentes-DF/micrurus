import Menu from '@/components/ui/Menu/menu'
import Title from '@/components/ui/Title/title'
import styles from "./store.module.css";
import Footer from '@/components/layout/footer/footer';



export default function StorePage() {
    return (
        <div className={styles.divStorePage}>
            <Menu />
            <Title title={"Comprem conosco"} />
            <iframe
                className={styles.iframeStore}
                src="https://docs.google.com/forms/d/e/1FAIpQLScYdZtOfhMc8P1dNFXX4XWPcMm8fuOCvh-TiQJzHLR-Ef-6_Q/viewform?embedded=true"
            >Carregando…</iframe>
            <Footer />
        </div>
    )
}

