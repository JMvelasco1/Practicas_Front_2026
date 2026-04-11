"use client";

import { Products } from "@/types/products";
import Link from "next/link";
import "./products.css";
import { useList } from "@/context/productsContext";

const ProductsComponent = (params: { products: Products }) => {
  const products = params.products;

  const { addToList, deleteFromList, list, isInList } = useList();

  return (
    <div className="ProductCard">
      <h1>{products.title}</h1>
      <img src={products.images[0]} alt={products.title} />
      <p className="price">{products?.price}$</p>
      <p>Category: {products.category}</p>
      {isInList(products.id, list) ? (
        <p>Está en el carrito</p>
      ) : (
        <p>No está en el carrito</p>
      )}
      <div className="ProductButtons">
        <button onClick={() => addToList(products)}>+</button>
        <button onClick={() => deleteFromList(products)}>-</button>
      </div>
      <Link href={`/products/${products.id}`}>
        <button>Ver detalles</button>
      </Link>
    </div>
  );
};

export default ProductsComponent;
