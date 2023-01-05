import { Avatar, Button, Checkbox, Divider, Form, Grid, Input } from 'antd'
import React, { Fragment } from 'react'
import styled from 'styled-components'

const Account = () => {
  return (
    <Wrapper>
    <CustomizedTitle>Account</CustomizedTitle>
        <CustomizedForm>
        <CustomizedTitle>Personal Info</CustomizedTitle>
        <AvatartWrapper>
            <Avatar size={100} style={{borderRadius:"10px"}}>Anas</Avatar>
            <Button style={{backgroundColor:"blue", color:"white"}}>Change</Button>
            <Button type='ghost' style={{border:"1px solid red", color:"red"}}>Remove</Button>
        </AvatartWrapper>
        <FieldsWrapper>
            <CustomizedInput placeholder='firstname' />
            <CustomizedInput placeholder='lastname' />
        </FieldsWrapper>
        <FieldsWrapper>
            <CustomizedInput placeholder='address' />
            <CustomizedInput type='number' placeholder='phone number' />
        </FieldsWrapper>
        <CustomizedTitle>Email notifications</CustomizedTitle>
        <CheckboxWrapper>
            <Checkbox>New deals</Checkbox>
            <Checkbox>New restaurants</Checkbox>
            <Checkbox>Order statuses</Checkbox>
            <Checkbox>Password changes</Checkbox>
            <Checkbox>Special offers</Checkbox>
            <Checkbox>Newsletter</Checkbox>
        </CheckboxWrapper>
        <Divider />
        <FormFooter>
            <Button type='ghost' style={{border:"1px solid red", color:"red"}}>Logout</Button>
            <ButtonGroup>
            <Button type='ghost' style={{border:"1px solid lightgray"}}>Discard</Button>
            <Button style={{backgroundColor:"blue", color:"white", marginLeft:"15px"}}>Save changes</Button>
            </ButtonGroup>
        </FormFooter>
        </CustomizedForm>
    </Wrapper>
  )
}
const CustomizedTitle = styled.p`
    margin-top: 0;
    font-size: 20px;

`
const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`
const CustomizedForm = styled(Form)`
    border: 1px solid lightgray;
    border-radius: 10px;
    padding:10px 20px;
`
const AvatartWrapper = styled.div`
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const FieldsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`
const CustomizedInput = styled(Input)`
    width: 49%;
`
const CheckboxWrapper = styled.div`

`
const ButtonGroup = styled.div``
const FormFooter = styled.footer`
display: flex;
justify-content: space-between;
`
export default Account