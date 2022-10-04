import React from "react";
// styled components module
import styled from "styled-components";

// icons
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { searchAction } from "../../redux/action/search";

const Search = ({ size }) => {
  const dispatch = useDispatch();

  return (
    <SearchStyle size={size}>
      {/* <AiOutlineSearch size={25} style={{ marginRight: "10px" }} /> */}
      <InputSearch
        type="text"
        placeholder="جستجو..."
        onChange={(e) => dispatch(searchAction(e.target.value))}
      />
    </SearchStyle>
  );
};

const SearchStyle = styled.div`
  display: flex;
  position: relative;
  width: ${({ size }) => (size ? "40%" : "70%")};
  svg {
    position: absolute;
    z-index: 1;
    bottom: 5px;
    color: #8e9296;
    margin: 0px 10px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;
const InputSearch = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.border};
  position: relative;
  height: calc(2.25rem + 2px);
  padding: 0 1rem;
  border-radius: 5px;
  font-family: "IRAN";
  outline: none;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`;

export default Search;
