import React from 'react'
import styled from 'styled-components'

const Offer = ({bgColor, image, title}) => {
  return (
    <Wrapper style={{backgroundColor:bgColor}}>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
        <CustomP bgColor={bgColor}>20% OFF</CustomP>
    </Wrapper>
  )
}
const Wrapper = styled.div`
width: 49%;
border-radius: 10px;
display: flex;
`
const CustomP = styled.p`
    font-size:50px;
    font-weight: 700;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`
export default Offer