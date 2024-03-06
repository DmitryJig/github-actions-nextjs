import { Metadata } from "next";

type Props = {
    params: {
        id: string;
    };
};

async function getProduct(id: string) {
    const response = await fetch(process.env.URL_PREFIX + `/api/v1/products/${id}`, {
        next: {
            revalidate: 10
        }
    });
    return response.json();
};

export async function generateMetadata({ params: { id }}: Props): Promise <Metadata> {
    const product = await getProduct(id);
    return {
        title: product.title,
    };
}

export default async function ProductPage({ params: { id }}: Props) {
    const product = await getProduct(id);
    return (
      <div>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
      </div>
    );
  }