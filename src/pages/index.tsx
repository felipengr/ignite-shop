import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 8,
  border: 0,
  padding: '4px 8px'
})

export default function Home() {
  return (
    <Button>Enviar</Button>
  )
}
