import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const NavigationBar = styled.nav`
  background-color: #f8f8f8;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-size: 1.5em;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const CartLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const IconPlaceholder = styled.span`
  font-size: 1.2em;
`;

const LogoutButton = styled.button`
  background-color: transparent;
  color: #333;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  &:hover {
    color: #007bff;
  }
`;

function Navbar({ cartItemCount }) {
  const navigate = useNavigate(); // Get the navigate function

  const handleLogout = () => {
    // Add your actual logout logic here (e.g., clearing user session, tokens)
    console.log('Logging out...');
    // After successful logout (or immediately for this example), navigate to the login page
    navigate('/login');
  };

  return (
    <NavigationBar>
      <Logo to="/">E-Commerce</Logo>
      <NavLinks>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/men">Men</Link></NavItem>
        <NavItem><Link to="/women">Women</Link></NavItem>
        <NavItem><Link to="/kids">Kids</Link></NavItem>
        <NavItem><Link to="/sale">Sale</Link></NavItem>
        <NavItem><Link to="/products">All Products</Link></NavItem>
      </NavLinks>
      <RightSide>
        <Link to="/login" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
          Log In
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
          Sign Up
        </Link>
        <CartLink to="/cart">
          <IconPlaceholder>🛒</IconPlaceholder>
          {cartItemCount > 0 && `(${cartItemCount})`}
        </CartLink>
        <LogoutButton onClick={handleLogout}>Log Out</LogoutButton> {/* Add the Log Out button */}
      </RightSide>
    </NavigationBar>
  );
}

export default Navbar;