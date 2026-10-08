"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Menu from "@/components/ui/Menu/menu";
import Footer from "@/components/layout/footer/footer";
import OrderPage from "@/components/layout/orderModal/orderModal";
import produtos from "@/data/produtos.json";

function StoreOrderContent() {
  const searchParams = useSearchParams();
  const productId = Number(searchParams.get("product"));
  const selectedColorIndex = Number(searchParams.get("color")) || 0;
  const product = produtos.find((item) => item.id === productId);

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <>
      <Menu />
      <OrderPage
        product={product}
        selectedColorIndex={selectedColorIndex}
      />
      <Footer />
    </>
  );
}

export default function StoreOrderPage() {
  return (
    <Suspense fallback={<p>Carregando produto...</p>}>
      <StoreOrderContent />
    </Suspense>
  );
}