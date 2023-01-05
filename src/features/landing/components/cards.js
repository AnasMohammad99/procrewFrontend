import React from 'react'
import styled from 'styled-components'
import RestaurantCard from './card'
import resphoto from "../../../assets/imgs/res-card.png"
const Cards = () => {
  return (
    <Wrapper>
        <RestaurantCard title={'title'} tags={['meat','burger','pizza']} description={'we serve fastfood'} thumpnail={resphoto} />
        <RestaurantCard title={'title'} tags={['meat']} description={'we serve fastfood'} thumpnail={resphoto}  />
        <RestaurantCard title={'title'} tags={['burger']} description={'we serve fastfood'} thumpnail={resphoto}  />
        <RestaurantCard title={'title'} tags={['pizza','sushi']} description={'we serve fastfood'} thumpnail={resphoto}  />
        <RestaurantCard title={'title'} tags={['vegan']} description={'we serve vegetables'} thumpnail={resphoto}  />
        <RestaurantCard title={'title'} tags={['cake']} description={'we serve cake'} thumpnail={resphoto}  />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-top: 3rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
export default Cards