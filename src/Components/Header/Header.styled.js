import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Wraper = styled.header`
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGreySolid};
  margin: 0 auto;
  padding: 8px 40px;
`;

export const Logo = styled(Link)`
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 28px;
  text-decoration: none;

  & > span {
    &:nth-child(1) {
      color: #1c7ed6;
    }
    &:nth-child(2) {
      color: #1b1116;
    }
    &:nth-child(3) {
      color: #1c7ed6;
    }
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 30px;
  margin: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li``;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  border: none;
  font-weight: 600;
  color: ${(props) => props.theme.colors.purpleBlack};

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #1c7ed6;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    transform: scaleX(1);
  }
`;

export const Sidebar = styled.div`
  padding: 14px 4px;
  border: none;
  font-weight: 600;
  color: ${(props) => props.theme.colors.purpleBlack};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BurgerIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 10px;
  background-color: #fff;
  position: absolute;
  top: 60px;
  right: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const MobileMenuItem = styled.li`
  list-style: none;
`;
