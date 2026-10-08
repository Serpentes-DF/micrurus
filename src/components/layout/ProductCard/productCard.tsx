import { useState } from "react";
import Image from "next/image";
import styles from "./productCard.module.css";
import Button from "@/components/ui/button/button";

type Product = {
  id: number;
  nome: string;
  preco: number;
  imagens: string[];
  tipo: string;
  tamanho?: string[];
  cores?: string[];
};

type ProductCardProps = {
  product: Product;
  onBuy: (colorIndex: number) => void;
};

export default function ProductCard({ product, onBuy }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    product.cores && product.cores.length > 0 ? 0 : 0,
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.cores && product.cores.length > 0 ? product.cores[0] : "",
  );

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.imagens.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.imagens.length - 1 : prevIndex - 1,
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    // Muda a imagem para o índice da cor selecionada
    const colorIndex = product.cores?.indexOf(color) ?? 0;
    setCurrentImageIndex(colorIndex);
  };

  // Função para converter nomes de cores em valores hexadecimais
  const getColorValue = (colorName: string): string => {
    const colorMap: { [key: string]: string } = {
      marfim: "#f5f5dc",
      branco: "#ffffff",
      preto: "#000000",
      vermelho: "#dc2626",
      azul: "#2563eb",
      verde: "#16a34a",
      amarelo: "#eab308",
      rosa: "#ec4899",
      roxo: "#9333ea",
      cinza: "#6b7280",
      marrom: "#92400e",
      laranja: "#ea580c",
      bege: "#f5f5dc",
      vinho: "#7f1d1d",
      navy: "#1e3a8a",
      menta: "#10b981",
      "azul claro": "#3b82f6",
      "verde escuro": "#166534",
      "rosa claro": "#f9a8d4",
      "cinza claro": "#d1d5db",
    };
    return colorMap[colorName.toLowerCase()] || "#cccccc";
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.carousel}>
          <Image
            src={product.imagens[currentImageIndex]}
            alt={`${product.nome} - imagem ${currentImageIndex + 1}`}
            className={styles.image}
            width={300}
            height={300}
            priority
          />

          {product.imagens.length > 1 && (
            <>
              <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={prevImage}
                aria-label="Imagem anterior"
              >
                ‹
              </button>
              <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={nextImage}
                aria-label="Próxima imagem"
              >
                ›
              </button>

              <div className={styles.indicators}>
                {product.imagens.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.indicator} ${
                      index === currentImageIndex ? styles.active : ""
                    }`}
                    onClick={() => goToImage(index)}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.nome}</h3>
        <p className={styles.price}>R$ {product.preco.toFixed(2)}</p>
        {/* <p className={styles.type}>{product.tipo}</p> */}

        {/* <div className={styles.sizes}>
          <span className={styles.sizeLabel}>Tamanhos:</span>
          <div className={styles.sizeList}>
            {product.tamanho.map((size) => (
              <span key={size} className={styles.size}>
                {size}
              </span>
            ))}
          </div>
        </div> */}

        {product.cores && product.cores.length > 0 && (
          <div className={styles.colors}>
            <span className={styles.colorLabel}>Cores:</span>
            <div className={styles.colorList}>
              {product.cores.map((color) => (
                <button
                  key={color}
                  className={`${styles.colorOption} ${
                    selectedColor === color ? styles.colorSelected : ""
                  }`}
                  onClick={() => handleColorSelect(color)}
                  aria-label={`Selecionar cor ${color}`}
                  style={{ backgroundColor: getColorValue(color) }}
                  title={color}
                >
                  {selectedColor === color && (
                    <span className={styles.checkmark}>✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        <Button
          onClick={() => {
            const colorIndex = product.cores?.indexOf(selectedColor) ?? 0;
            onBuy(colorIndex);
          }}
          className={styles.buyButton}
        >
          Comprar
        </Button>
      </div>
    </div>
  );
}
