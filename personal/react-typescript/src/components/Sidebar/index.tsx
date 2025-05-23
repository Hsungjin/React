import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.aside`
  background-color: #f2f2f2;
  padding: 20px;
`;

const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 10px;
`;

const MenuLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #4285f4;
  }

  &.active {
    font-weight: bold;
    color: #4285f4;
  }
`;

const Info = styled.div`
  margin-top: 30px;
`;

const InfoTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  font-size: 16px;
`;

export const Sidebar = () => {
  return (
    <Container>
      <Menu>
        <MenuItem>
          <MenuLink to='/'>Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/about'>About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/example1'>Services</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/example2'>Contact</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/blog-posts'>Blog Posts</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/photo'>Photo</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/todo-list'>Todo</MenuLink>
        </MenuItem>
      </Menu>
      <Info>
        <InfoTitle>Follow Us</InfoTitle>
        <InfoText>Stay connected with us</InfoText>
      </Info>
    </Container>
  );
};
