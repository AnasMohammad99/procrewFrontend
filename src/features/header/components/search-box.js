import { Form } from 'antd';
import { useState } from 'react'
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search.svg';

export const SearchBox = () => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
        <SearchBoxContainer>
         <Form onSubmit={handleSubmit}>
            <SearchBoxInner>

              <Input type="text" 
                placeholder='search'
                value={value}
                onChange={e => setValue(e.target.value)}
              />
              <SearchBoxIcon >
                  <SearchIcon />
              </SearchBoxIcon>
            </SearchBoxInner>
              
          </Form>
        </SearchBoxContainer>
  );
};
  const SearchBoxIcon = styled.span`
  display: flex;
  align-items: center;
  margin: 5px 0;
  `;
  const SearchBoxContainer = styled.div`
  padding: 1.5rem 0;
  `;
  const SearchBoxInner = styled.div`
  background-color: white;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 10px rgba(168, 190, 206, 0.25);
    width: 25rem;
  `;
  const Input = styled.input`
    color: ${props => props.inputColor || "palevioletred"};
    border: none;
    color: black;
    width: 90%;
    outline: 0;
  `;

export default SearchBox