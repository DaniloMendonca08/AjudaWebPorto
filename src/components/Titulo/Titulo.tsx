import { StyledH1 } from "./Titulo.style"

interface TituloProps {
    children: React.ReactNode
}

export const Titulo = ({children}: TituloProps) => {
    return (
        <StyledH1>{children}</StyledH1>
    )
}