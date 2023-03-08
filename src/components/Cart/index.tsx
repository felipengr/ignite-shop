import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image';
import { X } from 'phosphor-react';
import { CartButton } from "../CartButton";
import {
    CartClose,
    CartContent,
    CartFinalization,
    CartProduct,
    CartProductDetails,
    CartProductImage,
    FinalizationDetails
} from './styles';

export function Cart() {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <CartButton />
            </Dialog.Trigger>
            <Dialog.Portal>
                <CartContent>
                    <CartClose>
                        <X size={24} weight='bold' />
                    </CartClose>
                    <h2>Sacola de compras</h2>
                    <section>
                        {/* <p>Parece que seu carrinho está vazio :(</p> */}
                        <CartProduct>
                            <CartProductImage>
                                <Image
                                    src="https://s3-alpha-sig.figma.com/img/fd95/f0b2/85d51884517403ad7e3fc5c12726f99a?Expires=1679270400&Signature=iXUqCWO0SoVqbojanUpoKuC12WczvoXLdIWQ0TWPBWlvfS8QJCiVRU17hkZwNqQBc-0cNoCkQaMMX2zTERSjfLjGoSHMK0I78AoqrnGhnEmf-s0q9xE3ARjHJyLcJgkCoIyWkihsLQRaxOAo1WNH7YLIlo~DgCDXvoLH2fA7r6uZYUHNaJJEUW0ygJSkyI9boK3jBdQk1YD5LNTqiaOjQIotYAKujlgMSulnJXlXcW5z4tQIhXu2b-eLHGeQSjNYK4ED4Z2bUN2X0DAlilhQ4EJ6QqZ5VqlHpnrVKkepKEq3Hb6TGKLDErzXwX9bvlMFeGuGLJl0rtxf4dYzvkEPcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    width={100}
                                    height={93}
                                    alt=""
                                />
                            </CartProductImage>
                            <CartProductDetails>
                                <p>Produto 1</p>
                                <strong>R$ 50,00</strong>
                                <button>Remover</button>
                            </CartProductDetails>
                        </CartProduct>
                    </section>
                    <CartFinalization>
                        <FinalizationDetails>
                            <div>
                                <span>Quantidade</span>
                                <p>2 itens</p>
                            </div>
                            <div>
                                <span>Valor total</span>
                                <p>R$ 100,00</p>
                            </div>
                        </FinalizationDetails>
                        <button>Finalizar compra</button>
                    </CartFinalization>
                </CartContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}