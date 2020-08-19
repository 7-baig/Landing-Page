import React from 'react'
import { Link } from "gatsby"
import menuIcon from '../../images/menuIcon.svg'
import searchIcon from '../../images/searchIcon.svg'
import {
Container,
MenuIcon,
Title,
InputContainer,
Input,
SearchIcon,
SelectFieldContainer,
Select,
Option,
NavItem
} from './StyleHeader'

export const Header = () => (

    <Container>

        <MenuIcon src={menuIcon} />
        <Title>NEW VANTAGE</Title>
        <InputContainer>
            <Input type="search" placeholder="Search" />
            <SearchIcon src={searchIcon} />
        </InputContainer>
        <SelectFieldContainer>
            <Select primary>
                <Option>TO LET &nbsp;&nbsp;</Option>
                <Option>TO LET &nbsp;&nbsp;</Option>
                <Option>TO LET &nbsp;&nbsp;</Option>
            </Select>
            <Select>
                <Option>PROPERTY TYPE &nbsp;&nbsp;</Option>
                <Option>PROPERTY TYPE &nbsp;&nbsp;</Option>
                <Option>PROPERTY TYPE &nbsp;&nbsp;</Option>
            </Select>
            <Select>
                <Option>SUBURB &nbsp;&nbsp;</Option>
                <Option>SUBURB &nbsp;&nbsp;</Option>
                <Option>SUBURB &nbsp;&nbsp;</Option>
            </Select>
            <Link to="/" style={{textDecoration: 'none'}}>
                <NavItem>NEW POSTINGS</NavItem>
            </Link>
            <Link to="/" style={{textDecoration: 'none'}}>
                <NavItem primary>FIND</NavItem>
            </Link>
            
        </SelectFieldContainer>

    </Container>

)
