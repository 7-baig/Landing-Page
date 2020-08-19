import styled from 'styled-components'

export const Container = styled.div`
    background: #b7c0ca;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    flex-grow: 1;
    @media (max-width: 600px) {
        flex-grow: 4;        
    };
    @media (max-width: 480px) {
        flex-grow: 6;
    }
`
export const HeadingContainer = styled.div`
    display: flex;
`
export const Heading = styled.h1`
    font-size: 70px;
    color: #ffffff;
    margin: 0px;
    padding: 0px;
    margin: ${props => props.primary ? '40px 5px 0px 5px' : '0px 5px 0px 5px'};

    @media (max-width: 600px) {
        font-size: 50px;
    }
    @media (max-width: 480px) {
        font-size: 35px;
        margin: ${props => props.primary ? '30px 3px 0px 3px' : '0px 3px 0px 3px'};
    }
`