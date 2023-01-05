import React from 'react'
import styled from 'styled-components'
import { Button, Card } from 'antd';

const { Meta } = Card;

const RestaurantCard = ({title,description,thumpnail, tags=[]}) => {
  return (
    <Wrapper>
        <Card hoverable  cover={<img alt="example" src={thumpnail} />}>
            <Meta title={title} description={description} />
            <ButtonWrapper>

            {
                tags.map((tag)=>{
                    return(
                        <CustomizedButton>{tag}</CustomizedButton>
                    )
                })
            }
            </ButtonWrapper>
        </Card>
    </Wrapper>
  )
}
const Wrapper = styled.div`
height: 100%;
min-width: 32%;
margin-bottom: 3%;
`
const ButtonWrapper = styled.div`
    margin-top: 10px;
    margin-left: -5px;
`
const CustomizedButton = styled(Button)`
    font-size: 14px;
    height: fit-content;
    width: fit-content;
    padding:0 5px;
    margin:0 3px;
    border-radius: 100px;
    background-color: lightgray;
`
export default RestaurantCard