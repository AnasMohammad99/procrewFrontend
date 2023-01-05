import React, { useState } from 'react'
import styled from 'styled-components'
import { Radio } from "antd";
import Offer from './Offer'
import { ReactComponent as PizzaIcon } from "../../../assets/icons/pizza.svg"
import { ReactComponent as VeganIcon } from "../../../assets/icons/broccoli.svg"
import { ReactComponent as BurgerIcon } from "../../../assets/icons/meat.svg"
import { ReactComponent as MeatIcon } from "../../../assets/icons/meat.svg"
import { ReactComponent as SushiIcon } from "../../../assets/icons/sushi.svg"
import { ReactComponent as CakeIcon } from "../../../assets/icons/cake.svg"
import Icecream from "../../../assets/imgs/icecream.png"
import  Burger from "../../../assets/imgs/burger.png"
import Cards from './cards';

export const LandingPage = () => {
  const [status, setStatus] = useState("All");
  return (
    <Wrapper>
      <OfferWrapper>
        <Offer bgColor={"#F3F4FF"} image={Icecream} title={"All Deserts"}  />
        <Offer bgColor={"#FFF3ED"} image={Burger} title={"Big Burger"}  />
      </OfferWrapper>
      <CategoryWrapper>
          <CustomizedButtonGroup
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <RadioButton value="All">
            <ButtonGroup>
              <PizzaIcon /><StatusLine>All</StatusLine>
            </ButtonGroup>
            </RadioButton>
            <RadioButton value="Meat">
            <ButtonGroup>
              <MeatIcon /><StatusLine>Meat</StatusLine>
            </ButtonGroup>
            </RadioButton>
            <RadioButton value="Pizza">
            <ButtonGroup>
              <PizzaIcon /><StatusLine>Pizza</StatusLine>
            </ButtonGroup>
            </RadioButton>
            <RadioButton value="Burger">
            <ButtonGroup>
              <BurgerIcon /><StatusLine>Burger</StatusLine>
            </ButtonGroup>
            </RadioButton>
            <RadioButton value="Vegan">
            <ButtonGroup>
              <VeganIcon /><StatusLine>Vegan</StatusLine>
            </ButtonGroup>
            </RadioButton>
            <RadioButton value="Sushi">
            <ButtonGroup>
              <SushiIcon /><StatusLine>Sushi</StatusLine>
            </ButtonGroup>
            </RadioButton>
            <RadioButton value="Cake">
            <ButtonGroup>
              <CakeIcon /><StatusLine>Cake</StatusLine>
            </ButtonGroup>
            </RadioButton>
          </CustomizedButtonGroup>
      </CategoryWrapper>
      <Cards />
    </Wrapper>
  )
}
const StatusLine = styled.p`
  margin: 0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 700;
  font-size: 16px;
`;
const Wrapper = styled.div`
  margin: 0 5%;
`
const OfferWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const ButtonGroup = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CategoryWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const CustomizedButtonGroup = styled(Radio.Group)`
    .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    z-index: 1;
    color: black;
    background: #d4eaff;

    font-weight: 500;
  }
  .ant-radio-button-wrapper {
    box-shadow: 0px 4px 10px rgba(168, 190, 206, 0.25);
  }
`;
const RadioButton = styled(Radio.Button)`
  height: 5rem;
  width: 10rem;
  color: #828282;
`;