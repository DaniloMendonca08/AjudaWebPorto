import styled from "styled-components"
import Lupa from "../../assets/LupaDePesquisa.svg"

export const StyledHeader = styled.header`
    background-color: #E2E2FF;
    width: 100%;
    padding-top: 3vh;

@media (min-width: 320px) {
    height: 6vh;
}

@media (min-width: 768px) {
    height: 9vh;
}


@media (min-width: 1024px) {
    height: 10vh;
}    
`

export const StyledDivHeader = styled.div`
    display: flex; 
    align-items: center; 
    margin-left: 32px;   

    @media (min-width: 320px) {
        margin-left: 10px;
        margin-top: 0;
    }

    @media (min-width: 768px) {
        margin-left: 14px;
    }

    @media (min-width: 1024px) {
        margin-left: 17px;
    }

` 

export const StyledInputHeader = styled.input`
    width: 400px;
    height: 40px;
    border-radius: 150px;
    background-image: url(${Lupa});
    background-position: 2%;
    background-repeat: no-repeat;
    border: 1px solid white;
    text-align: center;
    
${(props) =>
props.RemoverInput &&`
    display: none;
`
}

@media (min-width: 320px) {
    display: none;
}

@media (min-width: 768px) {
    display: block;
    height: 40px;
    margin-left: 30px;
}

@media (min-width: 1024px) {
    font-size: 18px;
    margin-left: 130px;
}
`

export const StyledImgPorto = styled.img`
    width: 100px;
    margin-left: 3vw;

@media (min-width: 320px) {
    width: 100px;
}

@media (min-width: 1024px) {
    width: 150px;
}

@media (min-width: 768px) {
    width: 130px;
}
`