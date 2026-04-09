import { useState } from "react";
import Image from "next/image";
import styles from "./orderModal.module.css";

type Product = {
  id: number;
  nome: string;
  preco: number;
  imagens: string[];
  tipo: string;
  tamanho?: string[];
  cores?: string[];
};

type OrderForm = {
  nome: string;
  telefone: string;
  endereco: string;
  tamanho: string;
  quantidade: number;
};

type OrderModalProps = {
  product: Product;
  selectedColorIndex: number;
  onClose: () => void;
};

type FormErrors = {
  nome?: string;
  telefone?: string;
  endereco?: string;
  quantidade?: string;
  tamanho?: string;
};

export default function OrderModal({
  product,
  selectedColorIndex,
  onClose,
}: OrderModalProps) {
  const [currentImageIndex, setCurrentImageIndex] =
    useState(selectedColorIndex);
  const [form, setForm] = useState<OrderForm>({
    nome: "",
    telefone: "",
    endereco: "",
    tamanho: "",
    quantidade: 1,
  });

  const [errors, setErrors] = useState<FormErrors>({});

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

  const goToColor = (colorIndex: number) => {
    setCurrentImageIndex(colorIndex);
  };

  const getColorValue = (colorName: string): string => {
    const colorMap: { [key: string]: string } = {
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

  const validateNome = (value: string): string | undefined => {
    if (!value.trim()) {
      return "Nome é obrigatório";
    }
    if (value.trim().length < 3) {
      return "Nome deve ter no mínimo 3 caracteres";
    }
    if (!/^[a-záàâãéèêíïóôõöúçñ\s]+$/i.test(value)) {
      return "Nome deve conter apenas letras";
    }
    return undefined;
  };

  const validateTelefone = (value: string): string | undefined => {
    if (!value.trim()) {
      return "Telefone é obrigatório";
    }
    const phoneNumbers = value.replace(/\D/g, "");
    if (phoneNumbers.length < 10) {
      return "Telefone deve ter no mínimo 10 dígitos";
    }
    if (phoneNumbers.length > 11) {
      return "Telefone deve ter no máximo 11 dígitos";
    }
    return undefined;
  };

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[0-9]/g, "");
    setForm({ ...form, nome: value });

    const error = validateNome(value);
    setErrors({ ...errors, nome: error });
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({ ...form, telefone: value });

    const error = validateTelefone(value);
    setErrors({ ...errors, telefone: error });
  };

  const handleQuantidadeChange = (value: number) => {
    const quantidade = value < 1 ? 1 : value;
    setForm({ ...form, quantidade });
    if (errors.quantidade) {
      setErrors({ ...errors, quantidade: undefined });
    }
  };

  const decrementQuantidade = () => {
    handleQuantidadeChange(form.quantidade - 1);
  };

  const incrementQuantidade = () => {
    handleQuantidadeChange(form.quantidade + 1);
  };

  const handleSubmit = () => {
    const newErrors: Partial<FormErrors> = {};

    const nomeError = validateNome(form.nome);
    if (nomeError) newErrors.nome = nomeError;

    const telefoneError = validateTelefone(form.telefone);
    if (telefoneError) newErrors.telefone = telefoneError;

    if (!form.endereco.trim()) {
      newErrors.endereco = "Endereço é obrigatório";
    }

    if (!form.tamanho) {
      newErrors.tamanho = "Tamanho é obrigatório";
    }

    if (form.quantidade < 1) {
      newErrors.quantidade = "A quantidade deve ser pelo menos 1";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const message = `
Olá! 😊 Gostaria de fazer um pedido:

🛒 *NOVO PEDIDO*

📦 *Produto*
- Nome: ${product.nome}
- Tamanho/Opção: ${form.tamanho}
- Quantidade: ${form.quantidade}
- Preço unitário: R$ ${product.preco.toFixed(2)}
- Total: R$ ${(product.preco * form.quantidade).toFixed(2)}

👤 *Cliente*
- Nome: ${form.nome}
- Telefone: ${form.telefone}

📍 *Entrega*
- Endereço: ${form.endereco}

🚚 *Frete* 
- Será calculado após o envio deste pedido.

Aguardo confirmação do pedido. Obrigado! 🙌
    `;
    // ADD NÚMERO
    const phoneNumber = "5561999999";

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");

    window.open(url, "_blank");
  };

  return (
    <div className={styles.MainOrderModal}>
      <div className={styles.modal}>
        <h2 className={styles.title}>{product.nome}</h2>

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
                      onClick={() => goToColor(index)}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {product.cores && product.cores.length > 0 && (
          <div className={styles.colors}>
            <span className={styles.colorLabel}>Cores:</span>
            <div className={styles.colorList}>
              {product.cores.map((color, index) => (
                <button
                  key={color}
                  className={`${styles.colorOption} ${
                    currentImageIndex === index ? styles.colorSelected : ""
                  }`}
                  onClick={() => goToColor(index)}
                  aria-label={`Selecionar cor ${color}`}
                  style={{ backgroundColor: getColorValue(color) }}
                  title={color}
                >
                  {currentImageIndex === index && (
                    <span className={styles.checkmark}>✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        <form className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Nome</label>
            <input
              className={`${styles.input} ${errors.nome ? styles.inputError : ""}`}
              placeholder="Digite seu nome completo"
              value={form.nome}
              onChange={handleNomeChange}
            />
            {errors.nome && (
              <span className={styles.errorMessage}>{errors.nome}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Telefone</label>
            <input
              className={`${styles.input} ${errors.telefone ? styles.inputError : ""}`}
              placeholder="(61) 99999-9999"
              value={form.telefone}
              onChange={handleTelefoneChange}
            />
            {errors.telefone && (
              <span className={styles.errorMessage}>{errors.telefone}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Endereço</label>
            <input
              className={`${styles.input} ${errors.endereco ? styles.inputError : ""}`}
              placeholder="Rua, número, complemento"
              value={form.endereco}
              onChange={(e) => setForm({ ...form, endereco: e.target.value })}
            />
            {errors.endereco && (
              <span className={styles.errorMessage}>{errors.endereco}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Tamanho</label>
            <select
              className={`${styles.select} ${errors.tamanho ? styles.inputError : ""}`}
              value={form.tamanho}
              onChange={(e) => setForm({ ...form, tamanho: e.target.value })}
            >
              <option value="">Escolha uma opção</option>
              {Array.isArray(product.tamanho) &&
                product.tamanho.map((opt: string) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
            </select>
            {errors.tamanho && (
              <span className={styles.errorMessage}>{errors.tamanho}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Quantidade</label>
            <div className={styles.quantityControl}>
              <button
                type="button"
                className={styles.quantityButton}
                onClick={decrementQuantidade}
                aria-label="Diminuir quantidade"
              >
                −
              </button>
              <span className={styles.quantityValue}>{form.quantidade}</span>
              <button
                type="button"
                className={styles.quantityButton}
                onClick={incrementQuantidade}
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>
            {errors.quantidade && (
              <span className={styles.errorMessage}>{errors.quantidade}</span>
            )}
          </div>

          <div className={styles.buttonContainer}>
            <button
              type="button"
              className={styles.submitButton}
              onClick={handleSubmit}
            >
              Enviar Pedido
            </button>
            <button
              type="button"
              className={styles.closeButton}
              onClick={onClose}
            >
              Fechar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
