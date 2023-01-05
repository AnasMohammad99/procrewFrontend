import React, { useState } from 'react'
import styled from 'styled-components'
import { Body, Sidebar } from '../features/dashboard/User'

export const SellerLayout = () => {
  const [status, setStatus] = useState("Account");
  return (
    <Wrapper>
      <Sidebar status={status} setStatus={setStatus} />
      <Body />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin: 0 5%;
  display: flex;
`