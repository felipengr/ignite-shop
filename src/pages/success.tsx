import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Product() {
    return (
        <SuccessContainer>
            <h1>Compre efetuada!</h1>
            <ImageContainer>

            </ImageContainer>
            <p>
               Uhuul <strong>Felipe Nogueira</strong>, sua
               <strong> Camiseta Beyond the Limits</strong> já está a caminho 
               da sua casa.
            </p>
            <Link href="/">
                Voltar ao catálogo
            </Link>
        </SuccessContainer>
    )
}