import Link from "next/link";
import Image from 'next/image'
import { HeaderContainer } from "./styles";
import logoImg from '../../assets/logo.svg'
import { Cart } from "../Cart";
import { useRouter } from "next/router";

export function Header() {
    const { pathname } = useRouter()

    const showCartButton = pathname !== '/success'

    return (
        <HeaderContainer>
            <Link href="/" prefetch={false}>
            <Image src={logoImg} alt="" />
            </Link>
            {showCartButton && <Cart />}
        </HeaderContainer>
    )
}