import { use } from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Каталог сантехники и электротоваров в Перми",
    description: "Страница каталога магазина по продаже сантехники, электротоваров, крепежа, замков",
  };

export default function CatalogPage(){
    const products = use(
        fetch(process.env.URL_PREFIX + '/api/v1/products', {
            // fetch(`http://82.147.71.19/app/api/v1/products`, {
            next: { revalidate: 180 },
        })
        .then(response => response.json())
    )
    return (
        <div>
            <h1>Каталог товаров</h1>
            { products.map((product: any) => (
            <li key={product.id}>
                <Link href={`/catalog/${product.id}`}>
                {product.title}
                </Link>
            </li>
        )) }
        </div>
    )
}