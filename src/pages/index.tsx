import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import Stripe from "stripe";
import { HomeContainer, Product, SliderContainer } from "../styles/pages/home";
import { stripe } from "../lib/stripe";
import useEmblaCarousel from "embla-carousel-react";
import { CartButton } from "../components/CartButton";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({products}: HomeProps) {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  })

  return (
    <>
      <Head>
        <title>Iginite Shop</title>
      </Head>
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <HomeContainer>
          <div className="embla" ref={emblaRef}>
            <SliderContainer className="embla__container container">
              {products.map(product => {
                return (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    prefetch={false}
                    passHref
                  >
                    <Product className="embla__slide">
                    <Image
                      src={product.imageUrl}
                      width={520}
                      height={480}
                      alt=""
                    />
                    <footer>
                      <div>
                        <strong>{product.name}</strong>
                        <span>{product.price}</span>
                      </div>
                      <CartButton color="green" size="large" />
                    </footer>
                  </Product>
                  </Link>
                )
              })}
            </SliderContainer>
          </div>
        </HomeContainer>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      url: product.url,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, //2 horas
  }
}