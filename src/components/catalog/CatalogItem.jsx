import Link from "next/link";

const CatalogItem = ({product}) => {
    return (
            <Link href={`/catalog/${product.id}`}>
            <div className="bg-gray-500 border-2 border-stone-300 rounded-lg hover:bg-gray-600 mt-3 p-3">
                {product.title}
                <p>Цена: {product.price} руб.</p>
            </div>
            </Link>
        
    )
}
export default CatalogItem;