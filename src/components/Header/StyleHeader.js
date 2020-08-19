import styled from 'styled-components'
// Main Container
export const Container = styled.div`
    background: #b7c0ca;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px;
    padding: 20px 0px;
    font-family: sans-serif;
    font-size: 10px;
    @media (max-width: 480px) {
        padding: 10px 0px;
        font-size: 9px;
    }    
`
// Menu icon
export const MenuIcon = styled.img`
    margin: 0px;
    padding: 0px;
    width: 30px;
    position: absolute;
    top: 40px;
    left: 20px;
    @media (max-width: 480px) {
        width: 15px;
        top: 30px;
        left: 20px;
    }    
`
// Title
export const Title = styled.h3`
    margin: 0px;
    padding: 0px;
    color: #ffffff;
    font-weight: 400;
    letter-spacing: 5px;
    margin: 30px 0px;
    font-size: 2.5em;
    @media (max-width: 480px) {
        margin: 15px 0px;
    }
`
// Input container
export const InputContainer = styled.div`
    border: 1px solid #ffffff;
    width: 50%;
    display: flex;
    @media (max-width: 600px) {
        width: 70%;   
    }
`
// Input
export const Input = styled.input`
    background: #b7c0ca;
    color: #ffffff;
    border: none;
    flex-grow: 1;
    padding: 8px 0px 8px 30px;
    &:focus {
        outline: none;
    }
    @media (max-width: 480px) {
        padding: 4px 0px 4px 15px;
    }
`
// Search icon
export const SearchIcon = styled.img`
    width: 30px;
    margin: 0px;
    padding: 8px 30px 8px 0px;
    flex: 0 1 auto;
    width: 50px;
    cursor: pointer;
    @media (max-width: 480px) {
        padding: 5px 15px 5px 0px;
        width: 30px;
    }
`
// Select Field Container
export const SelectFieldContainer = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px 0px;
    @media (max-width: 480px) {
        display: none;
    }
`
// select box
export const Select = styled.select`
    border: none;
    background: #b7c0ca;
    font-size: 1.1em;
    &:focus {
        outline: none;
    }
    cursor: pointer;
    color: ${props => props.primary ? '#000' : '#ffffff'};
    font-weight: ${props => props.primary ? '700' : '100'};
    letter-spacing: 1px
`
// options
export const Option = styled.option`
    background: #b7c0ca;
    padding-right: 5px;
`
// Nav Item
export const NavItem = styled.p`
    color: ${props => props.primary ? '#000' : '#ffffff'};
    font-weight: ${props => props.primary ? '700' : '100'};
    font-size: 1.1em;
    padding: 0px;
    margin: 0px;
    letter-spacing: 1px
`