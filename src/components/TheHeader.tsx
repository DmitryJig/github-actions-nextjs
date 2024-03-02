import Link from "next/link"
import Image from 'next/image'

const TheHeader = () => {
    return (
        <header className="py-4 container mx-auto">
            <Link className="px-4" href="/">
            <Image className="float-start"
                src="/logo.png"
                width={250}
                height={84}
                alt="САНТЕХЭЛЕКТРО"
            />
            </Link>
            <Link className="px-4" href="/catalog">Каталог товаров</Link>
            <Link className="px-4" href="/about">О компании</Link>
            <Link className="px-4" href="/contacts">Контакты</Link>
        </header>
    )
}
export {TheHeader};