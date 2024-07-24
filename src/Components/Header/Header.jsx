import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Wraper,
  NavMenu,
  Logo,
  MenuList,
  MenuItem,
  StyledLink,
  Sidebar,
  BurgerIcon,
  MobileMenu,
  MobileMenuItem,
} from "./Header.styled";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Wraper>
      <NavMenu>
        <Logo to="/">
          <span>Fixed</span>
          <span>Tab</span>
        </Logo>
        <BurgerIcon onClick={toggleMenu}>
          <RxHamburgerMenu />
        </BurgerIcon>
        <MenuList>
          <MenuItem>
            <StyledLink to="/create">Create</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/table_v1">Table_V1</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink to="/table_v2">Table_V2</StyledLink>
          </MenuItem>
        </MenuList>
        <Sidebar>Sidebar</Sidebar>
      </NavMenu>
      {menuOpen && (
        <MobileMenu>
          <MobileMenuItem>
            <StyledLink to="/create" onClick={toggleMenu}>
              Create
            </StyledLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <StyledLink to="/table_v1" onClick={toggleMenu}>
              Table_V1
            </StyledLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <StyledLink to="/table_v2" onClick={toggleMenu}>
              Table_V2
            </StyledLink>
          </MobileMenuItem>
        </MobileMenu>
      )}
    </Wraper>
  );
}
