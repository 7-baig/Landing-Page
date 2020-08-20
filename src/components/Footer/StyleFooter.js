import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
`
export const Slash = styled.img`
    width: 50px;
    margin: 0;
    padding: 0;
    align-self: center;
    transform: translateY(30px);
    @media (max-width: 480px) {
        width: 30px;
        transform: translateY(15px);
    };
`