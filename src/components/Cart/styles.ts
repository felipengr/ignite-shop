import { styled } from "../../styles";
import * as Dialog from '@radix-ui/react-dialog'

export const CartContent = styled(Dialog.Content, {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '30rem',
    background: '$gray800',
    padding: '3rem',
    paddingTop: '4.5rem',
    boxShadow: '-4px 0 30px rgba(0,0,0,0.8)',
    display: 'flex',
    flexDirection: 'column',

    h2: {
        fontWeight: 700,
        fontSize: '$lg',
        color: '$gray100',
        marginBottom: '2rem',
    },
})

export const CartClose = styled(Dialog.Close, {
    background: 'none',
    border: 'none',
    color: '$gray500',
    position: 'absolute',
    top: '1.75rem',
    right: '1.75rem',
    cursor: 'pointer',
})

export const CartProduct = styled('div', {
    width: '100%',
    display: 'flex',
    gap: '1.25rem',
    alignItems: 'center',
    height: '5.8125rem',
})

export const CartProductImage = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    height: '5.8125rem',
    width: '6.3125rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,

    img: {
        objectFit: 'cover',
    },
})

export const CartProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',

    p: {
        color: '$gray300',
        fontSize: '$md',
    },

    strong: {
        marginTop: 4,
        fontSize: '$md',
        fontWeight: 700,
    },

    button: {
        cursor: 'pointer',
        marginTop: 'auto',
        width: 'max-content',
        background: 'none',
        fontSize: '1rem',
        fontWeight: 700,
        border: 'none',
        color: '$green500',
    },
})