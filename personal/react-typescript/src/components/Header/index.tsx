import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.header`
  background-color: #4285f4;
  color: #fff;
  padding: 20px;
`;

const Logo = styled.img`
  width: 150px;
`;

const Nav = styled.nav`
  margin-top: 10px;
`;

const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Logo src='https://placehold.co/150' alt='Logo' />
      <Nav>
        <StyledNavLink to='/'>Home</StyledNavLink>
        <StyledNavLink to='/about'>About</StyledNavLink>
        <StyledNavLink to='/example1'>Services</StyledNavLink>
        <StyledNavLink to='/example2'>Contact</StyledNavLink>
      </Nav>
    </Container>
  );
};
