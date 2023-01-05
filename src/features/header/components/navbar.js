
import { Avatar, Divider  } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { ReactComponent as ShoppingBag } from '../../../assets/icons/shopping-bag.svg';
const HeaderNavbar = () => {
  return (
    <Wrapper>
      <Options>
          <Option>
            <Link to={"#"}>
              Restaurants
            </Link>
          </Option>
          <Option>
          <Link to={"#"}>
            Cart
          </Link>
          </Option>
          <Divider type='vertical' style={{height:"30px"}} />
          <Option>
          <Link to={"#"}>
            My Orders
          </Link>
          </Option>
      </Options>
      <Link to={"#"}>
      <NotificationWrapper>
          <ShoppingBag />
      </NotificationWrapper>
      </Link>
      <Link to={"/my-profile"}>
          <Avatar>A</Avatar>
      </Link>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  height: 4.5rem;
  display: flex;
  align-items: center;
`
const Options = styled.ul`
  display: flex;
  list-style: none;
`
const Option = styled.li`
margin: 0 10px;
`
const NotificationWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #F3F4FF;
  border-radius: 10px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export default HeaderNavbar