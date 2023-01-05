import styled from "styled-components";
import SearchBox from "./search-box";

const SearchBar = ({ buttonTitle, showModal }) => {
  return (
    <Search>
      <SearchBox />
    </Search>
  );
};

const Search = styled.div`
  
`;
export default SearchBar;
