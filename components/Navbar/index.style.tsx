import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const NavLink = styled.a`
  padding: 1rem;
  color: #333333;
  font-size: 0.95rem;
  transition: color 0.2s ease-in-out;
  :hover {
    color: #10a1bd;
  }
`;
