"use client";
import { getAllProducts} from "@/lib/api/product";
import { Products } from "@/types";
import { useState, useEffect } from "react";
import ProductsComponent from "./components/products/products";
import { useList } from "@/context/productsContext";
import Link from "next/link";
import WrapperComponent from "./components/wrapper/wrapper";

export default function Home() {

  const [name, setName] = useState<string>("");
  const [finalName, setFinalName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Products[]>([]);
  const [error, setError] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const fetchProducts = () => {
    setLoading(true);
    const res = getAllProducts()
      .then((e) => {
        setProducts(e);
      })
      .catch((e) => {
        setError(`Ha habido un error: ${e}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const searchProducts = (name: string) => {
  
 if(name=== "" || !name || name=== null){
    fetchProducts();
 }else{
   const buscador = products.filter((x=>{return x.title.match(name)}));
  setProducts(buscador);
 }
    
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    searchProducts(finalName);
  }, [finalName]);

  const { countProductsFromList, list } = useList();

  useEffect(() => {
    setCount(countProductsFromList(list));
  }, [list]);


  return (
    <>
      <WrapperComponent setLoading={setLoading}>
        {error ? (<h1>{error}</h1>):
        <>
        <div>
          <div className="search">
            <input
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
              value={name}
              placeholder={"Introduce un producto"}
            />
            <button
              onClick={() => {
                setFinalName(name);
              }}
            >
              🔍
            </button>
            <Link href={`/carrito`}>
              {" "}
              <button>Carrito: {count}</button>
            </Link>
          </div>
        </div>
        <div className="home">
          {loading && <h3>Loading...</h3>}
          {!loading &&
            products &&
            products.map((e: Products) => {
              return (
                <div key={e.id}>
                  <ProductsComponent products={e} />
                </div>
              );
            })}
        </div>
        </>
        }
        
      </WrapperComponent>
    </>
  );
}
