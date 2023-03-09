import { createContext, ReactNode, useState } from "react";

export interface IProduct {
    id: string
    name: string
    imageUrl: string
    price: string
    numberPrice: number
    description: string
    defaultPriceId: string
}

interface CartContextData {
    cartItems: IProduct[]
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<IProduct[]>([])

    return (
        <CartContext.Provider value={{ cartItems }}>
            {children}
        </CartContext.Provider>
    )
}