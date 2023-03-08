import Link from "next/link";
import Image from 'next/image'
import { HeaderContainer } from "./styles";
import logoImg from '../../assets/logo.svg'
import { Cart } from "../Cart";

export function Header() {
    return (
        <HeaderContainer>
            <Link href="/" prefetch={false}>
            <Image src={logoImg} alt="" />
            </Link>
            <Cart />
        </HeaderContainer>
    )
}