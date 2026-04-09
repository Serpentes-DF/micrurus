"use client";
import { useState } from "react";
import Menu from "@/components/ui/Menu/menu";
import Title from "@/components/ui/Title/title";
import styles from "./store.module.css";
import Footer from "@/components/layout/footer/footer";
import ProductCard from "@/components/layout/ProductCard/productCard";
import OrderModal from "@/components/layout/orderModal/orderModal";
import produtos from "@/data/produtos.json";

export default function StorePage() {
  type Product = {
    id: number;
    nome: string;
    preco: number;
    imagens: string[];
    tipo: string;
    tamanho?: string[];
    cores?: string[];
  };

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);

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
                setSelectedProduct(produto);
                setSelectedColorIndex(colorIndex);
              }}
            />
          ))}
        </div>

        {selectedProduct && (
          <OrderModal
            product={selectedProduct}
            selectedColorIndex={selectedColorIndex}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
      <Footer />
    </>
  );
}
