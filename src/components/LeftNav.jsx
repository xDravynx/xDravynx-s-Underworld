import React from 'react';
import styled from 'styled-components';

const LeftNavContainer = styled.nav`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const NavItem = styled.li`
    width: 100%;   

`
const NavLink = styled.a`
    
    display: block;
    padding: 10px 14px;        color: #1d3557;
    text-decoration: none;
    border-radius: 4px;        font-weight: 500;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
            background-color: #e9ecef;
            color: #0077b6;
        }
    
    
`;

const LeftNav = ({ links = [] }) => {
    return (
        <LeftNavContainer>
            <NavList>
                {links.map((link, index) => (
                    <NavItem key={index}>
                        <a href={link.href}>{link.name}</a>
                    </NavItem>
                ))}

            </NavList>
        </LeftNavContainer>
    );
};

export default LeftNav;