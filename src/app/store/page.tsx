"use client";
import { useRouter } from "next/navigation";
import Menu from "@/components/ui/Menu/menu";
import Title from "@/components/ui/Title/title";
import styles from "./store.module.css";
import Footer from "@/components/layout/footer/footer";
import ProductCard from "@/components/layout/ProductCard/productCard";
import produtos from "@/data/produtos.json";

export default function StorePage() {
  const router = useRouter();

  return (
    <>
      <Menu />
      <Title title={"Comprem conosco"} />
      <div className={styles.divStorePage}>
        {/* <iframe
          className={styles.iframeStore}
          src="https://docs.google.com/forms/d/e/1FAIpQLScYdZtOfhMc8P1dNFXX4XWPcMm8fuOCvh-TiQJzHLR-Ef-6_Q/viewform?embedded=true"
        >
          Carregando…
        </iframe> */}

        <div className={styles.productsGrid}>
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              product={produto}
              onBuy={(colorIndex) => {
                router.push(`/store/order?product=${produto.id}&color=${colorIndex}`);
              }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
