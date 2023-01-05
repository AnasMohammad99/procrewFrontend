import { LocationCityOutlined, PaymentOutlined, Person2Outlined, SecurityOutlined } from '@mui/icons-material'
import { Radio } from 'antd'
import React from 'react'
import styled from 'styled-components'

export const Sidebar = ({status,setStatus}) => {
  return (
    <Wrapper>
        <CustomizedTitle>Settings</CustomizedTitle>
        <CustomizedButtonGroup
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <RadioButton  value="Account">
            <ButtonGroup>
              <IconWrapper><Person2Outlined /></IconWrapper><StatusLine>Account</StatusLine>
            </ButtonGroup>
            </RadioButton>
            <RadioButton value="Adress">
            <ButtonGroup>
              <IconWrapper><LocationCityOutlined /></IconWrapper><StatusLine>Adress</StatusLine>
            </ButtonGroup>
            </RadioButton>
            <RadioButton value="Payment">
            <ButtonGroup>
              <IconWrapper><PaymentOutlined /></IconWrapper><StatusLine>Payment</StatusLine>
            </ButtonGroup>
            </RadioButton>
            <RadioButton value="Security">
            <ButtonGroup>
              <IconWrapper><SecurityOutlined /></IconWrapper><StatusLine>Security</StatusLine>
            </ButtonGroup>
            </RadioButton>
          </CustomizedButtonGroup>
    </Wrapper>
  )
}
const CustomizedTitle = styled.p`
    margin-top: 0;
    font-size: 20px;
    
`
const Wrapper = styled.div`
  width: 30%;
`
const IconWrapper = styled.div`
    background-color: lightgray;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`
const StatusLine = styled.p`
  margin-left: 15px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 700;
  font-size: 16px;
`;
const ButtonGroup = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  :first-child{
    margin-left: 10px;
  }
`;

const CustomizedButtonGroup = styled(Radio.Group)`
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    z-index: 1;
    background: #d4eaff;

    font-weight: 500;
  }
  .ant-radio-button-wrapper {
    box-shadow: 0px 4px 10px rgba(168, 190, 206, 0.25);
  }
  display: flex;
  flex-direction: column;
  width: 100%;

`;
const RadioButton = styled(Radio.Button)`
  color: #828282;
  height: 4.5rem;
  margin-bottom: 1.5rem !important;
`;