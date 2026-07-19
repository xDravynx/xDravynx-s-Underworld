  import React from "react";
  import styled from "styled-components";
  import { Link } from "react-router"
  import { FaSearch, FaUserCircle, FaCog } from "react-icons/fa";
  import MyAvatar from './MyAvatar'


  const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #111;
    color: #d1c2a5
    padding: 10px 24px;
    height: 60px;
    border-bottom: 2px solid #8a1c1c
    box-shadow: 0 2px 4px rgba(138, 28, 28, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-sizing: border-box;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      padding: 12px 16px;
      gap: 12px;
    }
  `;

  const Logo = styled.h1`
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 1.5px;
      margin: 0;
      white-space: nowrap;
      color: #e6d3b3;
      text-shadow: 0 0 6px rgba(138, 28, 28, 0.6), 2px 2px 2px #000
      text-transform: uppercase;

      @media (max-width: 480px) {
      font-size: 1.25rem}
  `;

  const SearchBox = styled.div`
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.8);
    border: 1px solid #4a3b32;
    border-radius: 4px;
    width: 100%;
    max-width: 420px;
    padding: 0 14px;
    height: 36px;
    transition: background-color 0.3s ease-in-out;
    box-sizing: border-box;

    &:focus-within {
      background-color: rgba(30, 10, 10, 0.9);
      border-color: #b32424;
      box-shadow: 0 0 8px rgba(179, 36, 36, 0.5);
    }

    @media (max-width: 768px) {
      order: 3;
      max-width: 100%
      }
  `;

  const SearchInput = styled.input`
    border: none;
    background: transparent;
    color: #e6d3b3;
    margin-left: 10px;
    width: 100%;
    font-size: 1rem;

      &:focus {
      outline: none;
    }

    &::placeholder {
      color: #6e5e53;;
    }
  `;


  const IconGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
  `;

  const IconButton = styled.button`
    background: none;
    border: none;
    color: #a39274;
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    transition: opacity 0.3s;

    &:hover {
      color: #ff3333; 
      filter: drop-shadow(0 0 4px rgba(255,51,51,0.6));
    }
  `;

  const AvatarLink =styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    
    &:hover{
      filter: drop-shadow(0 0 4px rgba(255, 51, 51, 0.6));
      }
    `;



  const Header = ({ logoText, searchPlaceholder, avatarUrl, searchQuery, onSearchChange }) => {
      return (
          <HeaderWrapper>
              <Logo>{logoText}</Logo>

              <SearchBox>
                  <FaSearch color="#6e5e53" />

                  <SearchInput 
                    type="text" 
                    placeholder={searchPlaceholder}
                    value={searchQuery}
                    onChange={onSearchChange}  
                  />
              </SearchBox>

              <IconGroup>

                <AvatarLink to="/Settings">

                  <IconButton aria-label="Setting">
                      <FaCog />
                  </IconButton>

                  {avatarUrl ? (
                    <MyAvatar AvatarIcon={avatarUrl} />
                  ) : (
                    <IconButton aria-label="Profile">
                      <FaUserCircle size="1.5rem"/>
                    </IconButton>
                  )}
                </AvatarLink>
              </IconGroup>
          </HeaderWrapper>
      );
  }

  export default Header;