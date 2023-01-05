import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as FoodDelivaryLogo } from "../../../assets/main.svg"
import HeaderNavbar from './navbar'
import SearchBar from './search-bar'
export const Header = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Link to={'/'}>
        <Logo>
          <FoodDelivaryLogo />
        </Logo>
        </Link>
        <SearchBar />
      </LeftWrapper>
      <RightWrapper>
        <HeaderNavbar />
      </RightWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 5%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  /* background-color: green; */
  justify-content: space-between;
`
const Logo = styled.div`
margin-right: 50px;
`
const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  /* background-color: red; */
`
const RightWrapper = styled.div`
`