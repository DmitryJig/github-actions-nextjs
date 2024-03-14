import { use } from "react";
import type { Metadata } from "next";
import CatalogItem from "@/components/catalog/CatalogItem";

export const metadata: Metadata = {
    title: "Каталог сантехники и электротоваров в Перми",
    description: "Страница каталога магазина по продаже сантехники, электротоваров, крепежа, замков",
  };

export default function CatalogPage(){
    const products = use(
        fetch(process.env.URL_PREFIX + '/api/v1/products', {
            next: { revalidate: 10 },
        })
        .then(response => {
            return response.json()})
    )
    return (
        <div>
            <h1>Каталог товаров</h1>
            { products.map((product: any) => (
                <CatalogItem key={product.id} product={product}/>
        )) }
        </div>
    )
}