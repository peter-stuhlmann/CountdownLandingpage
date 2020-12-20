import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export default function Footer() {
  return (
    <StyledFooter>
      <Copyright>
        &copy; 2020 <Link to="/">Peter R. Stuhlmann</Link>
      </Copyright>
      <Navigation>
        <NavLink to="/legal-notice">Legal notice</NavLink>
        <NavLink to="/privacy-policy">Privacy policy</NavLink>
      </Navigation>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;

  @media (max-width: 350px) {
    font-size: 0.7em;
  }
`;

const Copyright = styled.p`
  color: #b5b5b5;
  margin: 0;
  padding: 6px;

  a {
    color: #b5b5b5;
    text-decoration: none;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  a {
    color: #b5b5b5;
    padding: 6px 11px;
    text-decoration: none;
  }
`;
