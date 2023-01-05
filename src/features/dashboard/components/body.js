import { Form, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Account from '../account/account'

export const Body = () => {
  return (
    <Wrapper>
        <Account />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-left: 1.8rem;
  width: 100%;
`
