"use client";
import { useParams } from "next/navigation";
import { Products } from "@/types/products";
import { useState, useEffect } from "react";
import { getProductDetails } from "@/lib/api/product";
import Link from "next/link";
import WrapperComponent from "../wrapper/wrapper";
import "./details.css";
import "../products/products.css"
import { useList } from "@/context/productsContext";

const DetailsComponent = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Products>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [image, setImage] = useState<number>(0);

  const {list,addToList,deleteFromList} = useList(); 
  useEffect(() => {
    const res = getProductDetails(Number(id))
      .then((e) => {
        setProduct(e);
      })
      .catch((e) => {
        setError(`Ha habido un error cargando los detalles: ${e}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);



  return (
    <>
      <WrapperComponent setLoading={setLoading}>
        <div>
          {!loading && product && (
            <div className="detailsCard">
              <h1>{product.title}</h1>
              <div className="flechasImagen">
                <button
                  className="flechaIzquierda"
                  onClick={() => {
                    setImage(image - 1);
                  }}
                >
                  ←
                </button>
                <img src={product.images[image]} alt={product.title} />
                <button
                  className="flechaDerecha"
                  onClick={() => {
                    setImage(image + 1);
                  }}
                >
                  →
                </button>
              </div>
              <p className="price">Acerca de este producto</p>
              <p>{product.description}</p>
              <p>From: {product.brand}</p>
              <p className="price">{product.price}$</p>
              <p>Stock:{product.availabilityStatus}</p>
              <p>Rating: {product.rating}★</p>
              <div className="ProductButtons">
               <button onClick={() => addToList(product)}>+</button>
              <button onClick={() => deleteFromList(product)}>-</button>
              </div>
              <Link href={`/`}>
        <button>Home</button>
        </Link>
            </div>
          )}
        </div>
      </WrapperComponent>
    </>
  );
};

export default DetailsComponent;
