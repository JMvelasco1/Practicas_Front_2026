"use client";
import { useList } from "@/context/productsContext";
import ProductsComponent from "../products/products";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./carrito.css";
import "../details/details.css"
import WrapperComponent from "../wrapper/wrapper";
const CarritoComponent = () => {
  const { list } = useList();
  const [empty, setEmpty] = useState<boolean>(true);
  const [loading,setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (list.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  }, [list]);

  return (

    <WrapperComponent setLoading={setLoading}>
      <div>
    <div className="detailsCard">
      {empty ? (
        <h1>No hay elementos en el carrito todavia</h1>
      ) : (
        list.map((e) => {
          return (
            <div key={e.id} className="carrito">
              <ProductsComponent products={e} />
            </div>
          );
        })
      )}

      <Link href={"/"}>
        <button>Home</button>
      </Link>
    </div>
    </div>
    </WrapperComponent>
  );
};

export default CarritoComponent;
