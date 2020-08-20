import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0px;
    @media (max-width: 800px) {
        padding: 30px 0px;
    }
`
export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 800px;
    @media (max-width: 670px) {
        flex-direction: column;
        align-items: center;
    }
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 20%;
    min-width: 250px;
    height: 400px;
    margin: 10px 5px;
    background: url(${(props) => props.imgUrl}) no-repeat;
    background-size: 100% 100%;
    transform: ${props => props.primary ? 'translateY(50px)' : props.secondary ? 'translateY(-30px)' : 'none'};

    @media (max-width: 800px) {
        min-width: 210px;
        height: 350px;
        transform: ${props => props.primary ? 'translateY(30px)' : props.secondary ? 'translateY(-20px)' : 'none'};
    }
    @media (max-width: 670px) {
        transform: ${props => props.primary ? 'none' : props.secondary ? 'none' : 'none'};
        min-width: 280px;
        height: 400px;
    }
    @media (max-width: 320px) {
        min-width: 230px;
        height: 320px;
    }
`
