import React from "react";

import styled from "styled-components";

function FooterNavLinks({ children }) {
  return <Flex>{children}</Flex>;
}
const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  min-width: 140px;
  margin-left: 80px;
  @media (max-width: 986px) {
    justify-content: center;
    align-items: center;
    margin-left: 0;
    margin-bottom: 54px;
  }
`;

export default FooterNavLinks;
