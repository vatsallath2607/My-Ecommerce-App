import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
  background-color: #f4f4f4;
`;

const AuthCard = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const AuthTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
`;

const LoginButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  width: 100%;
  &:hover {
    background-color: #0056b3;
  }
`;

const SignUpLink = styled.p`
  margin-top: 15px;
  text-align: center;
  color: #777;
  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function LoginPage() {
  const navigate = useNavigate(); // Get the navigate function

  const handleLogin = () => {
    // Add your actual login logic here (e.g., API call)
    console.log('Logging in...');
    // After successful login (or immediately for this example), navigate to the home page
    navigate('/');
  };

  return (
    <AuthContainer>
      <AuthCard>
        <AuthTitle>Welcome Back!</AuthTitle>
        <form onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" id="email" />
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput type="password" id="password" />
          <LoginButton type="button" onClick={handleLogin}>Log In</LoginButton> {/* Attach onClick handler */}
        </form>
        <SignUpLink>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </SignUpLink>
      </AuthCard>
    </AuthContainer>
  );
}

export default LoginPage;