import styled from 'styled-components'

export const Container = styled.div`
    background: #b7c0ca;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 00px 0px;
    flex-grow: 1;
    @media (max-width: 600px) {
        flex-grow: 1;        
    };
    @media (max-width: 480px) {
        flex-grow: 6;
    }
`
export const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
`
export const Image = styled.img`
    z-index: 1;
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 600px) {
        width: 350px;
    }
    @media (max-width: 480px) {
        width: 300px;
    }
    @media (max-width: 320px) {
        width: 250px;
    }
`
export const Heading = styled.h1`
    z-index: 100;
    text-shadow: 3px 3px 7px #000;
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
    @media (max-width: 320px) {
        font-size: 30px;
    }
`